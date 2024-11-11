"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

export interface Article {
  title: string;
  description: string;
  fileUpload: File | undefined;
  fileUrl: string | undefined;
  createdAt: Date;
}

export interface UserValid {
  id: number;
  email: string;
  password: string;
  name: string;
  articles: Article[];
}

interface UserValidLoginContextType {
  userValid: UserValid | null;
  addUserValid: (user: UserValid | null) => void;
  userClicked: number;
  updateUserClicked: (userId: number) => void;
  articleClicked: Article | null;
  updateArticleClicked: (article: Article) => void;
}

export const UserValidLoginContext = createContext<UserValidLoginContextType>(
  {} as UserValidLoginContextType
);

interface UserValidLoginProps {
  children: ReactNode;
}

export default function UserValidLogin({ children }: UserValidLoginProps) {
  const [userValid, setUserValid] = useState<UserValid | null>(null);
  const [userClicked, setUserClicked] = useState(0);
  const [articleClicked, setArticleClicked] = useState<Article | null>(null);

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem("@coraw:userValid-1.0.0");
    if (storedStateAsJSON) {
      setUserValid(JSON.parse(storedStateAsJSON));
    }
  }, []);

  function updateUserClicked(userId: number) {
    setUserClicked(userId);
  }

  function updateArticleClicked(articleData: Article) {
    setArticleClicked(articleData);
  }

  function addUserValid(user: UserValid | null) {
    setUserValid(user);
  }

  useEffect(() => {
    if (userValid) {
      const stateJSON = JSON.stringify(userValid);
      localStorage.setItem("@coraw:userValid-1.0.0", stateJSON);
    }
  }, [userValid]);

  return (
    <UserValidLoginContext.Provider
      value={{
        userValid,
        addUserValid,
        updateUserClicked,
        userClicked,
        updateArticleClicked,
        articleClicked,
      }}
    >
      {children}
    </UserValidLoginContext.Provider>
  );
}
