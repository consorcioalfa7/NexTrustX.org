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
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "51.494,00",
    "limiteTotal": "88.000,00",
    "preco": "425,00",
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
    "preco": "455,00",
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
    "bin": "477176",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "INFINITE",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "34.009,29",
    "limiteTotal": "51.020,00",
    "preco": "415,00",
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
    "limiteDisponivel": "34.907,70",
    "limiteTotal": "40.210,00",
    "preco": "375,00",
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
    "bin": "553636",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "54.024,54",
    "limiteTotal": "60.000,00",
    "preco": "425,00",
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
    "preco": "425,00",
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
    "preco": "425,00",
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
    "limiteDisponivel": "63.511,17",
    "limiteTotal": "75.000,00",
    "preco": "425,00",
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
    "limiteDisponivel": "37.102,45",
    "limiteTotal": "47.600,00",
    "preco": "445,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "36.137,84",
    "limiteTotal": "61.530,00",
    "preco": "435,00",
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
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "114.484,13",
    "limiteTotal": "150.070,00",
    "preco": "425,00",
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
    "preco": "425,00",
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
    "preco": "425,00",
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
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "42.299,18",
    "limiteTotal": "50.500,00",
    "preco": "455,00",
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
    "preco": "425,00",
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
    "preco": "425,00",
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
    "bin": "553665",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "COM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "51.060,65",
    "limiteTotal": "59.620,00",
    "preco": "435,00",
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
  },
  {
    "bin": "523431",
    "banco": "ITAU UNIBANCO, S.A.",
    "level": "BLACK",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "42.299,18",
    "limiteTotal": "50.500,00",
    "preco": "425,00",
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
    "preco": "425,00",
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