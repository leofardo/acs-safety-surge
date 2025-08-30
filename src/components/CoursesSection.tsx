import { useState, useMemo } from "react";
import { Clock, Shield, CheckCircle, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoursesSection = () => {
  const [selectedcategoria, setSelectedcategoria] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const [courses, setCourses] = useState(

  [
    {
      "id": "1",
      "nome_curso": "NR 1- Estudo de Perigos",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão como Gerentes, Supervisores, Engenheiros de Processo/Projeto, Técnicos ligados à Qualidade/Meio Ambiente/Segurança, Coordenadores, Analistas da Confiabilidade de Sistemas. Gerentes de RH, Gestão de Pessoas e Jurídico.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "2",
      "nome_curso": "NR 5.3.3 - C.I.P.A.A.A",
      "descricao": "Capacitação a partir de 16 horas para todos empregados que atuarão da Comissão Interna de Prevenção de Acidentes e de 6h para todos empregados ressaltando as questões de prevenção aos Abusos e Assédios no ambiente de trabalho.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "3",
      "nome_curso": "NR 6 – Instrução sobre o uso adequado dos E.P.I’s.",
      "descricao": "Capacitação em 8 horas de todos empregados quanto ao emprego dos EPI’s e o não uso de equipamentos pessoais.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "4",
      "nome_curso": "NR 33 - Treinamento de Proteção Respiratória",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão utilizando máscaras ou dispositivos de respiração autônoma com ênfase na técnica e higiene desses dispositivos. E equipamento de “ar mandado”. Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Espaço Confinado"
    },
    {
      "id": "5",
      "nome_curso": "NR 10 – Eletricidade básica.",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão com (tensões superiores a 1KvA exceto em atividades Offshore) ou próximo de eletricidade.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Eletricidade"
    },
    {
      "id": "6",
      "nome_curso": "NR 12 – Máquinas e Equipamentos.",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com máquinas e equipamentos diversos em todos seguimentos da indústria. Munk, Empilhadeira, Transpaleteiras (elétricas e manuais) Plataformas Elevadas (todas), Caminhão VacWall (suga dejetos), Prancha Reboque, Silo Cimenteiro), “Bob Cat”, Motoserra e outros estão contidos nessa NR",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Máquinas"
    },
    {
      "id": "7",
      "nome_curso": "NR 25.6/Inclusive PETROBRÁS - Gestão de Resíduos (P.E.A.T.)",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão em qualquer seguimento da indústria que possa causar efeitos nocivos ao meio ambiente.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Meio Ambiente"
    },
    {
      "id": "8",
      "nome_curso": "NR 6 IN-SST-MTB 01 - Proteção Respiratória",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com respiração forçada ou autônoma em ambientes com a presença de aerodispersóides ou gás.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "EPIs"
    },
    {
      "id": "9",
      "nome_curso": "NR 9 (Anexo 2) - Capacitação de Trabalhadores com Exposição Ocupacional ao Benzeno",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão manuseando benzeno.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Químicos"
    },
    {
      "id": "10",
      "nome_curso": "NR 10.7.2-  Avançado S.E.P.",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão com tensões superiores a 1KvA exceto em atividades Offshore",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Eletricidade"
    },
    {
      "id": "11",
      "nome_curso": "NR 10.7.7 -  LokOut & TagOut",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão com energias perigosas em qualquer seguimento.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Eletricidade"
    },
    {
      "id": "12",
      "nome_curso": "NR 10.8.8.2 - Eletricidade Reciclagem",
      "descricao": "Capacitação em 8 horas de todos empregados que atuam na indústria em geral que já tenham sido capacitados em eletricidade.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Eletricidade"
    },
    {
      "id": "13",
      "nome_curso": "NR 10.8.8.4 - Área Classificada",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em ambientes onde haja a possibilidade da presença de gás em operação normal ou eventual.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Eletricidade"
    },
    {
      "id": "14",
      "nome_curso": "NR 10.8.8 e NR 18.21.1 - Eletricidade Básica",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão com eletricidade ou próximo a ela.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Eletricidade"
    },
    {
      "id": "15",
      "nome_curso": "NR-11",
      "descricao": "",
      "obrigatoriedade": "",
      "objetivo": "",
      "carga": "",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "16",
      "nome_curso": "NR 12 - Força Motriz Própria Operador de Guindauto",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com caminhões reboque tipo prancha. Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Máquinas"
    },
    {
      "id": "17",
      "nome_curso": "NR 12 - Operador de Equip. de Transp. Força Motriz Própria - BobCat e Motosserras",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão operando BobCat ou Motosseras. Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Máquinas"
    },
    {
      "id": "18",
      "nome_curso": "Sem NR - Segurança na Ope. Máquinas e Equipamentos- Panificadora",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão em panificadoras. Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Máquinas"
    },
    {
      "id": "19",
      "nome_curso": "NR 12.136 - Segurança na Ope. Máquinas e Equipamentos",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com qualquer máquina ou equipamento eletro, mecânico e pneumático. Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Máquinas"
    },
    {
      "id": "20",
      "nome_curso": "NR 12.136 - Manutenção de Máquinas e Equipamentos",
      "descricao": "Capacitação a partir de 16 horas de todos empregados que farão manutenções em qualquer máquina ou equipamento eletro, mecânico e pneumático.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Máquinas"
    },
    {
      "id": "21",
      "nome_curso": "NR 12.147.1 - Capacitação em Operação de Máquinas Injetoras (RECICLAGEM)",
      "descricao": "Capacitação em 8 horas de todos empregados que já foram treinados na operação de máquinas injetoras.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Máquinas"
    },
    {
      "id": "22",
      "nome_curso": "NR 12.147.1 - Capacitação em Operação de Máquinas Injetoras",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão com máquinas injetoras.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Máquinas"
    },
    {
      "id": "23",
      "nome_curso": "NR 12.147.1 - Capacitação em Manutenção e Supervisão de Máquinas Injetoras",
      "descricao": "Capacitação em 16 horas de todos empregados que farão manutenção de máquinas injetoras.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Máquinas"
    },
    {
      "id": "24",
      "nome_curso": "NR 13 - Instalador Gasista (Naval)",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão administrando a central de distribuição de gás para soldas na contrução naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "25",
      "nome_curso": "NR 13 - Instalador Gasista Rede Urbana (Constução civil)",
      "descricao": "Capacitação em 16 horas  de todos empregados que atuarão instalando e fazendo manutenção em rede subterrânea de distribuição de gás.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Gás"
    },
    {
      "id": "26",
      "nome_curso": "NR 13 - Instalador Gasista Predial (Constução civil)",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão na distribuição e manutenção de redes de gás predial.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Gás"
    },
    {
      "id": "27",
      "nome_curso": "NR 13 (anexo I-A) - Treinamento de Segurança na Operação de Caldeira",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão operando caldeiras e vasos de pressão.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "28",
      "nome_curso": "NR 15 - Treinamento de Segurança em Operações Insalubres",
      "descricao": "",
      "obrigatoriedade": "",
      "objetivo": "",
      "carga": "",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "29",
      "nome_curso": "NR 13 (anexo I-B) - Treinamento de Segurança na Operação Unidade de Processos",
      "descricao": "Capacitação de todos empregados que atuarão operando unidade de processos na indústria.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "",
      "categoria": "Processos"
    },
    {
      "id": "30",
      "nome_curso": "NR 16 e NR 21 (anexo II) - Treinamento para Manuseio de Produtos Perigosos",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão com envase, armazenagem e transporte de produtos perigosos.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Produtos Perigosos"
    },
    {
      "id": "31",
      "nome_curso": "NR 17 (anexo II-6.1) - Trabalho em Teleatendimento telemarketing",
      "descricao": "Capacitação em 2 horas de todos empregados que atuarão em telemarketing, caixas de supermercados, etc...",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "2",
      "categoria": "Ergonomia"
    },
    {
      "id": "32",
      "nome_curso": "NR 18.7.1 - Operador de Serra Circular",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão operando equipamentos de corte rotativos na industria moveleira e civil.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Construção Civil"
    },
    {
      "id": "33",
      "nome_curso": "NR 18.14.2.1 - Operador de Elevador",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão operando elevadores de carga ou pessoas.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Construção Civil"
    },
    {
      "id": "34",
      "nome_curso": "NR 18.15.2.7 - Montador de Andaimes Fixos",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão na construção civil.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Construção Civil"
    },
    {
      "id": "35",
      "nome_curso": "NR 18.22.14 - Montador de Andaimes Suspensos",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com andaimes suspensos na construção civil e naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Construção Civil"
    },
    {
      "id": "36",
      "nome_curso": "NR 18.15.47.4.1.1 - Operador de Plataforma Trabalho Aéreo",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com Plataformas de trabalho aéreo nas indústrias naval e construção civil.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Construção Civil"
    },
    {
      "id": "37",
      "nome_curso": "NR 18.22.14 - Treinamento  de Operador de equipamento de Fixação a Pólvora",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão na indústria da construção civil.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Construção Civil"
    },
    {
      "id": "38",
      "nome_curso": "NR 18 - Capacitação em Sinalização de Obras Viárias",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão na construção de redes subterrãneas em rodovias e no perímettro urbano",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Construção Civil"
    },
    {
      "id": "39",
      "nome_curso": "NR 18.26.1 e NR 23.1.1 - Combate a Princípio de Incêndio",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em qualquer ambiente com grande fluxo de pessoas ou na indústria em geral.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Construção Civil"
    },
    {
      "id": "40",
      "nome_curso": "NR 18.37.5 - Treinamento de Operador de Grua",
      "descricao": "Capacitação em 20 horas de todos empregados que atuarão Grua nas construções civil e naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "20",
      "categoria": "Construção Civil"
    },
    {
      "id": "41",
      "nome_curso": "NR 18.37.5 - Treinamento de Operador de Ponte Rolante",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão na operaçãode ponte rolantes na indústria em geral.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Máquinas"
    },
    {
      "id": "42",
      "nome_curso": "NR 18.37.5 \"\"a\"\" e NR 34 - Treinamento para Sinaleiros e Amarrador de Cargas",
      "descricao": "Capacitação em 20 horas de todos empregados que atuarão auxiliando no manuseio de cargas por equipamentos de guindar em portos, aeroportos, construção naval e civil.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "20",
      "categoria": "Construção Civil"
    },
    {
      "id": "43",
      "nome_curso": "NR 20 (anexo II) - INFLAMÁVEIS Curso de Integração",
      "descricao": "Capacitação em 4 horas de todos visitantes de indústria que manuseia ou armazena inflamáveis.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Inflamáveis"
    },
    {
      "id": "44",
      "nome_curso": "NR 20 (anexo II) - INFLAMÁVEIS Curso Básico",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão manuseando pequenas quantidades de combustíveis.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Inflamáveis"
    },
    {
      "id": "45",
      "nome_curso": "NR 20 (anexo II) - INFLAMÁVEIS Curso Intermediário",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão manuseando e armazenando combustíveis e inflamáveis.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Inflamáveis"
    },
    {
      "id": "46",
      "nome_curso": "NR 20 (anexo II) - INFLAMÁVEIS Curso Avançado I",
      "descricao": "Capacitação em 24 horas de todos empregados que atuarão  e armazenando médias quantidades de combustíveis e inflamáveis.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "24",
      "categoria": "Inflamáveis"
    },
    {
      "id": "47",
      "nome_curso": "NR 20 (anexo II) - INFLAMÁVEIS Curso Avançado II",
      "descricao": "Capacitação em 32 horas de todos empregados que atuarão  armazenando e manuseando grandes quantidades de combustíveis e inflamáveis.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "32",
      "categoria": "Inflamáveis"
    },
    {
      "id": "48",
      "nome_curso": "NR 20 (anexo II) - INFLAMÁVEIS Curso Específico",
      "descricao": "Capacitação em 16 horas de todos empregados Técnicos de Segurança no Trabalho que atuarão orientando trabalhadores que atuam em empresas de líquidos combustíveis e inflamaveis.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Inflamáveis"
    },
    {
      "id": "49",
      "nome_curso": "NR 22.35.1.2 - Treinamento Admissional para Trabalhos em Minas - Subterrãneio",
      "descricao": "Capacitação em 4 horas de todos empregados que atuarão na adminstração de minas, temporários e visitantes no subterrâneo.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "50",
      "nome_curso": "NR 22.35.1.2 - Treinamento Admissional para Trabalhos em Minas - Superfície",
      "descricao": "Capacitação em 24 horas de todos empregados que atuarão na adminstração de minas, temporários e visitantes na superfície.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "24",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "51",
      "nome_curso": "NR 22.35.1.3.1 - Treinamentos Específico para Atividades de Lavra",
      "descricao": "Capacitação em 30 horas de todos empregados que atuarão na operação subterrânea de minas.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "30",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "52",
      "nome_curso": "NR 30 (anexo I) - Sinaleiro",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão na indústria da construção naval e offshore.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "53",
      "nome_curso": "NR 30 (anexo I) - Observador de Trabalhos a Quente",
      "descricao": "Capacitação em 4 horas de todos empregados que atuarão com trabalho a quente na indústria da construção naval e offshore.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "54",
      "nome_curso": "NR 30 (anexo I) - Operador de Equipamento de Guindar",
      "descricao": "Capacitação em 16 horas de  todos empregados que atuarão operando guindastes na indústria da construção naval e offshore.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "55",
      "nome_curso": "NR 31.8.7 - Atividades no Trabalho Rural",
      "descricao": "Capacitação em 20 horas de todos empregados que atuarão no agro negócio.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "20",
      "categoria": "Rural"
    },
    {
      "id": "56",
      "nome_curso": "NR 32.2.4.9 - Capacitação do Trabalhador Exposto a Agentes Biológicos ",
      "descricao": "Capacitação em 10 horas de todos empregados que atuarão com contaminantes em hospitais, usinas de tratamento de efluentes, etc...",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "10",
      "categoria": "Saúde"
    },
    {
      "id": "57",
      "nome_curso": "NR 32.3.6.1 - Trabalhador Exposto a Agentes Químicos",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão em laboratórios e indústria petroquímica.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Saúde"
    },
    {
      "id": "58",
      "nome_curso": "NR 32.39.4.9 - Capacitação do Trab. em Procedimentos Op. Acid. Ambientais ou Pessoais",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em ambientes médios hospitalres e laboratórios.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Saúde"
    },
    {
      "id": "59",
      "nome_curso": "NR 32.4.6 e CNEN - Capacitação Básica em Proteção Radiológica",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão com agentes radiológicos.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Radiológico"
    },
    {
      "id": "60",
      "nome_curso": "NR 32.4.6 e CNEN - Capacitação Avançada em Proteção Radiológica",
      "descricao": "Capacitação 40 horas de todos empregados que atuarão com agentes radiológicos.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Radiológico"
    },
    {
      "id": "61",
      "nome_curso": "NR 32.4.14.2.4 - Capacitação do Trabalhador em Fontes Seladas",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com fontes radioativas (raio x e correlatos).",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Radiológico"
    },
    {
      "id": "62",
      "nome_curso": "NR 32.8 - Capacitação do Trabalhador no manuseio de Agentes de Limpeza",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com asseio na indústria em geral.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Saúde"
    },
    {
      "id": "63",
      "nome_curso": "NR 32.9.1 - Capacitação em Máqunas e Equipamentos na Área de Saúde",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão em ambientes hopitalar.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Saúde"
    },
    {
      "id": "64",
      "nome_curso": "NR 32.2.4.14 - Capacitação do Trabalhador em Ergonomia na Área de Saúde ",
      "descricao": "Capacitação em 9 horas de todos empregados que atuarão na área daa saúde com vistas a ergonomia desses trabalhadores.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "9",
      "categoria": "Saúde"
    },
    {
      "id": "65",
      "nome_curso": "NR 32.2.4.15 - Trabalhador Exposto a Agentes Biológicos ",
      "descricao": "Capacitação em 10 horas de todos empregados que atuarão expostos a agentes biológicos ( e infectantes) de toda ordem.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "10",
      "categoria": "Saúde"
    },
    {
      "id": "66",
      "nome_curso": "NR 32.10.12 - Cuidadora de Idosos",
      "descricao": "Capacitação em 260 horas de todos empregados que atuarão cuidando de idosos e acamados (c/prática).",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "60",
      "categoria": "Saúde"
    },
    {
      "id": "67",
      "nome_curso": "NR 32.10.12 - Cuidadora de Recém Nascidos Crianças",
      "descricao": "Capacitação de todos empregados que atuarão em creches, berçario se correlatos (c/prática).",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "",
      "categoria": "Saúde"
    },
    {
      "id": "68",
      "nome_curso": "NR 33.3.5.4 - Vigia e Trabalhador Espaço Confinado",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em espaços confinados.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Espaço Confinado"
    },
    {
      "id": "69",
      "nome_curso": "NR 33.3.5.6 - Supervisor de entrada Espaço Confinado",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão fiscalizando e concendo autorizações para trabalhdores atuarem em espaços confinados.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Espaço Confinado"
    },
    {
      "id": "70",
      "nome_curso": "NR 34.3.4.1 - Treinamento Admissional de Estaleiro",
      "descricao": "Capacitação em 6 horas de todos empregados que atuarão em estaleiros, inclusive os temporários e da administração.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "6",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "71",
      "nome_curso": "NR 34.12.6 - Treinamento para Operação de Equipamento Portátil Rotativo",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão com ferramentas rotativas manuais (furadeiras, lixadeiras, martelo pneumático, etc...)",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "72",
      "nome_curso": "NR 34 (anexo I) - Movimentação de Cargas Perigosoas",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão transportando ou armazenando cargas perigosas de toda ordem em todos seguimentos da indústria em especial na indústria naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "73",
      "nome_curso": "NR 34 (anexo I) - Movimentação de Cargas",
      "descricao": "Capacitação em 20 horas de todos empregados que atuarão auxiliando os operadores de equipamentos de guindar na indústria naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "20",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "74",
      "nome_curso": "NR 34 ítem 4.1 (anexo I) -  Observador de Trabalhos a Quente módulo Geral",
      "descricao": "Capacitação em 4 horas de todos empregados que atuarão com chama aberta da construção naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "75",
      "nome_curso": "NR 34 ítem 4.2 (anexo I) -  Observador de Trabalhos a Quente Módulo específico",
      "descricao": "Capacitação em 4 horas de todos empregados que atuarão com chama aberta da construção naval para atividades específicas.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "76",
      "nome_curso": "NR 34 ítem 4.2.1 (anexo I) -  Observador de Trabalhos a Quente Atividade com Solda",
      "descricao": "Capacitação em 4 horas de todos empregados que atuarão com todo tipo de solda na construção naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "77",
      "nome_curso": "NR 34 ítem 4.2.2 (anexo I) -  Observador de Trabalhos a Quente Atividade com Maçarico",
      "descricao": "Capacitação em 4 horas de todos empregados que atuarão com maçaricos (Oxi-acetilênio) na construção naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "78",
      "nome_curso": "NR 34 ítem 4.2.3 (anexo I) -  Observador de Trabalhos a Quente Atividade com Máquinas Portáteis Rotativas ",
      "descricao": "Capacitação em 4 horas de todos empregados que atuarão com ferramentas que podem gerar chama aberta na construção naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Máquinas"
    },
    {
      "id": "79",
      "nome_curso": "NR 34 ítem 4.2.4 (anexo I) -  Observador de Trabalhos a Quente Outras atividades a Quente",
      "descricao": "Capacitação em 4 horas de todos empregados que atuarão em quaisquer outras atividades na construção naval que podem gerar chama aberta na construção naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "80",
      "nome_curso": "NR 34 ítem 5.1 (anexo I) -  Observador de Trabalhos a Quente Segurança em Teste de Estanqueidade ",
      "descricao": "Capacitação em 20 horas de todos empregados que atuarão executando testde de estanquiedade (teste hidrostático).",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "20",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "81",
      "nome_curso": "NR 34 ítem 5.1 (anexo I) -  Gasista Instalador industrial e mantenedor de manifold's",
      "descricao": "Capacitação em 20 horas de todos empregados que atuarão operando manifold's que distribuem gás (oxigênio e acetileno) para atividades na indústria naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "20",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "82",
      "nome_curso": "NR 34 (anexo I) -  Operador de equip. de Guindar",
      "descricao": "Capacitação em 20 horas de todos empregados que irão operar equipamentos de guindar na indústria naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "20",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "83",
      "nome_curso": "NR 34.3.4.1 - Admissional em Estaleiro",
      "descricao": "Capacitação em 6 horas de todos empregados que atuarão em estaleiros, inclusive os temporários e da administração.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "6",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "84",
      "nome_curso": "NR 34.8.1 - Operador de Equipamento de Pintura (Airless)",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão operando equipamento de pintura sob alta pressão (airlass).",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "85",
      "nome_curso": "NR 34.8.1 - Trabalhador Operador de Jateamento e Hidrojateamento",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão operando equipamento de jato ou hidrojato (requer prática).",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "86",
      "nome_curso": "NR 34.11.1 - Montador de Andaimes",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão montando ou desmontando andaimes na construção civil ou naval.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Construção Civil"
    },
    {
      "id": "87",
      "nome_curso": "NR 35 - Trabalho em Altura",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão em trabalho acima de 2,00m.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Altura"
    },
    {
      "id": "88",
      "nome_curso": "NR 36.6.16.1 - Básico de Segurança no Manuseio de Carnes e Derivados ",
      "descricao": "Capacitação genérica em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais inclusive visitantes e temporários.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "89",
      "nome_curso": "NR 36.16.1.1 - Avançado de Segurança no Manuseio de Carnes e Derivados ",
      "descricao": "Capacitação específica em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "90",
      "nome_curso": "NR 36.16.1.2 - Curso Complementar de Segurança no Manuseio  de Carnes e Derivados ",
      "descricao": "Capacitação específica em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "91",
      "nome_curso": "NR 36.16.1.3 - Básico de Segurança em Atividades de Limpeza e Asseio",
      "descricao": "Capacitação específica em 4 horas com ênfase na higiene do ambiente e pessoal em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "92",
      "nome_curso": "NR 36.16.3 - Reciclagem de Segurança em Atividades de Manuseio de Carnes e Asseio",
      "descricao": "Capacitação específica em 2 horas com ênfase na higiene do ambiente e pessoal em 4 horas de todos empregados que atuarão em ambientes que manuseiam derivados animais.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "2",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "93",
      "nome_curso": "DENATRAN - Direção Defensiva",
      "descricao": "Capacitação recomendável em 4 horas de todos empregados que atuarão conduzindo veículos auto motores.",
      "obrigatoriedade": "Não mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "4",
      "categoria": "Transporte"
    },
    {
      "id": "94",
      "nome_curso": "NR 9 e NR 15 - Treinamento de Proteção Respeiratória",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão utilizando máscaras ou dispositivos de respiração autônoma com ênfase na técnica e higiene desses dispositivos.Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Químicos"
    },
    {
      "id": "95",
      "nome_curso": "Sem NR - Treinamento de Uso de Detector de Gás e Manutenção Curta",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão utilizando detectores multigases.Recomendável na indústria de distribuição de gas e naval (espaços confinados), com prática. confinados).Requer prática.",
      "obrigatoriedade": "Recomendável",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Gás"
    },
    {
      "id": "96",
      "nome_curso": "NBR 14277 - Básico de Combate a Incêndio Industrial (Brigadista)",
      "descricao": "Capacitação em 16 horas de pelo menos 10% do efetivo de empregados que atuarão em canteiro de obras ou base industrial, para fazer a prevenção de incêndio e pânico.com prática. Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação civil (CBMERJ)",
      "carga": "16",
      "categoria": "Emergência"
    },
    {
      "id": "97",
      "nome_curso": "NORMAN 24 - Intermediário de  Combate a Incêndio Industrial (Brigadista)",
      "descricao": "Capacitação em 16 horas de pelo menos 100% do efetivo de empregados que atuarão em unidades offshore ou base industrial, para fazer a prevenção de incêndio e pânico, com prática. Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Emergência"
    },
    {
      "id": "98",
      "nome_curso": "NORMAN 25 - Avançado de Combate a Incêndio Industrial (Brigadista)",
      "descricao": "Capacitação em 16 horas de pelo menos 100% do efetivo de empregados que atuarão em unidades offshore ou base industrial, para fazer a prevenção de incêndio e pânico com prática Requer prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Emergência"
    },
    {
      "id": "99",
      "nome_curso": "Sem NR - Primeiros Socorros na Escola",
      "descricao": "Capacitação em 8 horas de todos empregados que atuarão em escolas e creches abordando RCP e uso do DEA.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "8",
      "categoria": "Emergência"
    },
    {
      "id": "100",
      "nome_curso": "Sem NR - Primeiros Socorros",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em contato com o público com técnicas de atendimento de vítimas politraumatizadas RCP e DEA, com prática.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Emergência"
    },
    {
      "id": "101",
      "nome_curso": "Norma PETROBRÁS - Palestra sobre R.A.S.M.A.",
      "descricao": "Capacitação em até 8 horas de todos empregados que para o sistema PETROBRAS, ênfase em atendimento a legislação trabalhista e ambiental. ",
      "obrigatoriedade": "Mandatório no sistema BR apenas offshore.",
      "objetivo": "Atender normas PETROBRAS.",
      "carga": "8",
      "categoria": "Petróleo/Gás"
    },
    {
      "id": "102",
      "nome_curso": "Norma CEG/COMGÁS/ABNT - Gasista Instalador Predial",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão executando instalação de rede de gás predial.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a ABNT",
      "carga": "40",
      "categoria": "Gás"
    },
    {
      "id": "103",
      "nome_curso": "Sem NR - Palestras diversas sobre QSMS",
      "descricao": "Capacitação em 1 hora de todos empregados que atuarão na indústria em geral, abordando temas variados.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "1",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "104",
      "nome_curso": "Sem NR - Resgatista em Altura",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão executrando resgate de trabalhadores em atividades em altura. Com prática e compleição física.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Altura"
    },
    {
      "id": "105",
      "nome_curso": "Sem NR - Resgatista em Espaço Confinado",
      "descricao": "Capacitação 16 horas de todos empregados que atuarão fazendo resgate em espaços confinados. Requer prática e compleição física.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Espaço Confinado"
    },
    {
      "id": "106",
      "nome_curso": "Sem NR - Liderança de alta performance  offshore",
      "descricao": "Capacitação a partir de 4 horas de todos empregados que atuarão liderando equipes na industria.",
      "obrigatoriedade": "Não mandatório",
      "objetivo": "",
      "carga": "4",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "107",
      "nome_curso": "Sem NR - Agente de Portaria",
      "descricao": "Capacitação recomendável em 16 horas de todos empregados que atuarão em portarias ",
      "obrigatoriedade": "Não mandatório",
      "objetivo": "",
      "carga": "16",
      "categoria": "Segurança Patrimonial"
    },
    {
      "id": "108",
      "nome_curso": "Sem NR - Eletricista Predial c/ ênfase em NR-10",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão instalando rede elétrica predial.",
      "obrigatoriedade": "Não mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Eletricidade"
    },
    {
      "id": "109",
      "nome_curso": "Sem NR - Capacitação em Saúde Offshore",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão com enfermagem ou saúde do trabalhador offshore.",
      "obrigatoriedade": "Não mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "110",
      "nome_curso": "Sem NR - Bombeiro Hidráulico e Encanador",
      "descricao": "Capacitação em 32 horas de empregados que atuarão executando redes de água potável e pluvial urbana ou residencial",
      "obrigatoriedade": "Não mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "32",
      "categoria": "Hidráulica"
    },
    {
      "id": "111",
      "nome_curso": "Sem NR - Curso Básico de Segurança ONSHOR CBSO (Onshore Basic Safety Training)",
      "descricao": "Capacitação em 32 horas de todos empregados que atuarão unidades offshore.",
      "obrigatoriedade": "Mandatório",
      "objetivo": "Atender a legislação da marinha do Brasil",
      "carga": "32",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "112",
      "nome_curso": "Operador de Empilhadeira de Pequeno Porte *",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Máquinas"
    },
    {
      "id": "113",
      "nome_curso": "Marinha Brasil - Operador de Empilhadeira de Grande Porte **",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Máquinas"
    },
    {
      "id": "114",
      "nome_curso": "Marinha Brasil - Operador de Guindaste Portário Móvel / MHC",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Portuário"
    },
    {
      "id": "115",
      "nome_curso": "Marinha Brasil - Operador de Guindaste Rodoviário com Lança",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "116",
      "nome_curso": "Marinha Brasil - Operador de Transtêiner / RTG",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Portuário"
    },
    {
      "id": "117",
      "nome_curso": "Marinha Brasil - Operador de Portêiner / PGC / STS",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Portuário"
    },
    {
      "id": "118",
      "nome_curso": "Marinha Brasil - Operador de Pá Carregadeira",
      "descricao": "Capacitação em 12 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "12",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "119",
      "nome_curso": "Marinha Brasil - Operador de Guindaste OffShore (Knucle Boom/Pedestal Boom )",
      "descricao": "Capacitação em 40 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "40",
      "categoria": "Naval/Offshore"
    },
    {
      "id": "120",
      "nome_curso": "Marinha Brasil - Avaliador de Conteiner ",
      "descricao": "Capacitação em 16 horas de todos empregados que atuarão em atividades em portos. INCATEP",
      "obrigatoriedade": "Mandatório Marinha do Brasil",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "16",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "121",
      "nome_curso": "Sem NR - Instalador de Sistemas Fotovoltáicos",
      "descricao": "Capacitação em 48 horas com ênfase em elettricidade básica e Trabalho em altura (NR-10 e 35) de todos empregados que atuarão instalando sistemas fotovoltáicos.Requer prática",
      "obrigatoriedade": "Não mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "48",
      "categoria": "Segurança Industrial"
    },
    {
      "id": "122",
      "nome_curso": "Sem NR - Instalador de Aquecedor Solar",
      "descricao": "Capacitação em 24 horas de todos empregados que atuarão instalando sistemas solar de aquecimento de água, ênfase em NR-35 Ttrabalho em Altura. ",
      "obrigatoriedade": "Não mandatório",
      "objetivo": "Atender a legislação trabalhista",
      "carga": "24",
      "categoria": "Energia Solar"
    }
  ])

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const c of courses) {
      if (c.categoria) set.add(c.categoria);
    }
    return ["Todos", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [courses]);

  const filteredCourses = courses.filter(course => {
    const matchescategoria = selectedcategoria === "Todos" || course.categoria === selectedcategoria;
    const matchesSearch = course.nome_curso.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    return matchescategoria && matchesSearch;
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
  const handlecategoriaChange = (categoria: string) => {
    setSelectedcategoria(categoria);
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
              {categories.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => handlecategoriaChange(categoria)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                    selectedcategoria === categoria
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {categoria}
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
            className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all carga-300 group flex flex-col"
          >
            {/* Conteúdo que pode crescer */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {course.obrigatoriedade == "Mandatório" ? (
                    <Shield className="h-5 w-5 text-destructive" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  )}
                  <span className={`text-sm font-medium ${
                    course.obrigatoriedade == "Mandatório" ? "text-destructive" : "text-primary"
                  }`}>
                    {course.obrigatoriedade}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{course.carga}h</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                {course.nome_curso}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {course.descricao}
              </p>

              {course.objetivo && (
                <p className="text-xs text-muted-foreground mb-4 italic">
                  {course.objetivo}
                </p>
              )}
            </div>

      {/* Footer que fica sempre no bottom */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
          {course.categoria}
        </span>
        
        <Button asChild className="text-white hover:text-white/80 text-sm font-medium transition-colors">
          <a 
            href={`https://wa.me/5521983620038?text=Olá, boa tarde! Vim pelo site da ACS Treinamentos e gostaria de saber mais sobre o curso de ${course.nome_curso}`}
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
        <div className="mt-12">
          {/* MOBILE: condensada */}
          <div className="flex sm:hidden justify-center items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-8 px-2"
            >
              Anterior
            </Button>

            {/* páginas condensadas: 1 … p-1 p p+1 … last */}
            {(() => {
              const pages: (number | string)[] = [];
              const add = (v: number | string) => pages.push(v);

              const last = totalPages;
              const p = currentPage;

              add(1);
              if (p > 3) add("…");
              if (p - 1 > 1) add(p - 1);
              if (p !== 1 && p !== last) add(p);
              if (p + 1 < last) add(p + 1);
              if (p < last - 2) add("…");
              if (last !== 1) add(last);

              return (
                <div className="flex items-center gap-1">
                      {pages.map((pg, idx) =>
                        typeof pg === "string" ? (
                          <span key={`dots-${idx}`} className="px-2 text-sm text-muted-foreground">…</span>
                        ) : (
                          <Button
                            key={pg}
                            variant={currentPage === pg ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(pg)}
                            className="h-8 w-8 p-0"
                          >
                            {pg}
                          </Button>
                        )
                      )}
                    </div>
                  );
                })()}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="h-8 px-2"
                >
                  Próxima
                </Button>
              </div>

          {/* DESKTOP/TABLET: completa */}
          <div className="hidden sm:flex justify-center items-center gap-2">
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
              {courses.filter(c => c.obrigatoriedade).length}
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