import ReactMarkdown from "react-markdown";
//import { useParams } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

const Tutorial: React.FC = () => {
  //const { productId } = useParams(); // Access params in component (still works)
  const content = useRouteLoaderData("root"); // Access loader data

  return (
    <div className="presentation-container" style={{ padding: 20 }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Tutorial;
