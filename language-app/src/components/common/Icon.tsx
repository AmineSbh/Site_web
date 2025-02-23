import React, { JSX } from "react";

interface IconProps {
  icon: JSX.Element;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, color }) => {
  return <span style={{ color }}>{icon}</span>;
};

export default Icon;