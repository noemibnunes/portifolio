interface ProjectCardProps {
  title: string;
  subtitle?: string;
  image: string;
  year: string;
  link?: string;
  size?: "small" | "large";
}

export const ProjectCard = ({
  title,
  subtitle,
  image,
  year,
  link,
  size = "small",
}: ProjectCardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className={`group relative overflow-hidden bg-card border border-border/20 hover:border-border/40 transition-all duration-300 cursor-pointer animate-scale-in
        ${size === "large" ? "lg:col-span-2" : "col-span-1"}`}
      onClick={handleClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg md:text-xl font-medium text-white mb-1">{title}</h3>
          {subtitle && <p className="text-sm md:text-base text-white mb-2">{subtitle}</p>}
          <span className="text-xs md:text-sm font-medium text-white">{year}</span>
        </div>
      </div>
    </div>
  );
};

