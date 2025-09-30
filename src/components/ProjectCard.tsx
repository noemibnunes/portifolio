interface ProjectCardProps {
  title: string;
  subtitle?: string;
  image: string;
  year: string;
  link?: string;
  size?: "small" | "large";
  textColor?: string;
}

export const ProjectCard = ({
  title,
  subtitle,
  image,
  year,
  link,
  size = "small",
  textColor = "white"
}: ProjectCardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div 
      className={`group relative overflow-hidden bg-card border border-border/20 hover:border-border/40 transition-all duration-300 hover-scale cursor-pointer animate-scale-in ${
        size === "large" ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onClick={handleClick}
    >
      <div className={`aspect-[4/3] ${size === "large" ? "md:aspect-[2/1]" : ""} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div style={{ color: textColor }} className="drop-shadow-lg">
          <h3 className="text-lg font-medium mb-1 leading-tight">
            {title}
          </h3>
          <p className="text-sm mb-2">
            {subtitle}
          </p>
          <span className="text-xs font-medium">
            {year}
          </span>
        </div>
      </div>
    </div>
  );
};
