"use client";

import { ArticlesCard } from "@/styles/components/ArticlesCard";

import Image from "next/image";

import bgImg from "../assets/bgImg.png";

interface ArticleCardProps {
  title: string;
  description: string;
  createdAt: Date;
  path: string | undefined;
}

export function ArticleCard({
  title,
  description,
  createdAt,
  path,
}: ArticleCardProps) {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR");
  const formattedDate = dateFormatter.format(new Date(createdAt));

  return (
    <ArticlesCard href={path ? path : ""} target="_blank">
      <Image src={bgImg} alt="" />
      <div>
        <span>{formattedDate}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </ArticlesCard>
  );
}
