import { CSSProperties } from 'react';
import './Card.css';
const LearningPath = ({
  learn,
  style,
}: {
  learn: string;
  style: CSSProperties;
}) => {
  return <div className="card cursor-pointer text-2xl">{learn}</div>;
};

export default LearningPath;
