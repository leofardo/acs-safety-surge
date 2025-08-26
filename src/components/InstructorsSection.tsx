import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, CheckCircle } from "lucide-react";
import acsLogo from "@/assets/Treinamentos Offshore.jpeg";

const InstructorsSection = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(0);

  const instructors = [
    {
      name: "Avelino Carvalho",
      image: acsLogo,
      title: "Instrutor Sênior de Normas Regulamentadoras",
      experience: "15+ anos",
      specialties: [
        "Normas Regulamentadoras (NR’s)",
        "Offshore",
        "Treinamento de Emergência",
        "Segurança do Trabalho",
        "CREA-RJ 1999105206"
      ],
      certifications: [
        "Certified Safety Professional (CSP)",
        "OPITO Approved Instructor",
        "Instrutor Certificado MTE",
        "International Safety Trainer"
      ],
      description: "Profissional com vasta experiência em Normas Regulamentadoreas e segurança offshore, tendo atuado nas principais plataformas do Brasil. Especialista em treinamentos de emergência e evacuação, com metodologia prática e vivência real no setor.",
      rating: 5.0,
      studentsCount: "30.000"
    }
  ];

  const currentInstructor = instructors[selectedInstructor];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* <Badge variant="outline" className="mb-4 text-primary border-primary">
            Nosso Time
          </Badge> */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Instrutores Altamente Qualificados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa equipe é formada por profissionais experientes que combinam conhecimento técnico 
            com experiência prática em campo, garantindo treinamentos de excelência.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Instructor Image */}
                <div className="lg:col-span-2 relative">
                  <div className="aspect-[3/4] lg:h-full relative overflow-hidden">
                    <img
                      src={currentInstructor.image}
                      alt={currentInstructor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm">{currentInstructor.rating}</span>
                    </div>
                    
                    {/* Students Count */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="font-semibold text-sm text-primary">
                        {currentInstructor.studentsCount}+ alunos
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instructor Details */}
                <div className="lg:col-span-3 p-8 md:p-12">
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        {currentInstructor.name}
                      </h3>
                      <p className="text-xl text-secondary font-semibold mb-2">
                        {currentInstructor.title}
                      </p>
                      <Badge variant="secondary" className="text-sm">
                        {currentInstructor.experience} de experiência
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                      {currentInstructor.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Especialidades
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {currentInstructor.specialties.map((specialty, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="text-muted-foreground">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    {/* <div className="mb-8">
                      <h4 className="text-lg font-bold text-primary mb-4">Certificações</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentInstructor.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div> */}

                    <div className="mt-auto">
                      
                      <Button 
                        asChild
                        size="lg" 
                        className="w-full sm:w-auto"
                      >
                        <a
                          href="https://api.whatsapp.com/send/?phone=5521983620038&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20ACS%20Treinamentos%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20cursos%20dispon%C3%ADveis." 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Solicitar Treinamento com {currentInstructor.name.split(' ')[0]}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;