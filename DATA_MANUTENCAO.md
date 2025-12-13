# 🛠️ Como Atualizar os Dados do NexTrustX

## 📁 Estrutura dos Dados

### Arquivo Principal
- **`/src/data/ccData.ts`**: Contém todos os dados dos CC Consultáveis
- **Interface TypeScript**: `CCConsultavel` para type safety
- **Funções utilitárias**: Para facilitar manutenção

## 📝 Como Atualizar os Dados

### Opção 1: Editar o Arquivo Diretamente

1. Abra o arquivo `/src/data/ccData.tsx`
2. Localize o produto que deseja atualizar
3. Modifique os campos necessários
4. Salve o arquivo

**Exemplo de atualização:**
```typescript
// Para atualizar um produto existente
const produto = ccData.find(item => item.bin === "523431");
if (produto) {
  produto.preco = "450,00";
  produto.status = "promocao";
  produto.observacoes = "Produto em promoção";
}

// Para adicionar um novo produto
const novoProduto: CCConsultavel = {
  bin: "123456",
  banco: "NOVO BANCO S.A.",
  level: "PLATINUM",
  cpf: "SEM CPF",
  nome: "COM NOME",
  limiteDisponivel: "10.000,00",
  limiteTotal: "15.000,00",
  preco: "300,00",
  pais: "Brasil",
  status: "ativo"
};

ccData.push(novoProduto);
```

### Opção 2: Via API (Recomendado)

**Endpoints disponíveis:**
- `GET /api/market?category=cc-consultaveis` - Lista todos os produtos
- `POST /api/market` - Processar compras
- `PUT /api/market` - Atualizar produto específico
- `DELETE /api/market` - Remover produto

**Exemplo de uso da API:**
```javascript
// Atualizar preço de um produto
fetch('/api/market', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    bin: "523431",
    preco: "450,00"
  })
});

// Adicionar novo produto
fetch('/api/market', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'purchase',
    data: {
      bin: "123456",
      banco: "NOVO BANCO S.A.",
      level: "PLATINUM",
      cpf: "SEM CPF",
      nome: "COM NOME",
      limiteDisponivel: "10.000,00",
      limiteTotal: "15.000,00",
      preco: "300,00",
      pais: "Brasil"
    }
  })
});
```

## 🔄 Vantagens do Sistema Estático

### ✅ **Benefícios:**
- **Sem dependências**: Não precisa de banco de dados
- **Versionamento Git**: Todas as mudanças são rastreadas
- **Performance**: Dados carregados instantaneamente
- **Segurança**: Controle total sobre os dados
- **Simplicidade**: Fácil de entender e manter

### 📋 Campos Disponíveis

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **bin** | Número do BIN | `"523431"` |
| **banco** | Nome completo do banco | `"ITAU UNIBANCO, S.A."` |
| **level** | Nível do cartão | `"BLACK"`, `"PLATINUM"`, `"INFINITE"` |
| **cpf** | Status do CPF | `"COM CPF"`, `"SEM CPF"` |
| **nome** | Status do nome | `"COM NOME"`, `"SEM NOME"` |
| **limiteDisponivel** | Limite disponível | `"50.811,55"` |
| **limiteTotal** | Limite total | `"102.570,00"` |
| **preco** | Preço de venda | `"400,00"` |
| **pais** | País | `"Brasil"` |
| **status** | Status do produto | `"ativo"`, `"inativo"`, `"promocao"` |
| **observacoes** | Observações | `"Produto em promoção"` |

## 🎯 Como Usar

### 1. **Desenvolvimento Local**
1. Faça as alterações no arquivo `/src/data/ccData.tsx`
2. O Next.js recarregará automaticamente
3. Teste no navegador: `http://localhost:3000`

### 2. **Produção**
1. Commit as mudanças no Git
2. Deploy no servidor
3. Os dados serão atualizados automaticamente

## 🔧 Operações Comuns

### Mudar Preços em Lote
```typescript
// Aumentar todos os preços em 10%
ccData.forEach(produto => {
  if (produto.status === 'ativo') {
    produto.preco = (parseFloat(produto.preco) * 1.1).toFixed(2);
  }
});
```

### Mudar Status
```typescript
// Colocar produtos em promoção
ccData.forEach(produto => {
  if (parseFloat(produto.limiteDisponivel.replace(',', '.')) > 50000) {
    produto.status = 'promocao';
  }
});
```

### Remover Produtos
```typescript
// Remover produtos específicos
const binsParaRemover = ["523431", "553636"];
ccData = ccData.filter(item => !binsParaRemover.includes(item.bin));
```

## 📊 Validação Automática

O sistema valida automaticamente:
- **Campos obrigatórios**: BIN, banco, level, cpf, nome, preços
- **Formato de preços**: Sempre com duas casas decimais
- **Status**: Apenas valores válidos ('ativo', 'inativo', 'promocao')
- **Consistência**: Verifica se não há duplicatas de BIN

## 🚀 **Backup e Segurança**

### Backup Automático
- **Versionamento Git**: Todas as alterações são rastreadas
- **Histórico**: Mantém registro de todas as mudanças
- **Rollback**: Fácil reverter alterações se necessário

### Segurança
- **Sem acesso direto ao banco**: Dados em arquivos estáticos
- **Validação server-side**: Validação no backend
- **HTTPS em produção**: Proteção dos dados em trânsito

---

**🎉 Sistema otimizado para uso estático!**

Os dados agora são mantidos em arquivos TypeScript, fáceis de versionar e seguros para produção no GitHub!