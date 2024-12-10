import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface HeadingProps {
  text: string;
  icon: IconDefinition;
  anchor: string;
}

const Heading3: React.FC<HeadingProps> = ({ text, icon, anchor }) => {
  return (
    <a href={anchor}>
      <div className="flex flex-col items-center justify-center border-2 border-zinc-800 rounded bg-zinc-900 hover:bg-red-600 w-20 h-20">
        <FontAwesomeIcon icon={icon} className="text-xl" />
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Heading3;