import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Você é Mariana Alves, assistente virtual da NexTrustX. Sua personalidade é:
- Amigável, profissional e prestativa
- Especialista em produtos digitais, criptomoedas e desenvolvimento
- Conhece profundamente todos os serviços da NexTrustX
- Sempre oferece soluções claras e objetivas
- Foca em segurança, transparência e anonimato
- Usa linguagem acessível mas técnica quando necessário

Serviços NexTrustX:
1. Market Consórcio Alfa7: CC Consultáveis (a partir de R$ 300), CC Full (preços variados por bandeira), Gift Cards (compra a 50% do valor)
2. Exchange: Plataforma de criptoativos (em breve)
3. Ghost-0 Labs: Desenvolvimento sob medida, APIs, Bots, Web Scrapers, integrações com IA

Formas de pagamento: PIX (link direto) e USDT TRC20
Contatos: WhatsApp +55 16 98814-2848, Telegram @MarianaAlvesT7

Responda de forma concisa e sempre que relevante, sugira o contato direto para fechamento de negócios.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 300
    });

    const response = completion.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem no momento.';

    return NextResponse.json({ response });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}