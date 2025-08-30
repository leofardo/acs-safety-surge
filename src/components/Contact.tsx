import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender sua empresa com soluções personalizadas 
            em treinamentos industriais e capacitação profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Solicite um Orçamento
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário e entraremos em contato em até 24 horas.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Nome Completo *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Seu nome completo"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Nome da empresa"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      E-mail *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Telefone *
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="(11) 99999-9999"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Descreva suas necessidades de treinamento..."
                    rows={22}
                    className="border-border focus:border-primary"
                  />
                </div>

                <Button className="w-full btn-gradient text-white font-semibold text-lg py-6">
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Telefone</h3>
                    <p className="text-muted-foreground mb-2">(21) 98362-0038</p>
                    <p className="text-muted-foreground mb-2">(21) 98362-0062</p>
                    <p className="text-muted-foreground mb-2">(22) 2330-0366</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Mail className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">E-mail</h3>
                    <p className="text-muted-foreground mb-2">contato@acstreinamentos.com.br</p>
                    <p className="text-muted-foreground">avelino@acstreinamentos.com.br</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Resposta em até 24 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Localização</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-foreground">Rio de Janeiro - RJ</p>
                        <p className="text-muted-foreground text-sm">
                          Escritório Central: Av. Rio Branco nº 31 – 1913 Centro
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">Casemiro de Abreu - RJ</p>
                        <p className="text-muted-foreground text-sm">
                          Rua Açaí, Lt 07- Qd 09 Recanto dos Paratis Barra de São João
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Horário de Funcionamento</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                    <p className="text-sm text-success mt-2">
                      * Treinamentos disponíveis em horários especiais
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;