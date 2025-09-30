export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8 leading-none">
            caio vinicius
          </h1>
          
          <p className="text-lg md:text-xl font-light text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            UI Designer especializado em criar experiências digitais excepcionais. 
            Transformo ideias em interfaces elegantes e funcionais.
          </p>
        </div>
        
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Disponível para projetos</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div>Brasil</div>
          </div>
        </div>
      </div>
    </section>
  );
};