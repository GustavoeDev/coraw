import { ArticlesCard } from "@/styles/components/ArticlesCard";

import Image from "next/image";

import bgImg from "../assets/bgImg.png";

export function ArticleCard() {
  return (
    <ArticlesCard href="#">
      <Image src={bgImg} alt="" />
      <div>
        <span>26/01/2022</span>
        <h4>O impacto do ‘coral bleaching’ nos oceanos</h4>
        <p>
          Este artigo discute os efeitos do branqueamento de corais na
          biodiversidade marinha e explora possíveis soluções
        </p>
      </div>
    </ArticlesCard>
  );
}
