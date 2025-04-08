import React from "react";

interface BadgeLabelProps {
  label: string;
}

const BadgeLabel: React.FC<BadgeLabelProps> = ({ label }) => {
  return (
    <span className="flex items-center justify-center w-[144px] h-[32px] bg-[url('/images/acz.png')] bg-cover bg-center">
      {label}
    </span>
  );
};

export default BadgeLabel;
