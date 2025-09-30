import { ProjectCard } from "./ProjectCard";
import neobankImage from "../assets/project-neobank.jpg";
import healthAppImage from "../assets/healthAppImage.jpg";
import spaceFashion from "../assets/spaceFashion.jpg";
import imusic from "../assets/imusic.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Way Emergency",
      subtitle: "O aplicativo conecta informações pessoais do usuário a dispositivos, facilitando acesso rápido em emergências.",
      image: healthAppImage,
      year: "2024",
      link: "https://www.behance.net/gallery/209355359/App-de-Saude-UITober2024",
      size: "large" as const
    },
    {
      title: "Space Fashion",
      subtitle: "Space Fashion oferece uma experiência móvel de compras online personalizada, prática e divertida.",
      image: spaceFashion,
      year: "2024",
      link: "https://www.behance.net/gallery/209254137/Space-Fashion-UITober2024",
    },
    {
      title: "IMusic",
      subtitle: "",
      image: imusic,
      year: "2023",
      link: "https://www.behance.net/gallery/165977517/Streaming-de-Musica-iMusic"
    },
    {
      title: "UI Design",
      subtitle: "App Bestpass",
      image: neobankImage,
      year: "2024"
    },
    {
      title: "Neobank",
      subtitle: "",
      image: neobankImage,
      year: "2022"
    },
    {
      title: "Brand Guideline",
      subtitle: "Leme",
      image: neobankImage,
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              year={project.year}
              link={project.link}
              size={project.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};