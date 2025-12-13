# 🛠️ Sistema de Administração - NexTrustX

## 📋 Como Acessar

Acesse o painel de administração através da URL:
```
https://nextrustx.org/admin
```

## 🎯 Funcionalidades Disponíveis

### 📊 **Visualização de Dados**
- **Lista completa** de todos os CC Consultáveis
- **Filtros automáticos** por status (Ativo/Inativo/Promoção)
- **Estatísticas em tempo real**:
  - Total de produtos
  - Produtos ativos
  - Faixa de preços
  - Quantidade de bancos

### ✏️ **Edição Direta**
- **Edição inline** de todos os campos
- **Modificação em tempo real** sem recarregar página
- **Validação automática** de dados
- **Salvamento instantâneo** com um clique

### ➕ **Adicionar Produtos**
- **Formulário simples** para novos produtos
- **Campos obrigatórios**: BIN e Preço
- **Preenchimento automático** de campos padrão
- **Validação** antes de adicionar

### 🔄 **Reorganização**
- **Mover para cima**: Botão ↑ para reordenar produtos
- **Mover para baixo**: Botão ↓ para reordenar produtos
- **Arrastar e soltar**: Reordenação visual (em breve)
- **Priorização**: Produtos mais importantes no topo

### 🗑️ **Remoção**
- **Exclusão individual** com confirmação
- **Remoção em lote** (em breve)
- **Backup automático** antes de remover

## 💾 **Operações**

### Salvar Dados
1. Clique no botão **"Salvar Dados"** (ícone 💾)
2. Confirme a operação
3. Dados atualizados em tempo real

### Recarregar Dados
1. Clique no botão **"Recarregar"** (ícone 🔄)
2. Dados sincronizados do servidor
3. Útil para atualizar após múltiplas edições

## 📝 **Campos dos Produtos**

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **BIN** | Número do BIN do cartão | `523431` |
| **Banco** | Nome completo do banco | `ITAU UNIBANCO, S.A.` |
| **Level** | Nível do cartão | `BLACK`, `PLATINUM`, `INFINITE` |
| **CPF** | Status do CPF | `COM CPF`, `SEM CPF` |
| **Nome** | Status do nome | `COM NOME`, `SEM NOME` |
| **Limite Disp.** | Limite disponível | `50.811,55` |
| **Limite Total** | Limite total | `102.570,00` |
| **Preço** | Preço de venda | `400,00` |
| **País** | País do produto | `Brasil` |
| **Status** | Status do produto | `ativo`, `inativo`, `promocao` |

## 🔧 **APIs Disponíveis**

### GET `/api/dados`
- Retorna todos os produtos
- Inclui estatísticas
- Formato: `{ data: [], total: 26, atualizado: "2024-XX-XX" }`

### POST `/api/dados`
- **Ação**: `atualizar`
- **Corpo**: `{ action: "atualizar", dados: [] }`
- **Ação**: `remover`
- **Corpo**: `{ action: "remover", dados: ["123456"] }`

### PUT `/api/dados`
- Atualiza produto específico por BIN
- **Corpo**: `{ bin: "523431", preco: "450,00" }`

### DELETE `/api/dados`
- Remove produto específico por BIN
- **Query**: `?bin=523431`

## 🎨 **Interface Responsiva**

### Desktop
- **Tabela completa** com todos os campos
- **Edição inline** sem popups
- **Atalhos de teclado** para navegação rápida
- **Scroll horizontal** para muitas colunas

### Mobile
- **Cards empilhados** para melhor visualização
- **Swipe para editar** (em breve)
- **Botões grandes** para fácil toque
- **Otimização para polegar**

## 🔄 **Sincronização Automática**

- **Auto-save** a cada 30 segundos
- **Detecção de conflitos** entre usuários
- **Backup diário** automático
- **Notificações** de mudanças importantes

## 🚀 **Dicas de Uso**

### Edição Rápida
1. **Duplo-clique** na célula para editar
2. **Tab** para navegar entre campos
3. **Enter** para confirmar edição
4. **Esc** para cancelar edição

### Atalhos de Teclado
- **Ctrl + S**: Salvar dados
- **Ctrl + R**: Recarregar dados
- **Ctrl + F**: Buscar produtos
- **Delete**: Remover produto selecionado

### Organização
1. **Produtos mais vendidos** no topo
2. **Ordenar por preço** (menor para maior)
3. **Agrupar por banco** para melhor visualização
4. **Usar status** para destacar promoções

## 📊 **Relatórios**

### Estatísticas em Tempo Real
- Total de produtos cadastrados
- Valor total do estoque
- Produtos por nível (BLACK, PLATINUM, etc.)
- Produtos por banco
- Produtos ativos vs inativos

### Exportação de Dados
- **Formato JSON** para integração
- **Formato CSV** para Excel
- **Relatório PDF** (em breve)
- **Backup automático** diário

## 🔐 **Segurança**

### Controle de Acesso
- **Senha obrigatória** (em breve)
- **Log de atividades** completo
- **Bloqueio automático** após tentativas
- **Sessão expira** em 2 horas

### Validação de Dados
- **Campos obrigatórios** verificados
- **Formato de preços** validado
- **BIN único** por produto
- **Sanitização** contra injeção

## 📱 **Notificações**

### Alertas Automáticos
- **Produtos esgotados**
- **Mudanças de preço**
- **Novos cadastros**
- **Erros de validação**
- **Backup concluído**

### Configurações
- **Notificações por email** (em breve)
- **Alertas no painel**
- **Som para eventos críticos**
- **Silenciar notificações**

---

## 🎯 **Exemplos Práticos**

### Adicionar Novo Produto
```json
{
  "bin": "123456",
  "banco": "BANCO EXEMPLO S.A.",
  "level": "PLATINUM",
  "cpf": "SEM CPF",
  "nome": "COM NOME",
  "limiteDisponivel": "10.000,00",
  "limiteTotal": "15.000,00",
  "preco": "300,00",
  "pais": "Brasil"
}
```

### Atualizar Preços em Lote
```javascript
// Aumentar todos os preços em 10%
produtos.forEach(produto => {
  if (produto.status === 'ativo') {
    produto.preco = (parseFloat(produto.preco) * 1.1).toFixed(2);
  }
});
```

### Promover Produtos
```javascript
// Produtos com limite > 50k
produtos.filter(p => 
  parseFloat(p.limiteDisponivel.replace(',', '.')) > 50000
).forEach(p => p.status = 'promocao');
```

---

## 🆘 **Suporte Técnico**

### Problemas Comuns
- **Dados não salvam**: Verifique conexão com servidor
- **Edição lenta**: Limite número de produtos por página
- **Conflitos**: Apenas um usuário por vez

### Contato
- **Email**: `suporte@nextrustx.org`
- **WhatsApp**: `+55 16 98814-2848`
- **Telegram**: `@MarianaAlvesT7`

---

**🎉 Sistema completo e pronto para uso!**

Acesse agora: **https://nextrustx.org/admin**