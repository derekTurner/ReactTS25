import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Presentation: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/assets/page1/SveltePresentation.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading markdown:", error));
  }, []);

  return (
    <div className="presentation-container" style={{ padding: 20 }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Presentation;
