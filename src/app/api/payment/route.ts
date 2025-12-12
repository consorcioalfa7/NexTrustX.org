import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { product, customerData, paymentMethod } = await request.json();

    if (!product || !customerData) {
      return NextResponse.json({ 
        error: 'Product and customer data are required' 
      }, { status: 400 });
    }

    // Simular processamento de pagamento
    // Em um ambiente real, você integraria com gateways de pagamento
    
    const orderId = `NEX${Date.now()}`;
    const timestamp = new Date().toISOString();

    // Preparar mensagem para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*NOVO PEDIDO - NexTrustX*\n\n` +
      `*Pedido:* ${orderId}\n` +
      `*Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
      `*Produto:* ${product.type === 'cc-full' ? `CC Full - ${product.brand}` : `CC Consultável - BIN ${product.bin}`}\n` +
      `*Valor:* R$ ${product.price || product.preco}\n\n` +
      `*Dados do Cliente:*\n` +
      `*Nome:* ${customerData.name || 'Não informado'}\n` +
      `*Contato:* ${customerData.contact}\n` +
      `*Tipo:* ${customerData.contactType === 'whatsapp' ? 'WhatsApp' : customerData.contactType === 'telegram' ? 'Telegram' : 'Email'}\n` +
      `*Pagamento:* ${paymentMethod === 'pix' ? 'PIX' : 'USDT TRC20'}\n\n` +
      `*Status:* Aguardando confirmação de pagamento`
    );

    const waContact = '+5516988142848';
    const whatsappLink = `https://wa.me/${waContact.replace(/[^\d]/g, '')}?text=${whatsappMessage}`;

    // Simular confirmação de pagamento
    const paymentData = {
      orderId,
      timestamp,
      product,
      customerData,
      paymentMethod,
      status: 'pending',
      whatsappLink,
      amount: product.price || product.preco
    };

    // Em um ambiente real, você salvaria no banco de dados
    // await db.payment.create({ data: paymentData });

    return NextResponse.json({
      success: true,
      orderId,
      whatsappLink,
      message: 'Pedido criado com sucesso! Complete o pagamento e entraremos em contato.'
    });

  } catch (error) {
    console.error('Payment API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'NexTrustX Payment API',
    methods: ['POST'],
    endpoints: {
      'POST /api/payment': 'Create a new payment order'
    }
  });
}