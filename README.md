# NexTrustX.org

Ecossistema completo para necessidades digitais composto por três unidades integradas:

## 🏗️ Estrutura do Projeto

### Unidades Principais

1. **Market Consórcio Alfa7** - Plataforma de produtos digitais
   - CC Consultáveis (com dados bancários completos)
   - CC Full (vários níveis e bandeiras)
   - Gift Cards (compra a 50% do valor)

2. **NexTrustX Market/Exchange** - Plataforma de criptoativos
   - Widget TradingView integrado
   - Compra e venda segura de criptomoedas
   - Personagem "Le Français"

3. **Ghost-0 Labs** - Laboratório de desenvolvimento
   - Desenvolvimento sob medida
   - APIs de pagamento
   - Web Scrapers
   - Bots Telegram
   - Integração com IA

## 🎨 Design System

- **Cores Principais**: Roxo Neon (#9B4DFF), Verde Neon (#00FF88)
- **Background**: #0A0A0A a #101010
- **Tipografia**: Poppins/Inter (títulos), JetBrains Mono (tech)
- **Estilo**: Dark Mode, elementos futuristas, bordas neon

## 🚀 Funcionalidades

### 💬 Assistente Virtual
- **Mariana Alves**: Assistente IA integrada
- Chat em tempo real com respostas inteligentes
- Integração com ZAI SDK para respostas contextuais

### 💳 Sistema de Pagamento
- **PIX**: Links diretos de pagamento
- **USDT TRC20**: Endereço para criptomoedas
- Modal interativo com formulário de dados
- Redirecionamento automático para WhatsApp

### 📱 Design Responsivo
- Mobile-first approach
- Animações suaves com Framer Motion
- Componentes shadcn/ui otimizados

## 🛠️ Tecnologias

- **Framework**: Next.js 15 com App Router
- **Linguagem**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animações**: Framer Motion
- **Icons**: Lucide React
- **AI**: z-ai-web-dev-sdk

## 📁 Estrutura de Arquivos

```
src/
├── app/
│   ├── api/          # Rotas da API
│   │   ├── chat/     # Chat com IA
│   │   ├── market/   # Dados do market
│   │   └── payment/  # Processamento de pagamentos
│   ├── page.tsx      # Página principal
│   └── layout.tsx    # Layout global
├── components/
│   ├── ui/           # Componentes shadcn/ui
│   ├── Header.tsx    # Header com logo 3D
│   ├── HeroSection.tsx # Hero com vídeo
│   ├── MarketSection.tsx # Market com produtos
│   ├── ExchangeSection.tsx # Exchange com TradingView
│   ├── LabsSection.tsx # Ghost-0 Labs
│   ├── ChatAssistant.tsx # Assistente Mariana
│   ├── PaymentModal.tsx # Modal de pagamento
│   └── Footer.tsx    # Rodapé animado
└── lib/
    ├── db.ts         # Configuração do banco
    └── utils.ts      # Utilitários
```

## 🎯 APIs Disponíveis

### Chat API
```
POST /api/chat
Body: { message: "string" }
Response: { response: "string" }
```

### Market API
```
GET /api/market?category=cc-consultaveis&page=1&limit=10
Response: { data: [], pagination: {} }

GET /api/market?category=cc-full
Response: { data: [{ brand, price, type }] }
```

### Payment API
```
POST /api/payment
Body: { product, customerData, paymentMethod }
Response: { success: true, orderId, whatsappLink }
```

## 🌐 Integrações Externas

- **TradingView**: Widget de ticker-tape para criptoativos
- **Cloudinary**: Hospedagem de imagens e vídeos
- **WhatsApp/Telegram**: Canais de contato
- **PIX**: Gateway de pagamento brasileiro

## 🎥 Mídia Integrada

### Vídeos
- Hero background: Vídeo neon/código
- Logo Consórcio Alfa7: Animação redonda
- Assistente Mariana: Vídeo circular no chat

### Imagens
- Logo NexTrustX: Com efeito 3D e glow
- Personagem Le Français: Exchange section
- Ghost-0: Portfólio Labs
- Gift Cards: Razer Gold, Google Play

## 🔧 Configuração

1. **Variáveis de Ambiente**:
   ```bash
   cp .env.example .env.local
   # Editar com seus contatos e configurações
   ```

2. **Instalação**:
   ```bash
   npm install
   ```

3. **Desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Build**:
   ```bash
   npm run build
   ```

## 📊 Dados dos Produtos

### CC Consultáveis
- BIN, Banco, Level, CPF, Nome
- Limites disponível e total
- Preços com acréscimo de R$ 50
- Paginação com 10 itens por página

### CC Full
- Preços por bandeira (AMEX: R$ 125, BLACK: R$ 110, etc.)
- Categorias completas com valores definidos

### Gift Cards
- Compra a 50% do valor nominal
- Razer Gold, Google Play e outros

## 🎨 Animações e Efeitos

- **Hover Effects**: Scale 1.02, shadow glow
- **Page Transitions**: Fade e slide suaves
- **Loading States**: Spinners e skeletons
- **Neon Borders**: Efeito glow animado
- **Code Rain**: Animação de fundo no footer

## 🔐 Segurança

- Criptografia de dados
- Validação de formulários
- CORS configurado
- Rate limiting nas APIs
- Sanitização de inputs

## 🚀 Deploy

O projeto está configurado para rodar em:
- **Produção**: nextrustx.org
- **Desenvolvimento**: localhost:3000

## 📈 Performance

- Next.js 15 com otimizações automáticas
- Imagens otimizadas com Next.js Image
- Code splitting por páginas
- Lazy loading de componentes
- Minificação automática

## 🤝 Contribuição

1. Fork do projeto
2. Feature branch
3. Commit com mensagens claras
4. Pull request detalhado

---

**NexTrustX** - Segurança • Transparência • Inovação • Confiança