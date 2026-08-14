import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Layers } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const projectsPage = () => {
  return (
    // PROJECT PAGE WITH SHADCN SCROLL-AREA
    <ScrollArea className="h-full w-full pr-4">
      <div className="relative flex flex-col items-start gap-5 pb-8">
        <Badge variant="secondary" className="gap-1.5 py-1">
          <Layers className="h-4 w-4" />
          Projects
        </Badge>

        <div className="flex flex-col gap-3 w-full">
          <Heading>My Projects</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
              I love to Build Cool Projects. Here, you&#x27;ll find a curated
              collection of my creative endeavors and technical projects. Each
              piece represents a journey of innovation, problem-solving, and
              continuous learning. Feel free to explore this showcase of my
              passion and expertise in action.
            </p>
          </FramerWrapper>
        </div>

        <div className="w-full flex flex-row flex-wrap gap-4 max-lg:flex-col pt-2">
          {portfolioConfig.projects.map((val, indx) => {
            return <ProjectCards key={indx} value={val} num={indx} />;
          })}
        </div>
      </div>
    </ScrollArea>
  );
};

export default projectsPage;
