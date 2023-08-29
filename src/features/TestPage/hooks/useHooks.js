import { useState } from "react";

export const useHooks = () => {
  const [menu, setMenu] = useState(false);

  const [selection, setSelection] = useState(0);

  const [colorStep, setColorStep] = useState(1);

  return {
    menu,
    setMenu,
    selection,
    setSelection,
    colorStep,
    setColorStep,
  };
};
