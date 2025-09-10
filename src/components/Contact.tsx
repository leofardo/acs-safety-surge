import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  
  const [formState, setFormState] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    successMessage: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar mensagens de erro quando usuário começar a digitar
    if (formState.isError) {
      setFormState(prev => ({ ...prev, isError: false, errorMessage: '' }));
    }
  };

  // Validar formulário
  const validateForm = () => {
    const errors = [];
    
    if (!formData.nome.trim()) {
      errors.push('Nome completo é obrigatório');
    }
    
    if (!formData.email.trim()) {
      errors.push('E-mail é obrigatório');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push('E-mail deve ter um formato válido');
    }
    
    if (!formData.telefone.trim()) {
      errors.push('Telefone é obrigatório');
    }
    
    return errors;
  };

  // Submit handler com actions completas
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset estados
    setFormState({
      isLoading: false,
      isSuccess: false,
      isError: false,
      errorMessage: '',
      successMessage: ''
    });

    // Validar formulário
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: validationErrors.join(', '),
        successMessage: ''
      });
      return;
    }

    // Iniciar loading
    setFormState(prev => ({
      ...prev,
      isLoading: true
    }));

    try {
      // Simular delay mínimo para UX (loading visual)
      const delay = new Promise(resolve => setTimeout(resolve, 1000));
      
      // Fazer requisição
      const requestPromise = fetch('https://api.acstreinamentos.com.br/contact_handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Aguardar ambos (delay + requisição)
      const [, response] = await Promise.all([delay, requestPromise]);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        // Sucesso
        setFormState({
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: '',
          successMessage: result.message || 'Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.'
        });
        
        // Limpar formulário após sucesso
        setFormData({
          nome: '',
          empresa: '',
          email: '',
          telefone: '',
          mensagem: ''
        });

        // Auto-hide success message após 5 segundos
        setTimeout(() => {
          setFormState(prev => ({ ...prev, isSuccess: false, successMessage: '' }));
        }, 5000);

      } else {
        throw new Error(result.message || 'Erro desconhecido');
      }

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      
      let errorMessage = 'Erro ao enviar mensagem. ';
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage += 'Verifique sua conexão com a internet ou tente novamente.';
      } else {
        errorMessage += error.message || 'Tente novamente ou entre em contato pelos telefones abaixo.';
      }
      
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: errorMessage,
        successMessage: ''
      });
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      nome: '',
      empresa: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
    setFormState({
      isLoading: false,
      isSuccess: false,
      isError: false,
      errorMessage: '',
      successMessage: ''
    });
  };

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
                Solicite um Orçamento por E-mail
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário e entraremos em contato em até 24 horas.
              </p>
            </CardHeader>
            <CardContent>
              {/* Success Message */}
              {formState.isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3 animate-in slide-in-from-top-2 duration-300">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium text-sm">
                      Sucesso!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      {formState.successMessage}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formState.isError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3 animate-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium text-sm">
                      Erro no envio
                    </p>
                    <p className="text-red-700 text-sm mt-1">
                      {formState.errorMessage}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Nome Completo *
                    </label>
                    <Input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className={`border-border focus:border-primary transition-colors ${
                        formState.isError && !formData.nome ? 'border-red-300 focus:border-red-500' : ''
                      }`}
                      disabled={formState.isLoading}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input 
                      type="text" 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Nome da empresa"
                      className="border-border focus:border-primary transition-colors"
                      disabled={formState.isLoading}
                      autoComplete="organization"
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className={`border-border focus:border-primary transition-colors ${
                        formState.isError && !formData.email ? 'border-red-300 focus:border-red-500' : ''
                      }`}
                      disabled={formState.isLoading}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Telefone *
                    </label>
                    <Input 
                      type="tel" 
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className={`border-border focus:border-primary transition-colors ${
                        formState.isError && !formData.telefone ? 'border-red-300 focus:border-red-500' : ''
                      }`}
                      disabled={formState.isLoading}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva suas necessidades de treinamento..."
                    rows={20}
                    className="border-border focus:border-primary transition-colors resize-none"
                    disabled={formState.isLoading}
                  />
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="submit"
                    className="flex-1 btn-gradient text-white font-semibold text-lg py-6 transition-all duration-300"
                    disabled={formState.isLoading}
                  >
                    {formState.isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar Solicitação
                      </>
                    )}
                  </Button>
                  
                  {(formState.isError || formState.isSuccess) && !formState.isLoading && (
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={resetForm}
                      className="px-6 py-6"
                    >
                      Limpar
                    </Button>
                  )}
                </div>

                {/* Form status indicator */}
                <div className="text-center">
                  {formState.isLoading && (
                    <p className="text-sm text-muted-foreground animate-pulse">
                      Enviando sua solicitação para a ACS Treinamentos...
                    </p>
                  )}
                  {!formState.isLoading && !formState.isSuccess && !formState.isError && (
                    <p className="text-xs text-muted-foreground">
                      * Campos obrigatórios
                    </p>
                  )}
                </div>
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
                    <p className="text-muted-foreground mb-2">
                      <a href="tel:+5521983620038" className="hover:text-primary transition-colors">
                        (21) 98362-0038
                      </a>
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <a href="tel:+5521983620062" className="hover:text-primary transition-colors">
                        (21) 98362-0062
                      </a>
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <a href="tel:+552223300366" className="hover:text-primary transition-colors">
                        (22) 2330-0366
                      </a>
                    </p>
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
                    <p className="text-muted-foreground mb-2">
                      <a href="mailto:contato@acstreinamentos.com.br" className="hover:text-primary transition-colors">
                        contato@acstreinamentos.com.br
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="mailto:avelino@acstreinamentos.com.br" className="hover:text-primary transition-colors">
                        avelino@acstreinamentos.com.br
                      </a>
                    </p>
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