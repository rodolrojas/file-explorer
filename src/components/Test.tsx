import { useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <Button
        variant="outline"
        onClick={() => setCount(count + 1)}
        className="mb-4"
      >
        Click!
      </Button>
      <p className="text-bold align-center mb-4">
        Hiciste clic {count} veces! Sapee!
      </p>
      <ModeToggle />
    </div>
  );
};

export default Test;
