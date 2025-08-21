import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Quais são os principais cursos oferecidos pela ACS Treinamentos?",
      answer: "Oferecemos uma ampla gama de cursos, incluindo NR 10 (Segurança em Instalações Elétricas), NR 35 (Trabalho em Altura), NR 37 (Primeiro Embarque Offshore), operação de equipamentos como empilhadeiras e drones, formação de CIPA e brigadas de incêndio."
    },
    {
      question: "Os certificados emitidos são reconhecidos nacionalmente?",
      answer: "Sim, todos os nossos certificados são reconhecidos em todo território nacional e seguem rigorosamente as Normas Regulamentadoras do Ministério do Trabalho."
    },
    {
      question: "Vocês oferecem treinamentos in company?",
      answer: "Sim, oferecemos treinamentos personalizados na sua empresa, adequados às necessidades específicas do seu negócio. Nossa equipe pode se deslocar para qualquer local do Brasil."
    },
    {
      question: "Qual a diferença entre os cursos presenciais e EAD?",
      answer: "Os cursos presenciais incluem atividades práticas e simulações, enquanto os cursos EAD oferecem flexibilidade de horário mantendo a mesma qualidade de conteúdo. Ambos resultam em certificação válida."
    },
    {
      question: "Como funciona o atendimento 24 horas?",
      answer: "Mantemos uma equipe de plantão para emergências e consultas urgentes relacionadas aos treinamentos. Você pode entrar em contato conosco a qualquer hora do dia através dos nossos canais de comunicação."
    },
    {
      question: "Vocês têm instrutores bilíngues?",
      answer: "Sim, nossa equipe inclui profissionais bilíngues (português/inglês) especializados em atender demandas do setor offshore e empresas multinacionais."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclareça suas dúvidas sobre nossos treinamentos e certificações
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card border rounded-lg p-6 card-elevated"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <button className="btn-gradient px-8 py-3 rounded-lg text-secondary-foreground font-semibold hover:shadow-lg transition-all">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;