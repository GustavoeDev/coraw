"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

interface UserValid {
  email: string;
  password: string;
  name: string;
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
  const [userValid, setUserValid] = useState<UserValid | null>(() => {
    const storedStateAsJSON = localStorage.getItem("@coraw:userValid-1.0.0");
    return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : null;
  });

  function addUserValid(user: UserValid) {
    setUserValid(user);
  }

  useEffect(() => {
    if (userValid) {
      const stateJSON = JSON.stringify(userValid);
      localStorage.setItem("@coraw:userValid-1.0.0", stateJSON);
    }
  }, [userValid]);

  return (
    <UserValidLoginContext.Provider value={{ userValid, addUserValid }}>
      {children}
    </UserValidLoginContext.Provider>
  );
}
