import { useState } from "react";
import { Clock, Shield, CheckCircle, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const [courses, setCourses] = useState([
    // NR 1
    { id: 1, title: "NR 1- Estudo de Perigos e Operacionalidade (HAZOP)", category: "Segurança Industrial", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão como Gerentes, Supervisores, Engenheiros de Processo/Projeto, Técnicos ligados à Qualidade/Meio Ambiente/Segurança, Coordenadores, Analistas da Confiabilidade de Sistemas.", legislation: "Atende a legislação trabalhista" },
    
    // NR 5
    { id: 2, title: "NR 5.3.3 - C.I.P.A.", category: "Segurança Industrial", duration: "20h", mandatory: true, description: "Capacitação em 20 horas de todos empregados que atuarão da Comissão Interna de Prevenção de Acidentes", legislation: "Atende a legislação trabalhista" },
    
    // NR 6
    { id: 3, title: "NR 6 IN-SST-MTB 01 - Proteção Respiratória", category: "EPIs", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão com respiração forçada ou autônoma em ambientes com a presença de aerodispersóides ou gás.", legislation: "Atende a legislação trabalhista" },
    
    // NR 9
    { id: 4, title: "NR 9 (Anexo 2) - Capacitação de Trabalhadores com Exposição Ocupacional ao Benzeno", category: "Químicos", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão manuseando benzeno.", legislation: "Atende a legislação trabalhista" },
    { id: 5, title: "NR 9 e NR 15 - Treinamento de Proteção Respiratória", category: "EPIs", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão utilizando máscaras ou dispositivos de respiração autônoma com ênfase na técnica e higiene desses dispositivos.Requer prática.", legislation: "Atende a legislação trabalhista" },
    
    // NR 10
    { id: 6, title: "NR 10.7.2- Avançado S.E.P.", category: "Eletricidade", duration: "40h", mandatory: true, description: "Capacitação em 40 horas de todos empregados que atuarão com tensões superiores a 1KvA exceto em atividades Offshore", legislation: "Atende a legislação trabalhista" },
    { id: 7, title: "NR 10.7.7 - LokOut & TagOut", category: "Eletricidade", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão com energias perigosas em qualquer seguimento.", legislation: "Atende a legislação trabalhista" },
    { id: 8, title: "NR 10.8.8.2 - Eletricidade Reciclagem", category: "Eletricidade", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuam na indústria em geral que já tenham sido capacitados em eletricidade.", legislation: "Atende a legislação trabalhista" },
    { id: 9, title: "NR 10.8.8.4 - Área Classificada", category: "Eletricidade", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em ambientes onde haja a possibilidade da presença de gás em operação normal ou eventual.", legislation: "Atende a legislação trabalhista" },
    { id: 10, title: "NR 10.8.8 e NR 18.21.1 - Eletricidade Básica", category: "Eletricidade", duration: "40h", mandatory: true, description: "Capacitação em 40 horas de todos empregados que atuarão com eletricidade ou próximo a ela.", legislation: "Atende a legislação trabalhista" },
    
    // NR 12
    { id: 11, title: "NR 12 - Força Motriz Própria Operador de Guindauto", category: "Máquinas", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão com caminhões reboque tipo prancha. Requer prática.", legislation: "Atende a legislação trabalhista" },
    { id: 12, title: "NR 12 - Força Motriz Própria Operador de Munk e Empilhadeiras", category: "Máquinas", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão guindauto Munck ou Empilhadeiras. Requer prática.", legislation: "Atende a legislação trabalhista" },
    { id: 13, title: "NR 12 - Operador de Equip. de Transp. Força Motriz Própria - BobCat e Motosserras", category: "Máquinas", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão operando BobCat ou Motosseras. Requer prática.", legislation: "Atende a legislação trabalhista" },
    { id: 14, title: "Sem NR - Segurança na Ope. Máquinas e Equipamentos- Panificadora", category: "Máquinas", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão em panificadoras. Requer prática.", legislation: "Atende a legislação trabalhista" },
    { id: 15, title: "NR 12.136 - Segurança na Ope. Máquinas e Equipamentos", category: "Máquinas", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão com qualquer máquina ou equipamento eletro, mecânico e pneumático. Requer prática.", legislation: "Atende a legislação trabalhista" },
    { id: 16, title: "NR 12.136 - Manutenção de Máquinas e Equipamentos", category: "Máquinas", duration: "16h", mandatory: true, description: "Capacitação a partir de 16 horas de todos empregados que farão manutenções em qualquer máquina ou equipamento eletro, mecânico e pneumático.", legislation: "Atende a legislação trabalhista" },
    { id: 17, title: "NR 12.147.1 - Capacitação em Operação de Máquinas Injetoras (RECICLAGEM)", category: "Máquinas", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que já foram treinados na operação de máquinas injetoras.", legislation: "Atende a legislação trabalhista" },
    { id: 18, title: "NR 12.147.1 - Capacitação em Operação de Máquinas Injetoras", category: "Máquinas", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão com máquinas injetoras.", legislation: "Atende a legislação trabalhista" },
    { id: 19, title: "NR 12.147.1 - Capacitação em Manutenção e Supervisão de Máquinas Injetoras", category: "Máquinas", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que farão manutenção de máquinas injetoras.", legislation: "Atende a legislação trabalhista" },
    
    // NR 13
    { id: 20, title: "NR 13 - Instalador Gasista (Naval)", category: "Gás", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão administrando a central de distribuição de gás para soldas na contrução naval.", legislation: "Atende a legislação trabalhista" },
    { id: 21, title: "NR 13 - Instalador Gasista Rede Urbana (Construção civil)", category: "Gás", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão instalando e fazendo manutenção em rede subterrânea de distribuição de gás.", legislation: "Atende a legislação trabalhista" },
    { id: 22, title: "NR 13 - Instalador Gasista Predial (Construção civil)", category: "Gás", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão na distribuição e manutenção de redes de gás predial.", legislation: "Atende a legislação trabalhista" },
    { id: 23, title: "NR 13 (anexo I-A) - Treinamento de Segurança na Operação de Caldeira", category: "Caldeiras", duration: "40h", mandatory: true, description: "Capacitação em 40 horas de todos empregados que atuarão operando caldeiras e vasos de pressão.", legislation: "Atende a legislação trabalhista" },
    { id: 24, title: "NR 13 (anexo I-B) - Treinamento de Segurança na Operação Unidade de Processos", category: "Processos", duration: "Variável", mandatory: true, description: "Capacitação de todos empregados que atuarão operando unidade de processos na indústria.", legislation: "Atende a legislação trabalhista" },
    
    // NR 16 e NR 21
    { id: 25, title: "NR 16 e NR 21 (anexo II) - Treinamento para Manuseio de Produtos Perigosos", category: "Produtos Perigosos", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão com envase, armazenagem e transporte de produtos perigosos.", legislation: "Atende a legislação trabalhista" },
    
    // NR 17
    { id: 26, title: "NR 17 (anexo II-6.1) - Trabalho em Teleatendimento telemarketing", category: "Ergonomia", duration: "2h", mandatory: true, description: "Capacitação em 2 horas de todos empregados que atuarão em telemarketing, caixas de supermercados, etc...", legislation: "Atende a legislação trabalhista" },
    
    // NR 18
    { id: 27, title: "NR 18.7.1 - Operador de Serra Circular", category: "Construção Civil", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão operando equipamentos de corte rotativos na industria moveleira e civil.", legislation: "Atende a legislação trabalhista" },
    { id: 28, title: "NR 18.14.2.1 - Operador de Elevador", category: "Construção Civil", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão operando elevadores de carga ou pessoas.", legislation: "Atende a legislação trabalhista" },
    { id: 29, title: "NR 18.15.2.7 - Montador de Andaimes Fixos", category: "Construção Civil", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão na construção civil.", legislation: "Atende a legislação trabalhista" },
    { id: 30, title: "NR 18.22.14 - Montador de Andaimes Suspensos", category: "Construção Civil", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão com andaimes suspensos na construção civil e naval.", legislation: "Atende a legislação trabalhista" },
    { id: 31, title: "NR 18.15.47.4.1.1 - Operador de Plataforma Trabalho Aéreo", category: "Construção Civil", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão com Plataformas de trabalho aéreo nas indústrias naval e construção civil.", legislation: "Atende a legislação trabalhista" },
    { id: 32, title: "NR 18.22.14 - Treinamento de Operador de equipamento de Fixação a Pólvora", category: "Construção Civil", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão na indústria da construção civil.", legislation: "Atende a legislação trabalhista" },
    { id: 33, title: "NR 18 - Capacitação em Sinalização de Obras Viárias", category: "Construção Civil", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão na construção de redes subterrãneas em rodovias e no perímettro urbano", legislation: "Atende a legislação trabalhista" },
    { id: 34, title: "NR 18.26.1 e NR 23.1.1 - Combate a Princípio de Incêndio", category: "Emergência", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em qualquer ambiente com grande fluxo de pessoas ou na indústria em geral.", legislation: "Atende a legislação trabalhista" },
    { id: 35, title: "NR 18.37.5 - Treinamento de Operador de Grua", category: "Construção Civil", duration: "20h", mandatory: true, description: "Capacitação em 20 horas de todos empregados que atuarão Grua nas construções civil e naval.", legislation: "Atende a legislação trabalhista" },
    { id: 36, title: "NR 18.37.5 - Treinamento de Operador de Ponte Rolante", category: "Máquinas", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão na operaçãode ponte rolantes na indústria em geral.", legislation: "Atende a legislação trabalhista" },
    { id: 37, title: "NR 18.37.5 \"a\" e NR 34 - Treinamento para Sinaleiros e Amarrador de Cargas", category: "Naval/Offshore", duration: "20h", mandatory: true, description: "Capacitação em 20 horas de todos empregados que atuarão auxiliando no manuseio de cargas por equipamentos de guindar em portos, aeroportos, construção naval e civil.", legislation: "Atende a legislação trabalhista" },
    
    // NR 20
    { id: 38, title: "NR 20 (anexo II) - INFLAMÁVEIS Curso de Integração", category: "Inflamáveis", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos visitantes de indústria que manuseia ou armazena inflamáveis.", legislation: "Atende a legislação trabalhista" },
    { id: 39, title: "NR 20 (anexo II) - INFLAMÁVEIS Curso Básico", category: "Inflamáveis", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão manuseando pequenas quantidades de combustíveis.", legislation: "Atende a legislação trabalhista" },
    { id: 40, title: "NR 20 (anexo II) - INFLAMÁVEIS Curso Intermediário", category: "Inflamáveis", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão manuseando e armazenando combustíveis e inflamáveis.", legislation: "Atende a legislação trabalhista" },
    { id: 41, title: "NR 20 (anexo II) - INFLAMÁVEIS Curso Avançado I", category: "Inflamáveis", duration: "24h", mandatory: true, description: "Capacitação em 24 horas de todos empregados que atuarão e armazenando médias quantidades de combustíveis e inflamáveis.", legislation: "Atende a legislação trabalhista" },
    { id: 42, title: "NR 20 (anexo II) - INFLAMÁVEIS Curso Avançado II", category: "Inflamáveis", duration: "32h", mandatory: true, description: "Capacitação em 32 horas de todos empregados que atuarão armazenando e manuseando grandes quantidades de combustíveis e inflamáveis.", legislation: "Atende a legislação trabalhista" },
    { id: 43, title: "NR 20 (anexo II) - INFLAMÁVEIS Curso Específico", category: "Inflamáveis", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados Técnicos de Segurança no Trabalho que atuarão orientando trabalhadores que atuam em empresas de líquidos combustíveis e inflamaveis.", legislation: "Atende a legislação trabalhista" },
    
    // NR 22
    { id: 44, title: "NR 22.35.1.2 - Treinamento Admissional para Trabalhos em Minas - Subterrâneo", category: "Mineração", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos empregados que atuarão na adminstração de minas, temporários e visitantes no subterrâneo.", legislation: "Atende a legislação trabalhista" },
    { id: 45, title: "NR 22.35.1.2 - Treinamento Admissional para Trabalhos em Minas - Superfície", category: "Mineração", duration: "24h", mandatory: true, description: "Capacitação em 24 horas de todos empregados que atuarão na adminstração de minas, temporários e visitantes na superfície.", legislation: "Atende a legislação trabalhista" },
    { id: 46, title: "NR 22.35.1.3.1 - Treinamentos Específico para Atividades de Lavra", category: "Mineração", duration: "30h", mandatory: true, description: "Capacitação em 30 horas de todos empregados que atuarão na operação subterrânea de minas.", legislation: "Atende a legislação trabalhista" },
    
    // NR 25
    { id: 47, title: "NR 25.6/PETROBRÁS - Gestão de Resíduos (P.E.A.T.)", category: "Meio Ambiente", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão em qualquer seguimento da indústria que possa causar efeitos nocivos ao meio ambiente.", legislation: "Atende a legislação trabalhista" },
    
    // NR 30
    { id: 48, title: "NR 30 (anexo I) - Sinaleiro", category: "Naval/Offshore", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão na indústria da construção naval e offshore.", legislation: "Atende a legislação trabalhista" },
    { id: 49, title: "NR 30 (anexo I) - Observador de Trabalhos a Quente", category: "Naval/Offshore", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos empregados que atuarão com trabalho a quente na indústria da construção naval e offshore.", legislation: "Atende a legislação trabalhista" },
    { id: 50, title: "NR 30 (anexo I) - Operador de Equipamento de Guindar", category: "Naval/Offshore", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão operando guindastes na indústria da construção naval e offshore.", legislation: "Atende a legislação trabalhista" },
    
    // NR 31
    { id: 51, title: "NR 31.8.7 - Atividades no Trabalho Rural", category: "Rural", duration: "20h", mandatory: true, description: "Capacitação em 20 horas de todos empregados que atuarão no agro negócio.", legislation: "Atende a legislação trabalhista" },
    
    // NR 32
    { id: 52, title: "NR 32.2.4.9 - Capacitação do Trabalhador Exposto a Agentes Biológicos", category: "Saúde", duration: "10h", mandatory: true, description: "Capacitação em 10 horas de todos empregados que atuarão com contaminantes em hospitais, usinas de tratamento de efluentes, etc...", legislation: "Atende a legislação trabalhista" },
    { id: 53, title: "NR 32.3.6.1 - Trabalhador Exposto a Agentes Químicos", category: "Saúde", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão em laboratórios e indústria petroquímica.", legislation: "Atende a legislação trabalhista" },
    { id: 54, title: "NR 32.39.4.9 - Capacitação do Trab. em Procedimentos Op. Acid. Ambientais ou Pessoais", category: "Saúde", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em ambientes médios hospitalres e laboratórios.", legislation: "Atende a legislação trabalhista" },
    { id: 55, title: "NR 32.4.6 e CNEN - Capacitação Básica em Proteção Radiológica", category: "Radiológico", duration: "40h", mandatory: true, description: "Capacitação em 40 horas de todos empregados que atuarão com agentes radiológicos.", legislation: "Atende a legislação trabalhista" },
    { id: 56, title: "NR 32.4.6 e CNEN - Capacitação Avançada em Proteção Radiológica", category: "Radiológico", duration: "40h", mandatory: true, description: "Capacitação 40 horas de todos empregados que atuarão com agentes radiológicos.", legislation: "Atende a legislação trabalhista" },
    { id: 57, title: "NR 32.4.14.2.4 - Capacitação do Trabalhador em Fontes Seladas", category: "Radiológico", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão com fontes radioativas (raio x e correlatos).", legislation: "Atende a legislação trabalhista" },
    { id: 58, title: "NR 32.8 - Capacitação do Trabalhador no manuseio de Agentes de Limpeza", category: "Saúde", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão com asseio na indústria em geral.", legislation: "Atende a legislação trabalhista" },
    { id: 59, title: "NR 32.9.1 - Capacitação em Máqunas e Equipamentos na Área de Saúde", category: "Saúde", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão em ambientes hopitalar.", legislation: "Atende a legislação trabalhista" },
    { id: 60, title: "NR 32.2.4.14 - Capacitação do Trabalhador em Ergonomia na Área de Saúde", category: "Saúde", duration: "9h", mandatory: true, description: "Capacitação em 9 horas de todos empregados que atuarão na área daa saúde com vistas a ergonomia desses trabalhadores.", legislation: "Atende a legislação trabalhista" },
    { id: 61, title: "NR 32.2.4.15 - Trabalhador Exposto a Agentes Biológicos", category: "Saúde", duration: "10h", mandatory: true, description: "Capacitação em 10 horas de todos empregados que atuarão expostos a agentes biológicos ( e infectantes) de toda ordem.", legislation: "Atende a legislação trabalhista" },
    { id: 62, title: "NR 32.10.12 - Cuidadora de Idosos", category: "Saúde", duration: "260h", mandatory: true, description: "Capacitação em 260 horas de todos empregados que atuarão cuidando de idosos e acamados (c/prática).", legislation: "Atende a legislação trabalhista" },
    { id: 63, title: "NR 32.10.12 - Cuidadora de Recém Nascidos Crianças", category: "Saúde", duration: "Variável", mandatory: true, description: "Capacitação de todos empregados que atuarão em creches, berçario se correlatos (c/prática).", legislation: "Atende a legislação trabalhista" },
    
    // NR 33
    { id: 64, title: "NR 33.3.5.4 - Vigia e Trabalhador Espaço Confinado", category: "Espaço Confinado", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em espaços confinados.", legislation: "Atende a legislação trabalhista" },
    { id: 65, title: "NR 33.3.5.6 - Supervisor de entrada Espaço Confinado", category: "Espaço Confinado", duration: "40h", mandatory: true, description: "Capacitação em 40 horas de todos empregados que atuarão fiscalizando e concendo autorizações para trabalhdores atuarem em espaços confinados.", legislation: "Atende a legislação trabalhista" },
    
    // NR 34
    { id: 66, title: "NR 34.3.4.1 - Treinamento Admissional de Estaleiro", category: "Naval/Offshore", duration: "6h", mandatory: true, description: "Capacitação em 6 horas de todos empregados que atuarão em estaleiros, inclusive os temporários e da administração.", legislation: "Atende a legislação trabalhista" },
    { id: 67, title: "NR 34.12.6 - Treinamento para Operação de Equipamento Portátil Rotativo", category: "Naval/Offshore", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão com ferramentas rotativas manuais (furadeiras, lixadeiras, martelo pneumático, etc...)", legislation: "Atende a legislação trabalhista" },
    { id: 68, title: "NR 34 (anexo I) - Movimentação de Cargas Perigosoas", category: "Naval/Offshore", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão transportando ou armazenando cargas perigosas de toda ordem em todos seguimentos da indústria em especial na indústria naval.", legislation: "Atende a legislação trabalhista" },
    { id: 69, title: "NR 34 (anexo I) - Movimentação de Cargas", category: "Naval/Offshore", duration: "20h", mandatory: true, description: "Capacitação em 20 horas de todos empregados que atuarão auxiliando os operadores de equipamentos de guindar na indústria naval.", legislation: "Atende a legislação trabalhista" },
    { id: 70, title: "NR 34 ítem 4.1 (anexo I) - Observador de Trabalhos a Quente módulo Geral", category: "Naval/Offshore", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos empregados que atuarão com chama aberta da construção naval.", legislation: "Atende a legislação trabalhista" },
    { id: 71, title: "NR 34 ítem 4.2 (anexo I) - Observador de Trabalhos a Quente Módulo específico", category: "Naval/Offshore", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos empregados que atuarão com chama aberta da construção naval para atividades específicas.", legislation: "Atende a legislação trabalhista" },
    { id: 72, title: "NR 34 ítem 4.2.1 (anexo I) - Observador de Trabalhos a Quente Atividade com Solda", category: "Naval/Offshore", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos empregados que atuarão com todo tipo de solda na construção naval.", legislation: "Atende a legislação trabalhista" },
    { id: 73, title: "NR 34 ítem 4.2.2 (anexo I) - Observador de Trabalhos a Quente Atividade com Maçarico", category: "Naval/Offshore", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos empregados que atuarão com maçaricos (Oxi-acetilênio) na construção naval.", legislation: "Atende a legislação trabalhista" },
    { id: 74, title: "NR 34 ítem 4.2.3 (anexo I) - Observador de Trabalhos a Quente Atividade com Máquinas Portáteis Rotativas", category: "Naval/Offshore", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos empregados que atuarão com ferramentas que podem gerar chama aberta na construção naval.", legislation: "Atende a legislação trabalhista" },
    { id: 75, title: "NR 34 ítem 4.2.4 (anexo I) - Observador de Trabalhos a Quente Outras atividades a Quente", category: "Naval/Offshore", duration: "4h", mandatory: true, description: "Capacitação em 4 horas de todos empregados que atuarão em quaisquer outras atividades na construção naval que podem gerar chama aberta na construção naval.", legislation: "Atende a legislação trabalhista" },
    { id: 76, title: "NR 34 ítem 5.1 (anexo I) - Observador de Trabalhos a Quente Segurança em Teste de Estanqueidade", category: "Naval/Offshore", duration: "20h", mandatory: true, description: "Capacitação em 20 horas de todos empregados que atuarão executando testde de estanquiedade (teste hidrostático).", legislation: "Atende a legislação trabalhista" },
    { id: 77, title: "NR 34 ítem 5.1 (anexo I) - Gasista Instalador industrial e mantenedor de manifold's", category: "Naval/Offshore", duration: "20h", mandatory: true, description: "Capacitação em 20 horas de todos empregados que atuarão operando manifold's que distribuem gás (oxigênio e acetileno) para atividades na indústria naval.", legislation: "Atende a legislação trabalhista" },
    { id: 78, title: "NR 34 (anexo I) - Operador de equip. de Guindar", category: "Naval/Offshore", duration: "20h", mandatory: true, description: "Capacitação em 20 horas de todos empregados que irão operar equipamentos de guindar na indústria naval.", legislation: "Atende a legislação trabalhista" },
    { id: 79, title: "NR 34.3.4.1 - Admissional em Estaleiro", category: "Naval/Offshore", duration: "6h", mandatory: true, description: "Capacitação em 6 horas de todos empregados que atuarão em estaleiros, inclusive os temporários e da administração.", legislation: "Atende a legislação trabalhista" },
    { id: 80, title: "NR 34.8.1 - Operador de Equipamento de Pintura (Airless)", category: "Naval/Offshore", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão operando equipamento de pintura sob alta pressão (airlass).", legislation: "Atende a legislação trabalhista" },
    { id: 81, title: "NR 34.8.1 - Trabalhador Operador de Jateamento e Hidrojateamento", category: "Naval/Offshore", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão operando equipamento de jato ou hidrojato (requer prática).", legislation: "Atende a legislação trabalhista" },
    { id: 82, title: "NR 34.11.1 - Montador de Andaimes", category: "Naval/Offshore", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão montando ou desmontando andaimes na construção civil ou naval.", legislation: "Atende a legislação trabalhista" },
    
    // NR 35
    { id: 83, title: "NR 35 - Trabalho em Altura", category: "Altura", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão em trabalho acima de 2,00m.", legislation: "Atende a legislação trabalhista" },
    
    // NR 36
    { id: 84, title: "NR 36.6.16.1 - Básico de Segurança no Manuseio de Carnes e Derivados", category: "Alimentício", duration: "4h", mandatory: true, description: "Capacitação genérica em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais inclusive visitantes e temporários.", legislation: "Atende a legislação trabalhista" },
    { id: 85, title: "NR 36.16.1.1 - Avançado de Segurança no Manuseio de Carnes e Derivados", category: "Alimentício", duration: "4h", mandatory: true, description: "Capacitação específica em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais.", legislation: "Atende a legislação trabalhista" },
    { id: 86, title: "NR 36.16.1.2 - Curso Complementar de Segurança no Manuseio de Carnes e Derivados", category: "Alimentício", duration: "4h", mandatory: true, description: "Capacitação específica em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais.", legislation: "Atende a legislação trabalhista" },
    { id: 87, title: "NR 36.16.1.3 - Básico de Segurança em Atividades de Limpeza e Asseio", category: "Alimentício", duration: "4h", mandatory: true, description: "Capacitação específica em 4 horas com ênfase na higiene do ambiente e pessoal em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais.", legislation: "Atende a legislação trabalhista" },
    { id: 88, title: "NR 36.16.3 - Reciclagem de Segurança em Atividades de Manuseio de Carnes e Asseio", category: "Alimentício", duration: "2h", mandatory: true, description: "Capacitação específica em 2 horas com ênfase na higiene do ambiente e pessoal em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais.", legislation: "Atende a legislação trabalhista" },
    
    // DENATRAN e Outros
    { id: 89, title: "DENATRAN - Direção Defensiva", category: "Transporte", duration: "4h", mandatory: false, description: "Capacitação recomendável em 4 horas de todos empregados que atuarão conduzindo veículos auto motores.", legislation: "Atende a legislação trabalhista" },
    { id: 90, title: "Sem NR - Treinamento de Uso de Detector de Gás e Manutenção Curta", category: "Segurança Industrial", duration: "8h", mandatory: false, description: "Capacitação em 8 horas de todos empregados que atuarão utilizando detectores multigases.Recomendável na indústria de distribuição de gas e naval (espaços confinados), com prática. confinados).Requer prática.", legislation: "Atende a legislação trabalhista" },
    
    // NBR e NORMAN
    { id: 91, title: "NBR 14277 - Básico de Combate a Incêndio Industrial (Brigadista)", category: "Emergência", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de pelo menos 10% do efetivo de empregados que atuarão em canteiro de obras ou base industrial, para fazer a prevenção de incêndio e pânico.com prática. Requer prática.", legislation: "Atende a legislação civil (CBMERJ)" },
    { id: 92, title: "NORMAN 24 - Intermediário de Combate a Incêndio Industrial (Brigadista)", category: "Emergência", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de pelo menos 100% do efetivo de empregados que atuarão em unidades offshore ou base industrial, para fazer a prevenção de incêndio e pânico, com prática. Requer prática.", legislation: "Atende a legislação trabalhista" },
    { id: 93, title: "NORMAN 25 - Avançado de Combate a Incêndio Industrial (Brigadista)", category: "Emergência", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de pelo menos 100% do efetivo de empregados que atuarão em unidades offshore ou base industrial, para fazer a prevenção de incêndio e pânico com prática Requer prática.", legislation: "Atende a legislação trabalhista" },
    
    // Primeiros Socorros
    { id: 94, title: "Sem NR - Primeiros Socorros na Escola", category: "Emergência", duration: "8h", mandatory: true, description: "Capacitação em 8 horas de todos empregados que atuarão em escolas e creches abordando RCP e uso do DEA.", legislation: "Atende a legislação trabalhista" },
    { id: 95, title: "Sem NR - Primeiros Socorros", category: "Emergência", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em contato com o público com técnicas de atendimento de vítimas politraumatizadas RCP e DEA, com prática.", legislation: "Atende a legislação trabalhista" },
    
    // PETROBRAS e outros
    { id: 96, title: "Norma PETROBRÁS - Palestra sobre R.A.S.M.A.", category: "Petróleo/Gás", duration: "8h", mandatory: true, description: "Capacitação em até 8 horas de todos empregados que para o sistema PETROBRAS, ênfase em atendimento a legislação trabalhista e ambiental.", legislation: "Atende normas PETROBRAS." },
    { id: 97, title: "Norma CEG/COMGÁS/ABNT - Gasista Instalador Predial", category: "Gás", duration: "40h", mandatory: true, description: "Capacitação em 40 horas de todos empregados que atuarão executando instalação de rede de gás predial.", legislation: "Atende a ABNT" },
    { id: 98, title: "Sem NR - Palestras diversas sobre QSMS", category: "Segurança Industrial", duration: "1h", mandatory: true, description: "Capacitação em 1 hora de todos empregados que atuarão na indústria em geral, abordando temas variados.", legislation: "Atende a legislação trabalhista" },
    
    // Resgate
    { id: 99, title: "Sem NR - Resgatista em Altura", category: "Altura", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão executrando resgate de trabalhadores em atividades em altura. Com prática e compleição física.", legislation: "Atende a legislação trabalhista" },
    { id: 100, title: "Sem NR - Resgatista em Espaço Confinado", category: "Espaço Confinado", duration: "16h", mandatory: true, description: "Capacitação 16 horas de todos empregados que atuarão fazendo resgate em espaços confinados. Requer prática e compleição física.", legislation: "Atende a legislação trabalhista" },
    
    // Outros cursos
    { id: 101, title: "Sem NR - Liderança de alta performance offshore", category: "Liderança", duration: "4h", mandatory: false, description: "Capacitação a partir de 4 horas de todos empregados que atuarão liderando equipes na industria.", legislation: "" },
    { id: 102, title: "Sem NR - Agente de Portaria", category: "Segurança Patrimonial", duration: "16h", mandatory: false, description: "Capacitação recomendável em 16 horas de todos empregados que atuarão em portarias", legislation: "" },
    { id: 103, title: "Sem NR - Eletricista Predial c/ ênfase em NR-10", category: "Eletricidade", duration: "40h", mandatory: false, description: "Capacitação em 40 horas de todos empregados que atuarão instalando rede elétrica predial.", legislation: "Atende a legislação trabalhista" },
    { id: 104, title: "Sem NR - Capacitação em Saúde Offshore", category: "Saúde", duration: "40h", mandatory: false, description: "Capacitação em 40 horas de todos empregados que atuarão com enfermagem ou saúde do trabalhador offshore.", legislation: "Atende a legislação trabalhista" },
    { id: 105, title: "Sem NR - Bombeiro Hidráulico e Encanador", category: "Hidráulica", duration: "32h", mandatory: false, description: "Capacitação em 32 horas de empregados que atuarão executando redes de água potável e pluvial urbana ou residencial", legislation: "Atende a legislação trabalhista" },
    { id: 106, title: "Sem NR - Curso Básico de Segurança ONSHOR CBSO (Onshore Basic Safety Training)", category: "Naval/Offshore", duration: "32h", mandatory: true, description: "Capacitação em 32 horas de todos empregados que atuarão unidades offshore.", legislation: "Atende a legislação da marinha do Brasil" },
    
    // Marinha do Brasil - Operadores Portuários
    { id: 107, title: "Operador de Empilhadeira de Pequeno Porte", category: "Portuário", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    { id: 108, title: "Marinha Brasil - Operador de Empilhadeira de Grande Porte", category: "Portuário", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    { id: 109, title: "Marinha Brasil - Operador de Guindaste Portário Móvel / MHC", category: "Portuário", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    { id: 110, title: "Marinha Brasil - Operador de Guindaste Rodoviário com Lança", category: "Portuário", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    { id: 111, title: "Marinha Brasil - Operador de Transtêiner / RTG", category: "Portuário", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    { id: 112, title: "Marinha Brasil - Operador de Portêiner / PGC / STS", category: "Portuário", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    { id: 113, title: "Marinha Brasil - Operador de Pá Carregadeira", category: "Portuário", duration: "12h", mandatory: true, description: "Capacitação em 12 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    { id: 114, title: "Marinha Brasil - Operador de Guindaste OffShore (Knucle Boom/Pedestal Boom )", category: "Portuário", duration: "40h", mandatory: true, description: "Capacitação em 40 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    { id: 115, title: "Marinha Brasil - Avaliador de Conteiner", category: "Portuário", duration: "16h", mandatory: true, description: "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP", legislation: "Atende a legislação trabalhista" },
    
    // Energia Solar
    { id: 116, title: "Sem NR - Instalador de Sistemas Fotovoltáicos", category: "Energia Solar", duration: "48h", mandatory: false, description: "Capacitação em 48 horas com ênfase em elettricidade básica e Trabalho em altura (NR-10 e 35) de todos empregados que atuarão instalando sistemas fotovoltáicos.Requer prática", legislation: "Atende a legislação trabalhista" },
    { id: 117, title: "Sem NR - Instalador de Aquecedor Solar", category: "Energia Solar", duration: "24h", mandatory: false, description: "Capacitação em 24 horas de todos empregados que atuarão instalando sistemas solar de aquecimento de água, ênfase em NR-35 Ttrabalho em Altura.", legislation: "Atende a legislação trabalhista" }
  ]);

  const categories = ["Todos", "Eletricidade", "Altura", "Espaço Confinado", "Inflamáveis", "Naval/Offshore", "Máquinas", "Emergência", "Construção Civil", "Saúde", "Gás", "Caldeiras", "Processos", "Produtos Perigosos", "Ergonomia", "Químicos", "EPIs", "Segurança Industrial", "Mineração", "Meio Ambiente", "Rural", "Radiológico", "Alimentício", "Transporte", "Petróleo/Gás", "Liderança", "Segurança Patrimonial", "Hidráulica", "Portuário", "Energia Solar"];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Paginação
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Reset para página 1 quando filtros mudarem
  };

  // Reset página quando filtros mudarem
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    setCurrentPage(1);
  };

  return (
    <section id="cursos" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Cursos de Capacitação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de treinamentos especializados conforme as Normas 
            Regulamentadoras e legislação vigente.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12">
          <div className="flex flex-col flex-row gap-6 items-center justify-between">
            {/* Busca */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar curso..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course) => (
          <div 
            key={course.id}
            className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 group flex flex-col"
          >
            {/* Conteúdo que pode crescer */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {course.mandatory ? (
                    <Shield className="h-5 w-5 text-destructive" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  )}
                  <span className={`text-sm font-medium ${
                    course.mandatory ? "text-destructive" : "text-primary"
                  }`}>
                    {course.mandatory ? "Mandatório" : "Opcional"}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{course.duration}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                {course.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {course.description}
              </p>

              {course.legislation && (
                <p className="text-xs text-muted-foreground mb-4 italic">
                  {course.legislation}
                </p>
              )}
            </div>

      {/* Footer que fica sempre no bottom */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
          {course.category}
        </span>
        
        <Button asChild className="text-white hover:text-white/80 text-sm font-medium transition-colors">
          <a 
            href={`https://wa.me/5521983620038?text=Olá, boa tarde! Vim pelo site da ACS Treinamentos e gostaria de saber mais sobre o curso de ${course.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Saiba mais →
          </a>
        </Button>
      </div>
    </div>
  ))}
</div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Nenhum curso encontrado com os filtros selecionados.
            </p>
          </div>
        )}

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2"
            >
              Anterior
            </Button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2"
            >
              Próxima
            </Button>
          </div>
        )}

        {/* Info da paginação */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-6 text-sm text-muted-foreground">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredCourses.length)} de {filteredCourses.length} cursos
          </div>
        )}

        {/* Estatísticas */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">
              {courses.length}+
            </div>
            <div className="text-muted-foreground">Cursos Disponíveis</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">
              {categories.length - 1}
            </div>
            <div className="text-muted-foreground">Categorias</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">
              {courses.filter(c => c.mandatory).length}
            </div>
            <div className="text-muted-foreground">Cursos Mandatórios</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-muted-foreground">Conformidade Legal</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CoursesSection;