"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

type Props = {
  children: ReactNode;
};

interface ContextProps {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  numberOfPeople: number;
  setNumberOfPeople: Dispatch<SetStateAction<number>>;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  userNotes: string;
  setUserNotes: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps | undefined>(undefined);

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [destination, setDestination] = useState<string>('');
  const [date, setDate] = useState<Date>(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  });
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [userNotes, setUserNotes] = useState<string>("");

  const contextValue = {
    destination,
    setDestination,
    date,
    setDate,
    numberOfPeople,
    setNumberOfPeople,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    userNotes,
    setUserNotes,
  };

 

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
