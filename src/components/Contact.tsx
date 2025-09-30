export const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Vamos trabalhar juntos
          </h2>
          
          <p className="text-lg font-light text-muted-foreground mb-12 max-w-2xl mx-auto">
            Disponível para projetos freelance e oportunidades de tempo integral. 
            Entre em contato para discutir seu próximo projeto.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="mailto:caio@email.com"
              className="text-foreground hover:text-muted-foreground transition-colors duration-200 text-lg font-light"
            >
              caio@email.com
            </a>
            
            <div className="hidden md:block w-px h-6 bg-border"></div>
            
            <a
              href="https://www.behance.net/caioviniciius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors duration-200 text-lg font-light"
            >
              behance.net/caioviniciius
            </a>
            
            <div className="hidden md:block w-px h-6 bg-border"></div>
            
            <a
              href="https://www.linkedin.com/in/caioviniicius/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors duration-200 text-lg font-light"
            >
              linkedin.com/in/caioviniciius
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};