import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../services";
import {
  IChildren,
  IRequests,
  IRequestsData,
  REQUESTS_DEFAULT_VALUE,
} from "./types";

const RequestsContext = createContext<IRequestsData>(REQUESTS_DEFAULT_VALUE);

export function RequestsProvider({ children }: IChildren) {
  const [requests, setRequests] = useState<IRequests[]>([]);

  return (
    <RequestsContext.Provider value={{ requests, setRequests }}>
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequests() {
  const { requests, setRequests } = useContext(RequestsContext);

  return { requests, setRequests };
}
