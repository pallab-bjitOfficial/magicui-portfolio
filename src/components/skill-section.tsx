import React from "react";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Badge } from "./ui/badge";
import IconCloud from "./magicui/icon-cloud";
const BLUR_FADE_DELAY = 0.04;
const slugs = [
  "c",
  "cplusplus",
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "express",
  "nestjs",
  "mongodb",
  "html5",
  "css3",
  "sass",
  "tailwindcss",
  "prisma",
  "postgresql",
  "docker",
  "git",
  "github",
];
const SkillSection = () => {
  return (
    <section id="skills">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
};

export default SkillSection;
