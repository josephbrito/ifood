import { createContext, useState, useContext } from "react";
import { IChildren } from "./types";

const OpenContext = createContext<{
  isMenuOpen: boolean;
  setIsMenuOpen: (s: boolean) => void;
}>({ isMenuOpen: false, setIsMenuOpen: () => {} });

export function OpenProvider({ children }: IChildren) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <OpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </OpenContext.Provider>
  );
}

export function useOpen() {
  const { isMenuOpen, setIsMenuOpen } = useContext(OpenContext);

  return { isMenuOpen, setIsMenuOpen };
}
