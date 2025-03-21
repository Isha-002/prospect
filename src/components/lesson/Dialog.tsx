import { useLocation, useParams } from 'react-router';
import { useStore } from '../store';
import React, {
  useMemo,
  Children,
  cloneElement,
  useState,
  useRef,
  ReactNode,
} from 'react';

const Dialog = () => {
  const location = useLocation();
  const { lesson } = useParams();
  const grade = location.pathname.includes('7th')
    ? 7
    : location.pathname.includes('8th')
    ? 8
    : 9;
  const [selectedWordId, setSelectedWordId] = useState<number | null>(null);

  const dialogs = useStore((state) => {
    if (grade === 7) return state._7th_dialogs;
    if (grade === 8) return state._8th_dialogs;
    if (grade === 9) return state._9th_dialogs;
  });

  const handleWordClick = (wordId: number): void => {
    setSelectedWordId((prevId) => (prevId === wordId ? null : wordId));
  };


  const dialogContent = dialogs
    ? JSON.stringify(dialogs[Number(lesson) - 1])
    : 'Loading...';

  return (
    <div className="p-4">
      <ClickableTextWrapper
        onWordClick={handleWordClick}
        selectedWordId={selectedWordId}
      >
        {dialogContent}
      </ClickableTextWrapper>
    </div>
  );
};


const ClickableTextWrapper = ({
  children,
  onWordClick,
  selectedWordId,
}: {
  children: ReactNode;
  onWordClick: (wordId: number) => void;
  selectedWordId: number | null;
}) => {
  const wordIdCounter = useRef(0);
  const wordRegex = /(\w+['-]\w+)|(\w+)|([^\w]+)/g;

  const isValidWord = (token: string): boolean => {
    const isWord = /^\w+['-]?\w*$/.test(token);
    return isWord && (token.length > 1 || token.toLowerCase() === 'i');
  };

  const processNode = (node: ReactNode): ReactNode => {
    if (typeof node === 'string') {
      return processString(node);
    }
    if (React.isValidElement(node)) {
      return cloneElement(node, {
        ...node.props,
        children: Children.map(node.props.children, (child) =>
          processNode(child)
        ),
      });
    }
    return node;
  };

  const processString = (text: string): ReactNode[] => {
    wordIdCounter.current = 0;
    const tokens = text.match(wordRegex) || [];
  
    return tokens.map((token: string, index: number) => {
      const isWord = isValidWord(token);
  
      if (!isWord) return token;
  
      const currentWordId = wordIdCounter.current++;
      const isSelected = selectedWordId === currentWordId;
      return (
        <span
          key={`${index}-${token}`}
          data-word-id={currentWordId}
          onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
            e.stopPropagation();
            onWordClick(currentWordId);
          }}
          style={{
            cursor: 'pointer',
            backgroundColor: isSelected ? '#E3C2FF' : 'transparent',
            padding: '0px 2px 2px 2px',
            borderRadius: '3px',
            transition: 'background-color 0.2s',
          }}
        >
          {token}
        </span>
      );
    });
  };

  const processedChildren = useMemo(
    () => Children.map(children, (child) => processNode(child)),
    [children, selectedWordId]
  );

  return <>{processedChildren}</>;
};

export default Dialog;
