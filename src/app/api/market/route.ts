import { NextRequest, NextResponse } from 'next/server';

// Importando dados estáticos do arquivo
import { ccData, CCConsultavel } from '@/data/ccData';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  try {
    switch (category) {
      case 'cc-consultaveis':
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedData = ccData.slice(startIndex, endIndex);
        
        return NextResponse.json({
          data: paginatedData,
          pagination: {
            page,
            limit,
            total: ccData.length,
            totalPages: Math.ceil(ccData.length / limit)
          }
        });

      case 'cc-full':
        const ccFullPrices = {
          "AMEX": 75,
          "BLACK": 60,
          "BUSINESS": 45,
          "CLASSIC": 15,
          "CORPORATE": 52,
          "ELO": 22,
          "GOLD": 18,
          "INDEFINIDO": 30,
          "INFINITE": 52,
          "NUBANK BLACK": 75,
          "PLATINUM": 30,
          "PREPAID": 8,
          "STANDARD": 18
        };

        return NextResponse.json({
          data: Object.entries(ccFullPrices).map(([brand, price]) => ({
            brand,
            price,
            type: 'cc-full'
          }))
        });

      case 'gift-cards':
        return NextResponse.json({
          data: [
            {
              name: 'Razer Gold',
              description: 'Gift Card para jogos',
              buyRate: 0.5,
              image: 'https://res.cloudinary.com/dhwqfkhzm/image/upload/v1765146117/Razer_Gold_bn1uc7.png'
            },
            {
              name: 'Google Play',
              description: 'Gift Card para Android',
              buyRate: 0.5,
              image: 'https://res.cloudinary.com/dhwqfkhzm/image/upload/v1765146118/1743081473-google-play-640w_skwql8.avif'
            }
          ]
        });

      default:
        return NextResponse.json({
          categories: [
            { id: 'cc-full', name: 'CC Full' },
            { id: 'cc-consultaveis', name: 'CC Consultáveis' },
            { id: 'gift-cards', name: 'Gift Cards' },
            { id: 'outros', name: 'Outros' }
          ]
        });
    }
  } catch (error) {
    console.error('Market API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action, data } = await request.json();

    switch (action) {
      case 'purchase':
        // Lógica de compra aqui (se necessário)
        return NextResponse.json({
          success: true,
          message: 'Purchase processed successfully',
          orderId: `NEX${Date.now()}`
        });

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Market API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}