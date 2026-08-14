import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  const { additional } = portfolioConfig.skills;

  const additionalCategories = [
    { title: "State Management", items: additional.stateManagement },
    { title: "Forms & Validation", items: additional.formsValidation },
    { title: "Data Visualization", items: additional.dataVisualization },
    { title: "Data Tables", items: additional.dataTables },
    {
      title: "Architecture & Performance",
      items: additional.architecturePerformance,
    },
    { title: "Deployment & DevOps", items: additional.deploymentDevOps },
    { title: "Tools & Protocols", items: additional.toolsAndCommunication },
    { title: "Other Skills & Tech", items: additional.other },
  ];

  return (
    // SKILLS PAGE WITH ALL CONFIG DATA
    <ScrollArea className="h-full w-full pr-4">
      <div className="relative flex flex-col items-start gap-5 pb-8">
        <Badge variant="secondary" className="gap-1.5 py-1">
          <LightbulbIcon className="w-4 h-4" />
          My Skills
        </Badge>

        <div className="flex flex-col gap-6 w-full">
          <Heading>My Technical Experience/Skills.</Heading>

          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
              Currently i am a fresher and i have a solid understanding of
              HTML5, CSS3, JS, TS and React, including responsive design
              principles. I specialize in building web applications and sites
              using Javascript, Typescript, React, Next.js & Node.
            </p>
          </FramerWrapper>

          {/* 1. PROGRAMMING LANGUAGES */}
          <FramerWrapper y={100} delay={0.3} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4 mt-2">
              Programming Languages
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter
                items={portfolioConfig.skills.programmingLanguages}
              />
            </div>
          </FramerWrapper>

          {/* 2. FRAMEWORKS & LIBRARIES */}
          <FramerWrapper className="block w-full" y={100} delay={0.32}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4 mt-2">
              Frameworks & Libraries
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.frameworks} />
            </div>
          </FramerWrapper>

          {/* 3. TOOLS & TECHNOLOGIES */}
          <FramerWrapper className="block w-full" y={100} delay={0.34}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4 mt-2">
              Tools & Technologies
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.tools} />
            </div>
          </FramerWrapper>

          {/* 4. ADDITIONAL SPECIALIZED SKILLS */}
          <FramerWrapper className="block w-full" y={100} delay={0.36}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-6 mt-4">
              Specialized Expertise & Architecture
            </h1>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
              {additionalCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border bg-card/50 backdrop-blur-sm flex flex-col gap-2.5"
                >
                  <h3 className="font-poppins font-medium text-base text-primary/90">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, skillIdx) => (
                      <Badge
                        key={skillIdx}
                        variant="outline"
                        className="text-xs font-normal py-1 px-2.5 hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FramerWrapper>
        </div>
      </div>
    </ScrollArea>
  );
};

export default skillPage;
