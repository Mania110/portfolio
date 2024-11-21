"use client";

import { useTransition, useState, SetStateAction } from "react";
import Image from "next/image";
import TabButton from "./tabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc">
        <li>Matric in Computer Science by ARI Progressive Academy</li>
        <li>Intermediate in Arts</li>
        <li>Web 3.0 & Metaverse by GIAIC</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-4 py-6 px-4 xl sm:py-16 xl:px-7">
        <Image src="/img2.jpg" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-pink-600">About Me</h2>
          <p className="text-base md:text-lg">
            Hello! I Mania Ali, a passionate website developer and a senior
            international sales representative. With a background in Java, HTML,
            and CSS, I am on a journey to become a full-stack developer. My
            focus is on creating visually appealing and user-friendly e-commerce
            websites, currently utilizing Next.js for my projects. As a team
            leader in international sales, I thrive on building relationships
            and providing exceptional service to clients. When I not
            coding, I enjoy exploring new technologies and improving my skills
            in web development.
          </p>
          <div className="flex flex-row  justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
