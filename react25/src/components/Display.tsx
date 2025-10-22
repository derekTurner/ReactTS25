import ReactMarkdown from "react-markdown";
import { useLoaderData } from 'react-router-dom';

const Display: React.FC = () => {
  const content = useLoaderData() as string;

  return (
    <div className="markdown-container" style={{ padding: 20 }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Display;
