import { createContext, useState, useContext, useEffect } from "react";
import { IChildren } from "./types";

import { useCart } from "./cart";

const UniqueIdContext = createContext<{
  uniqueId: number[];
  setUniqueId: (n: number[]) => void;
}>({ uniqueId: [], setUniqueId: () => {} });

export function UniqueIdProvider({ children }: IChildren) {
  const { cart } = useCart();
  const [uniqueId, setUniqueId] = useState<number[]>([]);

  useEffect(() => {
    const ids: number[] = cart.map((obj) => obj.id);
    setUniqueId(ids);
  }, [cart]);

  return (
    <UniqueIdContext.Provider value={{ uniqueId, setUniqueId }}>
      {children}
    </UniqueIdContext.Provider>
  );
}

export function useUnique() {
  const { uniqueId, setUniqueId } = useContext(UniqueIdContext);

  return { uniqueId, setUniqueId };
}
