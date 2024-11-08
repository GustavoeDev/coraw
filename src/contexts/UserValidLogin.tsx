"use client";

import { createContext, ReactNode, useState } from "react";

interface UserValid {
  email: string;
  password: string;
}

interface UserValidLoginContextType {
  userValid: UserValid | null;
  addUserValid: (user: UserValid) => void;
}

export const UserValidLoginContext = createContext(
  {} as UserValidLoginContextType
);

interface UserValidLoginProps {
  children: ReactNode;
}

export default function UserValidLogin({ children }: UserValidLoginProps) {
  const [userValid, setUserValid] = useState<UserValid | null>(null);

  function addUserValid(user: UserValid) {
    setUserValid(user);
  }

  return (
    <UserValidLoginContext.Provider value={{ userValid, addUserValid }}>
      {children}
    </UserValidLoginContext.Provider>
  );
}
