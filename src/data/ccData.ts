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
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.088,73",
    "limiteTotal": "3.000,00",
    "preco": "220,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.001,23",
    "limiteTotal": "2.000,00",
    "preco": "220,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.017,32",
    "limiteTotal": "2.000,00",
    "preco": "220,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "510869",
    "banco": "MERCADO PAGO EMISORA SA",
    "level": "PREPAID RELOADABLE",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.021,24",
    "limiteTotal": "2.000,00",
    "preco": "240,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "510869",
    "banco": "MERCADO PAGO EMISORA SA",
    "level": "PREPAID RELOADABLE",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.397,65",
    "limiteTotal": "2.000,00",
    "preco": "240,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.392,87",
    "limiteTotal": "2.000,00",
    "preco": "240,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.523,89",
    "limiteTotal": "2.000,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.344,87",
    "limiteTotal": "2.500,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "498401",
    "banco": "BANCO DO BRASIL, S.A.",
    "level": "PLATINUM",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "2.440,00",
    "limiteTotal": "3.000,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.421,21",
    "limiteTotal": "2.000,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "498581",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.100,04",
    "limiteTotal": "2.500,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "421960",
    "banco": "CAIXA ECONOMICA FEDERAL",
    "level": "INFINITE",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "4.168,62",
    "limiteTotal": "6.000,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.233,98",
    "limiteTotal": "3.000,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "407843",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.009,87",
    "limiteTotal": "2.000,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "558763",
    "banco": "CAIXA ECONOMICA FEDERAL",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "4.152,03",
    "limiteTotal": "8.000,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "552937",
    "banco": "CAIXA ECONOMICA FEDERAL",
    "level": "PLATINUM",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "3.179,77",
    "limiteTotal": "6.000,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "406166",
    "banco": "BANCO CSF, S.A.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "2.192,05",
    "limiteTotal": "5.050,00",
    "preco": "250,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "417401",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "PREPAID CLASSIC",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "1.677,54",
    "limiteTotal": "2.250,00",
    "preco": "260,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "510869",
    "banco": "MERCADO PAGO EMISORA SA",
    "level": "PREPAID RELOADABLE",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "5.321,87",
    "limiteTotal": "6.000,00",
    "preco": "350,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "498581",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "2.326,32",
    "limiteTotal": "4.000,00",
    "preco": "300,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "498581",
    "banco": "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA.",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "3.432,78",
    "limiteTotal": "5.000,00",
    "preco": "300,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "530033",
    "banco": "BANCO CSF S/A",
    "level": "GOLD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "11.295,35",
    "limiteTotal": "20.000,00",
    "preco": "300,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "544315",
    "banco": "REALIZE CREDITO FINANCIAMENTO E INVESTIMENTO SA",
    "level": "STANDARD",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "4.033,65",
    "limiteTotal": "5.200,00",
    "preco": "300,00",
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
    "preco": "400,00",
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
    "preco": "400,00",
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
    "preco": "400,00",
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
    "preco": "400,00",
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
    "preco": "400,00",
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
    "preco": "400,00",
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
    "preco": "400,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "64.382,32",
    "limiteTotal": "73.250,00",
    "preco": "450,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "41.824,84",
    "limiteTotal": "45.000,00",
    "preco": "450,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "57.934,43",
    "limiteTotal": "82.530,00",
    "preco": "450,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553665",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "51.060,65",
    "limiteTotal": "59.620,00",
    "preco": "460,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "42.299,18",
    "limiteTotal": "50.500,00",
    "preco": "480,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "37.102,45",
    "limiteTotal": "47.600,00",
    "preco": "470,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "38.604,67",
    "limiteTotal": "45.000,00",
    "preco": "480,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "34.009,29",
    "limiteTotal": "51.020,00",
    "preco": "440,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "48.699,58",
    "limiteTotal": "49.999,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "414506",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "SIGNATURE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "99.999,99",
    "limiteTotal": "99.999,99",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "42.371,24",
    "limiteTotal": "48.660,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "112.612,95",
    "limiteTotal": "121.390,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "57.289,85",
    "limiteTotal": "63.000,00",
    "preco": "500,00",
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
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "55.826,58",
    "limiteTotal": "94.450,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "86.656,01",
    "limiteTotal": "91.000,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "459080",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "PLATINUM",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "44.636,61",
    "limiteTotal": "60.000,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "490172",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "SIGNATURE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "38.655,56",
    "limiteTotal": "45.000,00",
    "preco": "450,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "490172",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "SIGNATURE",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "109.808,39",
    "limiteTotal": "109.920,00",
    "preco": "500,00",
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
    "preco": "450,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "490172",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "SIGNATURE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "99.999,99",
    "limiteTotal": "99.999,99",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "114.484,13",
    "limiteTotal": "150.070,00",
    "preco": "450,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "63.052,75",
    "limiteTotal": "75.000,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "63.511,17",
    "limiteTotal": "75.000,00",
    "preco": "450,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "51.494,00",
    "limiteTotal": "88.000,00",
    "preco": "450,00",
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
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "412723",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "CLASSIC",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "44.940,05",
    "limiteTotal": "65.000,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "549167",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "66.369,58",
    "limiteTotal": "75.000,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "86.656,01",
    "limiteTotal": "91.000,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "55.826,58",
    "limiteTotal": "94.450,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "112.612,95",
    "limiteTotal": "121.390,00",
    "preco": "500,00",
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
    "preco": "400,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "42.299,18",
    "limiteTotal": "50.500,00",
    "preco": "450,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "57.934,43",
    "limiteTotal": "82.530,00",
    "preco": "500,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "41.824,84",
    "limiteTotal": "45.000,00",
    "preco": "450,00",
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