import { useState } from "react";
import Button from "./button";

export default function Box({ element }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="box">
        <Button
          className="btn-toggle"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {isOpen ? "–" : "+"}
        </Button>
        {isOpen && element}
      </div>
    </>
  );
}
