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
    "bin": "470598",
    "banco": "ITAU UNIBANCO HOLDING, S.A.",
    "level": "PLATINUM",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "2.966,55",
    "limiteTotal": "7.520,00",
    "preco": "225,00",
    "pais": "Brasil",
    "status": "ativo"
  },
  {
    "bin": "0000",
    "banco": "Contactar para Mais",
    "level": "DIVERSAS",
    "cpf": "SEM CPF",
    "nome": "COM NOME",
    "limiteDisponivel": "0000",
    "limiteTotal": "0000",
    "preco": "000",
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