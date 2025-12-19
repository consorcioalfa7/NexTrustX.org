// Dados dos CC Consultáveis - NexTrustX Market
// Este arquivo contém os dados dos produtos que podem ser facilmente atualizados

export interface CCConsultavel {
  bin: string;
  banco: string;
  level: string;
  cpf: string;
  nome: string;
  limiteDisponivel: string;
  limiteTotal: string;
  preco: string;
  pais: string;
  status?: 'ativo' | 'inativo' | 'promocao';
  observacoes?: string;
}

export const ccData: CCConsultavel[] = [
    {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "37.507,21",
    "limiteTotal": "40.000,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "490172",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "SIGNATURE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "19.660,18",
    "limiteTotal": "40.120,00",
    "preco": "265,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "470598",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "2.996,15",
    "limiteTotal": "13.600,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "29.034,82",
    "limiteTotal": "69.010,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523432",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "30.518,73",
    "limiteTotal": "45.000,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "46.890,18",
    "limiteTotal": "65.550,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "21.976,58",
    "limiteTotal": "56.410,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "444054",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "GOLD",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "35.088,75",
    "limiteTotal": "53.200,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "524474",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "99.999,99",
    "limiteTotal": "99.999,99",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "40.413,76",
    "limiteTotal": "41.160,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "24.536,22",
    "limiteTotal": "29.400,00",
    "preco": "315,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "23.107,57",
    "limiteTotal": "75.000,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "34.907,70",
    "limiteTotal": "40.210,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "14.346,49",
    "limiteTotal": "15.000,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "544891",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "3.413,69",
    "limiteTotal": "5.200,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "530148",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "27.275,04",
    "limiteTotal": "34.800,00",
    "preco": "345,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "524474",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "99.999,99",
    "limiteTotal": "99.999,99",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "20.117,28",
    "limiteTotal": "22.400,00",
    "preco": "275,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "13.339,66",
    "limiteTotal": "41.620,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "512215",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "33.464,96",
    "limiteTotal": "45.870,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "490172",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "SIGNATURE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "14.019,90",
    "limiteTotal": "16.000,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "478308",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "PLATINUM",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "28.474,19",
    "limiteTotal": "35.500,00",
    "preco": "355,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "459080",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "28.689,57",
    "limiteTotal": "36.390,00",
    "preco": "355,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "520977",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "STANDARD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.906,06",
    "limiteTotal": "14.700,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "549167",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "15.836,03",
    "limiteTotal": "17.100,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "549167",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "2.845,36",
    "limiteTotal": "8.900,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "549167",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "25.686,83",
    "limiteTotal": "27.240,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "546056",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "2.621,17",
    "limiteTotal": "12.770,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "514945",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "4.838,45",
    "limiteTotal": "5.960,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "514945",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "2.577,96",
    "limiteTotal": "4.946,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "514945",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.928,61",
    "limiteTotal": "5.350,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "514868",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "3.273,34",
    "limiteTotal": "5.000,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553665",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "15.068,43",
    "limiteTotal": "28.670,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "29.654,33",
    "limiteTotal": "40.000,00",
    "preco": "365,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "33.243,17",
    "limiteTotal": "45.000,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "19.260,74",
    "limiteTotal": "32.830,00",
    "preco": "265,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "19.217,50",
    "limiteTotal": "22.440,00",
    "preco": "265,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "74.994,10",
    "limiteTotal": "75.000,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "8.366,50",
    "limiteTotal": "15.520,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "14.515,17",
    "limiteTotal": "19.500,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "27.649,64",
    "limiteTotal": "30.000,00",
    "preco": "345,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "28.625,46",
    "limiteTotal": "30.000,00",
    "preco": "355,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "27.702,70",
    "limiteTotal": "28.000,00",
    "preco": "345,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "21.976,58",
    "limiteTotal": "56.410,00",
    "preco": "275,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "527468",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "STANDARD",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "6.468,26",
    "limiteTotal": "7.000,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "549167",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "10.380,74",
    "limiteTotal": "12.000,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523432",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "8.918,77",
    "limiteTotal": "10.000,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "490172",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "SIGNATURE",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "4.547,09",
    "limiteTotal": "22.460,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "490172",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "SIGNATURE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "12.000,00",
    "limiteTotal": "12.000,00",
    "preco": "255,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "483151",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "8.266,55",
    "limiteTotal": "10.000,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "21.375,28",
    "limiteTotal": "28.760,00",
    "preco": "275,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "16.478,15",
    "limiteTotal": "21.660,00",
    "preco": "235,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "24.051,57",
    "limiteTotal": "35.000,00",
    "preco": "315,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "35.346,02",
    "limiteTotal": "66.700,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "19.104,90",
    "limiteTotal": "23.900,00",
    "preco": "265,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "482477",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "CLASSIC",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "7.750,59",
    "limiteTotal": "9.340,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "549167",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "39.110,89",
    "limiteTotal": "50.000,00",
    "preco": "275,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "549167",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "6.113,26",
    "limiteTotal": "36.060,00",
    "preco": "235,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "13.285,56",
    "limiteTotal": "30.000,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "28.056,29",
    "limiteTotal": "40.000,00",
    "preco": "335,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "20.968,54",
    "limiteTotal": "22.400,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "17.831,92",
    "limiteTotal": "41.620,00",
    "preco": "275,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "9.507,37",
    "limiteTotal": "15.000,00",
    "preco": "265,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "38.040,06",
    "limiteTotal": "42.575,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "14.549,69",
    "limiteTotal": "45.000,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "29.300,52",
    "limiteTotal": "45.000,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "16.215,64",
    "limiteTotal": "28.280,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "26.945,49",
    "limiteTotal": "42.020,00",
    "preco": "335,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "515640",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "11.452,05",
    "limiteTotal": "15.000,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "530033",
    "banco": "BANCO CSF S/A",
    "level": "GOLD",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "6.079,29",
    "limiteTotal": "16.000,00",
    "preco": "345,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "530034",
    "banco": "BANCO CSF S/A",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "5.638,30",
    "limiteTotal": "17.660,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "549167",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "37.662,48",
    "limiteTotal": "40.000,00",
    "preco": "325,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "514945",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "5.751,68",
    "limiteTotal": "11.630,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "514868",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "15.424,40",
    "limiteTotal": "15.980,00",
    "preco": "255,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "548985",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "3.259,90",
    "limiteTotal": "3.643,64",
    "preco": "235,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "548514",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "6.646,59",
    "limiteTotal": "8.120,00",
    "preco": "235,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "27.039,61",
    "limiteTotal": "41.640,00",
    "preco": "345,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "13.043,28",
    "limiteTotal": "16.450,00",
    "preco": "255,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "24.883,16",
    "limiteTotal": "94.130,00",
    "preco": "315,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "41.150,87",
    "limiteTotal": "54.500,00",
    "preco": "255,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "35.346,02",
    "limiteTotal": "66.700,00",
    "preco": "355,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "29.300,52",
    "limiteTotal": "45.000,00",
    "preco": "375,00",
    "pais": "Brasil",
    "status": "ativo"
  }
];

// Função para atualizar dados facilmente
export const atualizarCCData = (novosDados: Partial<CCConsultavel>[]) => {
  // Esta função pode ser usada para atualizar os dados
  // Exemplo de uso:
  // atualizarCCData([
  //   { bin: "123456", banco: "NOVO BANCO", level: "PLATINUM", ... }
  // ]);
  console.log('Dados atualizados:', novosDados.length, 'produtos');
};

// Função para remover produtos
export const removerCCData = (binsParaRemover: string[]) => {
  // Remove produtos por BIN
  return ccData.filter(item => !binsParaRemover.includes(item.bin));
};

// Função para mudar status
export const mudarStatusCC = (binsParaMudar: string[], novoStatus: 'ativo' | 'inativo' | 'promocao') => {
  // Muda o status de produtos específicos
  ccData.forEach(item => {
    if (binsParaMudar.includes(item.bin)) {
      item.status = novoStatus;
    }
  });
};