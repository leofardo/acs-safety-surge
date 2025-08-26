import { Download, FileCheck } from "lucide-react";

import cocacola from "@/assets/ATESTADO DE CAPACIDADE TÉCNICA COCA COLA_avelino.pdf";
import embrapa from "@/assets/ATESTADO DE CAPACIDADE TÉCNICA EMBRAPA_avelino1.pdf";
import enseada from "@/assets/ATESTADO DE EXECUÇÃO ENSEADA ATUALIZADO ENSEADA.pdf";


const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Atestado de Capacidade Técnica - Coca Cola",
      description: "Treinamento realizado para colaboradores da Coca Cola",
      fileUrl: cocacola,
      size: "112 KB"
    },
    {
      id: 2,
      title: "Atestado de Capacidade Técnica - Embrapa Agrobiologia",
      description: "Treinamento realizado para colaboradores da Embrapa Agrobiologia",
      fileUrl: embrapa,
      size: "436 KB"
    },
    {
      id: 3,
      title: "Atestado de Capacidade Técnica - Enseada Indústria Naval",
      description: "Treinamento realizado para colaboradores da Enseada Indústria Naval",
      fileUrl: enseada,
      size: "1.19 MB"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Atestados de Capacidade Técnicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Confira alguns de nossos atestados de capacidade que foram emitidos comprovando nossas especialidades técnicas 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-primary mb-1">
                  {certificate.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {certificate.description}
                </p>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  PDF • {certificate.size}
                </span>
              </div>
              
              <div className="flex-shrink-0">
                <a 
                  href={certificate.fileUrl}
                  download
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Baixar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;