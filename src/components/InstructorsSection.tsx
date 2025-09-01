import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Phone } from "lucide-react";
import folderImage from "@/assets/Folder 1 mão na cabeça.jpg";

const InstructorsSection = () => {
  const phoneDisplay = "(21) 98362-0038";
  const phoneDigits = "5521983620038";

  // no topo do arquivo (ou acima do return)
  const phones = [
    { display: "(21) 98362-0038", digits: "5521983620038", primary: true }, // principal (Whats + tel)
    { display: "(21) 98362-0062", digits: "5521983620062" },
    { display: "(22) 2330-0366", digits: "552223300366" },
  ];

  const whatsappMsg =
    "Ol%C3%A1,%20vim%20pelo%20site%20da%20ACS%20Treinamentos%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20cursos%20dispon%C3%ADveis.";


  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Instrutores Altamente Qualificados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa equipe é formada por profissionais experientes que combinam
            conhecimento técnico com vivência prática em campo, garantindo
            treinamentos de excelência e resultados reais para a sua operação.
          </p>
        </div>

        <div className="max-w-8xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-10">
                {/* Folder Image */}
                <div className="lg:col-span-2 relative">
                  <div className="aspect-[3/4] lg:h-full relative overflow-hidden">
                    <img
                      src={folderImage}
                      alt="ACS Treinamentos - Folder institucional"
                      className="w-50 h-50 object-cover"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" /> */}
                  </div>
                </div>

                {/* Team Details */}
                <div className="lg:col-span-3 p-8 md:py-7 md:px-12">
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        Equipe de Instrutores ACS
                      </h3>
                      <Badge variant="secondary" className="text-sm">
                        15+ anos de experiência combinada em operações offshore
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                      Profissionais com vasta experiência em Normas
                      Regulamentadoras e segurança offshore, atuantes nas
                      principais plataformas do Brasil. Especialistas em
                      treinamentos de emergência e evacuação, com metodologia
                      prática e foco em simulações reais para preparar sua
                      equipe com eficiência e segurança.
                    </p>

                    {/* Especialidades (da equipe) */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Especialidades da Equipe
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          "Normas Regulamentadoras (NRs)",
                          "Segurança do Trabalho",
                          "Operações Offshore",
                          "Treinamentos de Emergência & Evacuação",
                          "Programas In Company e turmas abertas"         
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contato destacado */}

                    <div className="mt-auto space-y-4">
                      {/* Principal: grande e com CTAs */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-xl border bg-white/80">
                        <div className="flex items-center gap-3">
                          <Phone className="h-6  w-6 text-primary" />
                          <a
                            href={`tel:${phones[0].digits}`}
                            className="font-extrabold tracking-tight text-primary text-2xl"
                            aria-label={`Ligar para ${phones[0].display}`}
                          >
                            {phones[0].display}
                          </a>
                        </div>

                        <div className="flex gap-3">
                          <Button asChild size="lg" className="w-full sm:w-auto">
                            <a
                              href={`https://api.whatsapp.com/send/?phone=${phones[0].digits}&text=${whatsappMsg}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Falar no WhatsApp
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                            <a href={`tel:${phones[0].digits}`}>Ligar agora</a>
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-xl border bg-white/80">
                        <div className="flex items-center gap-3">
                          <Phone className="h-6  w-6 text-primary" />
                          <a
                            href={`tel:${phones[1].digits}`}
                            className="font-extrabold tracking-tight text-primary text-2xl"
                            aria-label={`Ligar para ${phones[1].display}`}
                          >
                            {phones[1].display}
                          </a>
                        </div>

                        <div className="flex gap-3">
                          <Button asChild size="lg" className="w-full sm:w-auto">
                            <a
                              href={`https://api.whatsapp.com/send/?phone=${phones[1].digits}&text=${whatsappMsg}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Falar no WhatsApp
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                            <a href={`tel:${phones[1].digits}`}>Ligar agora</a>
                          </Button>
                        </div>
                      </div>

                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-xl border bg-white/80">
                        <div className="flex items-center gap-3">
                          <Phone className="h-6  w-6 text-primary" />
                          <a
                            href={`tel:${phones[2].digits}`}
                            className="font-extrabold tracking-tight text-primary text-2xl"
                            aria-label={`Ligar para ${phones[2].display}`}
                          >
                            {phones[2].display}
                          </a>
                        </div>

                        <div className="flex gap-3">
                          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                            <a href={`tel:${phones[1].digits}`}>Ligar agora</a>
                          </Button>
                        </div>
                      </div>

                      {/* Outros números: lista clicável
                      <div className="p-4 rounded-xl border bg-white/70">
                        <p className="text-sm font-semibold text-primary mb-3">Outros contatos</p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {phones.slice(1).map((p) => (
                            <li key={p.digits}>
                              <a
                                href={`tel:${p.digits}`}
                                className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2 hover:bg-muted transition"
                                aria-label={`Ligar para ${p.display}`}
                              >
                                <span className="font-medium text-foreground">{p.display}</span>
                                <span className="text-xs text-muted-foreground">Ligar</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div> */}
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
