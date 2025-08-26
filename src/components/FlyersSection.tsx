import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import imagem1 from "@/assets/Trabalho em altura.jpeg";
import imagem2 from "@/assets/Folder 1 mão na cabeça.jpg";
import imagem3 from "@/assets/Incêndio e Para raio.png";

const FlyersSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const flyers = [
    {
      id: 1,
      title: "Material Promocional 1",
      image: imagem1
    },
    {
      id: 2,
      title: "Material Promocional 2", 
      image: imagem2
    },
    {
      id: 3,
      title: "Material Promocional 3",
      image: imagem3
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Materiais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça nossos materiais promocionais e informativos sobre 
            treinamentos e certificações especializadas.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {flyers.map((flyer) => (
                <div key={flyer.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                  <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="aspect-[7/10] overflow-hidden flex-1">
                      <img 
                        src={flyer.image} 
                        alt={flyer.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMjUwSDI0MFYyOTBIMjAwVjI1MFpNMjAwIDIxMEgyNDBWMjUwSDIwMFYyMTBaIiBmaWxsPSIjOWNhM2FmIi8+PC9zdmc+Cg==';
                        }}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlyersSection;