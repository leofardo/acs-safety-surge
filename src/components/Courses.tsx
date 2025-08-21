import CourseCard from "./CourseCard";
import nr10Image from "@/assets/nr10-training.jpg";
import nr35Image from "@/assets/nr35-training.jpg";
import offshoreImage from "@/assets/offshore-training.jpg";

const Courses = () => {
  const courses = [
    {
      title: "NR 10 - Segurança em Instalações Elétricas",
      description: "Capacitação para trabalhos em instalações elétricas, prevenção de acidentes e procedimentos de segurança.",
      image: nr10Image,
      duration: "40 horas",
      participants: "Até 15 pessoas",
      certification: "Certificado NR 10",
      highlights: [
        "Riscos em instalações elétricas",
        "Medidas de controle e prevenção",
        "Primeiros socorros",
        "Proteção e combate a incêndios"
      ]
    },
    {
      title: "NR 35 - Trabalho em Altura",
      description: "Treinamento para atividades executadas acima de 2 metros do nível inferior com risco de queda.",
      image: nr35Image,
      duration: "8 horas",
      participants: "Até 12 pessoas",
      certification: "Certificado NR 35",
      highlights: [
        "Análise de risco",
        "Equipamentos de proteção",
        "Resgate e primeiros socorros",
        "Sistemas de ancoragem"
      ]
    },
    {
      title: "NR 37 - Primeiro Embarque Offshore",
      description: "Capacitação obrigatória para profissionais que trabalham em plataformas marítimas.",
      image: offshoreImage,
      duration: "16 horas",
      participants: "Até 10 pessoas",
      certification: "Certificado NR 37",
      highlights: [
        "Segurança em plataformas",
        "Sobrevivência no mar",
        "Equipamentos de segurança",
        "Procedimentos de emergência"
      ]
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Cursos Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos treinamentos completos em Normas Regulamentadoras, 
            com foco na capacitação prática e certificação reconhecida no mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Oferecemos também outros cursos como NR 12, NR 33, NR 18 e treinamentos personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gradient px-8 py-3 rounded-lg text-accent-foreground font-semibold hover:shadow-lg transition-all">
              Ver Todos os Cursos
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
              Treinamento Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;