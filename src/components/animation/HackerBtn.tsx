"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

interface HackerBtnProps {
  label: string;
  resumePath?: string; 
}

const HackerBtn = ({ label, resumePath = "/resume.pdf" }: HackerBtnProps) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)],
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
  };

  return (
    <Button
      size={"lg"}
      className="text-base  px-5 py-6"
      onMouseEnter={startScrambling}
      
    >
      <a href={resumePath} className="flex items-center justify-center gap-2 " download="Resume.pdf">
        <Download />
        {displayText}
      </a>
    </Button>
  );
};

export default HackerBtn;
