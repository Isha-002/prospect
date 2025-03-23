import { useLocation, useParams } from 'react-router';
import { useStore } from '../store';
import React, {
  useMemo,
  Children,
  cloneElement,
  useState,
  useRef,
  ReactNode,
  useEffect,
} from 'react';

const Dialog = () => {
  const location = useLocation();
  const { lesson } = useParams();
  const grade = location.pathname.includes('7th')
    ? 7
    : location.pathname.includes('8th')
    ? 8
    : 9;
  const [selectedWordInfo, setSelectedWordInfo] = useState<{
    uid: string | null;
    text: string;
    element: HTMLElement | null;
  }>({ uid: null, text: '', element: null });
  const popupRef = useRef<HTMLDivElement>(null);

  const dialogs = useStore((state) => {
    if (grade === 7) return state._7th_dialogs;
    if (grade === 8) return state._8th_dialogs;
    if (grade === 9) return state._9th_dialogs;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('[data-word-uid]')
      ) {
        setSelectedWordInfo({ uid: null, text: '', element: null });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWordClick = (
    uid: string,
    text: string,
    element: HTMLElement
  ): void => {
    setSelectedWordInfo(prev =>
      prev.uid === uid
        ? { uid: null, text: '', element: null }
        : { uid, text, element }
    );
  };

  const dialogContent = dialogs ? dialogs[Number(lesson) - 1] : "Something Gone Wrong..."
  // @ts-ignore
  const title = dialogContent.title;
  // @ts-ignore
  const d_array = dialogContent.dialogue;

  // handle definitions
  // @ts-ignore
  const invoke = window.__TAURI__.core.invoke
  const fetch_definitions = async () => {
    await invoke('call_dictionary', { word: selectedWordInfo.text }).then((def: Array<string>) => 
      {
      console.log(def)
      // def.replace("")
      });
  }
  if (selectedWordInfo.element) {
    fetch_definitions()
  }

  return (
    <div className="p-4 relative w-full">
      <ClickableTextWrapper
        onWordClick={handleWordClick}
        selectedWordUid={selectedWordInfo.uid}
      >
        <div className="max-[1000px]:space-y-4 space-y-6 max-[1000px]:-mt-10 -mt-28 w-[95%]">
          <h1 className="max-[1000px]:text-3xl text-4xl max-[1000px]:font-bold font-black">Lesson {lesson}</h1>
          <p className="text-gray-500 max-[1000px]:text-lg text-2xl">{title}</p>
            {dialogs && d_array.map((d: Record<string, ReactNode>, i: number) => (
            <div key={i}>
              <p className='inline max-[1000px]:font-semibold font-bold max-[1000px]:text-base text-xl text-indigo-800'>{Object.keys(d)[0]} : </p>
              <span className='max-[1000px]:text-base text-xl'>{Object.values(d)[0] as ReactNode}</span>
            </div>
            ))}
          
        </div>
      </ClickableTextWrapper>

      {selectedWordInfo.element && (
        <div
          ref={popupRef}
          className="absolute bg-white p-2 shadow-lg rounded border border-gray-200 z-50"
          style={{
            top: `${
              selectedWordInfo.element.offsetTop +
              selectedWordInfo.element.offsetHeight +
              5
            }px`,
            left: `${selectedWordInfo.element.offsetLeft}px`,

          }}
        >
          <div className="text-sm font-medium line">
            <span className='text-gray-400'>Selected:</span>  {selectedWordInfo.text}
          </div>
        </div>
      )}
    </div>
  );
};

const ClickableTextWrapper = ({
  children,
  onWordClick,
  selectedWordUid,
}: {
  children: ReactNode;
  onWordClick: (uid: string, text: string, element: HTMLElement) => void;
  selectedWordUid: string | null;
}) => {
  const wordRegex = /(\w+['-]\w+)|(\w+)|([^\w]+)/g;
  const uuidCounter = useRef(0);
  const uids = useRef(new Map<string, string>());

  const isValidWord = (token: string): boolean => {
    const isWord = /^\w+['-]?\w*$/.test(token);
    return isWord && (token.length > 1 || token.toLowerCase() === 'i');
  };

  const processNode = (node: ReactNode, path: number[] = []): ReactNode => {
    if (typeof node === 'string') {
      return processString(node, path);
    }

    if (React.isValidElement(node)) {
      return cloneElement(node, {
        ...node.props,
        children: Children.map(node.props.children, (child, index) => {
          const newPath = [...path, index];
          return processNode(child, newPath);
        }),
      });
    }

    return node;
  };

  const processString = (text: string, path: number[]): ReactNode[] => {
    const tokens = text.match(wordRegex) || [];
    
    return tokens.map((token, index) => {
      if (!isValidWord(token)) return token;

      const uidPath = [...path, index].join('-');
      const uid = uids.current.get(uidPath) || `word-${uuidCounter.current++}`;
      uids.current.set(uidPath, uid);

      return (
        <span
          key={uid}
          data-word-uid={uid}
          onClick={(e) => {
            e.stopPropagation();
            onWordClick(uid, token, e.currentTarget);
          }}
          style={{
            cursor: 'pointer',
            backgroundColor: uid === selectedWordUid ? '#E3C2FF' : 'transparent',
            padding: '2px 3px',
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
    () => Children.map(children, (child) => processNode(child, [])),
    [children]
  );

  return <>{processedChildren}</>;
};

export default Dialog;