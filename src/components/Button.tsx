import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <div
      className="btn btn-primary btn-lg"
      onClick={() => {
        console.log("You clicked a large button");
      }}
    >
      {children}
    </div>
  );
};

export default Button;
