import CourseCard from "./CourseCard";
import nr10Image from "@/assets/nr10-training.jpg";
import nr35Image from "@/assets/nr35-training.jpg";
import offshoreImage from "@/assets/offshore-training.jpg";

const Courses = () => {
  const courses = [
     {
      title: "Operador de Veículo Submarino (EAD)",
      description: "Curso para operação de ROVs em operações submarinas, com foco em segurança e eficiência.",
      image: nr10Image,
      duration: "8 horas",
      participants: "EAD",
      certification: "Certificado Operador ROV",
      highlights: [
        "Operação de ROV",
        "Manutenção e reparo básico",
        "Segurança em ambientes submarinos",
        "Comunicação com equipe"
      ]
    },
    {
      title: "NR 33 e 35 - Trabalho em Altura",
      description: "Treinamento para atividades executadas acima de 2 metros do nível inferior com risco de queda.",
      image: nr35Image,
      duration: "8 horas",
      participants: "Presencial",
      certification: "Certificado NR 33 e 35",
      highlights: [
        "Análise de risco",
        "Equipamentos de proteção",
        "Resgate e primeiros socorros",
        "Sistemas de ancoragem"
      ]
    },
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
    },
    {
      title: "Operador de PTA",
      description: "Curso para operação de Plataforma de Trabalho Aéreo, elevando a segurança e eficiência.",
      image: nr35Image,
      duration: "8 horas",
      participants: "Até 12 pessoas",
      certification: "Certificado Operador PTA",
      highlights: [
        "Operação segura de PTA",
        "Inspeção de equipamentos",
        "Comunicação em solo",
        "Procedimentos de emergência"
      ]
    },
    {
      title: "Operador de Drone",
      description: "Pilotando a inovação e a segurança nos céus com treinamento especializado.",
      image: offshoreImage,
      duration: "8 horas",
      participants: "EAD",
      certification: "Certificado Operador Drone",
      highlights: [
        "Técnicas de voo",
        "Legislação vigente",
        "Segurança e ética",
        "Captura de dados"
      ]
    },
    {
      title: "Montador de Andaimes",
      description: "Construindo a segurança em altura com treinamento especializado em montagem.",
      image: nr35Image,
      duration: "8 horas",
      participants: "Até 15 pessoas",
      certification: "Certificado Montador",
      highlights: [
        "Técnicas de montagem",
        "Normas de segurança",
        "Inspeção de equipamentos",
        "Primeiros socorros"
      ]
    },
    {
      title: "Operador de Empilhadeira",
      description: "Movimentando a logística com segurança e eficiência através de treinamento qualificado.",
      image: nr10Image,
      duration: "8 horas",
      participants: "Até 10 pessoas",
      certification: "Certificado Operador",
      highlights: [
        "Operação segura",
        "Manutenção básica",
        "Normas de segurança",
        "Prevenção de acidentes"
      ]
    },
    {
      title: "Operador Caminhão Silo Cimenteiro",
      description: "Transporte eficiente e seguro de cimento com treinamento especializado.",
      image: offshoreImage,
      duration: "8 horas",
      participants: "Até 8 pessoas",
      certification: "Certificado Operador",
      highlights: [
        "Carregamento e descarga",
        "Manutenção de equipamentos",
        "Segurança no transporte",
        "Normas técnicas"
      ]
    },
    {
      title: "Formação de Equipes CIPA",
      description: "Garantindo a segurança no ambiente de trabalho através da capacitação de equipes.",
      image: nr10Image,
      duration: "20 horas",
      participants: "Até 20 pessoas",
      certification: "Certificado CIPA",
      highlights: [
        "Identificação de riscos",
        "Planos de prevenção",
        "Investigação de acidentes",
        "Treinamentos de segurança"
      ]
    },
    {
      title: "Brigadas de Incêndio",
      description: "Protegendo vidas e patrimônios através de treinamento especializado em combate a incêndios.",
      image: nr35Image,
      duration: "20 horas",
      participants: "Até 15 pessoas",
      certification: "Certificado Brigadista",
      highlights: [
        "Prevenção de incêndios",
        "Técnicas de combate",
        "Evacuação de emergência",
        "Primeiros socorros"
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