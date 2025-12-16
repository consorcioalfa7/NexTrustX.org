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
    bin: "523431", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "COM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "50.811,55", 
    limiteTotal: "102.570,00", 
    preco: "475,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "523431", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "41.824,84", 
    limiteTotal: "45.000,00", 
    preco: "425,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "523431", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "57.934,43", 
    limiteTotal: "82.530,00", 
    preco: "475,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "523431", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "42.299,18", 
    limiteTotal: "50.500,00", 
    preco: "425,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "523431", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "29.300,52", 
    limiteTotal: "45.000,00", 
    preco: "375,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "523431", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "112.612,95", 
    limiteTotal: "121.390,00", 
    preco: "475,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "523431", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "80.313,26", 
    limiteTotal: "81.000,00", 
    preco: "475,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "523431", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "40.413,76", 
    limiteTotal: "41.160,00", 
    preco: "375,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "553636", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "BLACK", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "42.371,24", 
    limiteTotal: "48.660,00", 
    preco: "375,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "549167", 
    banco: "ITAU UNIBANCO, S.A.", 
    level: "PLATINUM", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "39.110,89", 
    limiteTotal: "50.000,00", 
    preco: "375,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "477176", 
    banco: "ITAU UNIBANCO HOLDING, S.A.", 
    level: "INFINITE", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "35.346,02", 
    limiteTotal: "66.700,00", 
    preco: "355,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "477176", 
    banco: "ITAU UNIBANCO HOLDING, S.A.", 
    level: "INFINITE", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "55.826,58", 
    limiteTotal: "94.450,00", 
    preco: "475,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "477176", 
    banco: "ITAU UNIBANCO HOLDING, S.A.", 
    level: "INFINITE", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "86.656,01", 
    limiteTotal: "91.000,00", 
    preco: "475,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "490172", 
    banco: "ITAU UNIBANCO HOLDING, S.A.", 
    level: "SIGNATURE", 
    cpf: "SEM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "38.655,56", 
    limiteTotal: "45.000,00", 
    preco: "355,00", 
    pais: "Brasil",
    status: "ativo"
  },
  { 
    bin: "490172", 
    banco: "ITAU UNIBANCO HOLDING, S.A.", 
    level: "SIGNATURE", 
    cpf: "COM CPF", 
    nome: "COM NOME", 
    limiteDisponivel: "109.808,39", 
    limiteTotal: "109.920,00", 
    preco: "475,00", 
    pais: "Brasil",
    status: "ativo"
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