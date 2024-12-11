import React from "react";
import Heading3 from "./Heading-3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ProficiencyProps {
  heading: string;
  text: string;
  icon: IconDefinition;
}

const Proficiency: React.FC<ProficiencyProps> = ({ text, heading, icon }) => {
  return (
    <div className=" border-2  border-zinc-800 rounded-lg p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div>
          <FontAwesomeIcon icon={icon} className="text-6xl text-cyan-400" />
        </div>
        <div>
          <Heading3 text={heading} />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Proficiency;
