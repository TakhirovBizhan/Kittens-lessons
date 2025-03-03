import React from "react";

type TButtonProps = {
  count: string;
};

export const Button: React.FC<TButtonProps> = ({ count }) => {
  return <button>{count}</button>;
};
