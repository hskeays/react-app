import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "warning" | "danger";
  isVisible?: boolean;
  onClose(): void;
}

export const Alert = ({ children, color = "primary", onClose }: Props) => {
  return (
    <>
      <div className={"alert alert-" + color + " alert-dismissible fade show"}>
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
