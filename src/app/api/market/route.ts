import { NextRequest, NextResponse } from 'next/server';

const ccData = [
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "COM CPF", nome: "COM NOME", limiteDisponivel: "50.811,55", limiteTotal: "102.570,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "41.824,84", limiteTotal: "45.000,00", preco: "350,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "57.934,43", limiteTotal: "82.530,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "42.299,18", limiteTotal: "50.500,00", preco: "350,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "29.300,52", limiteTotal: "45.000,00", preco: "300,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "112.612,95", limiteTotal: "121.390,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "80.313,26", limiteTotal: "81.000,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "20.968,54", limiteTotal: "22.400,00", preco: "250,00", pais: "Brasil" },
  { bin: "553636", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "41.150,87", limiteTotal: "54.500,00", preco: "300,00", pais: "Brasil" },
  { bin: "553636", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "24.883,16", limiteTotal: "94.130,00", preco: "260,00", pais: "Brasil" },
  { bin: "553636", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "42.371,24", limiteTotal: "48.660,00", preco: "300,00", pais: "Brasil" },
  { bin: "523665", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "COM CPF", nome: "COM NOME", limiteDisponivel: "51.060,65", limiteTotal: "59.620,00", preco: "400,00", pais: "Brasil" },
  { bin: "549167", banco: "ITAU UNIBANCO, S.A.", level: "PLATINUM", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "37.662,48", limiteTotal: "40.000,00", preco: "300,00", pais: "Brasil" },
  { bin: "549167", banco: "ITAU UNIBANCO, S.A.", level: "PLATINUM", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "39.110,89", limiteTotal: "50.000,00", preco: "300,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "35.346,02", limiteTotal: "66.700,00", preco: "280,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "24.051,57", limiteTotal: "35.000,00", preco: "250,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "55.826,58", limiteTotal: "94.450,00", preco: "400,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "16.478,15", limiteTotal: "21.660,00", preco: "160,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "86.656,01", limiteTotal: "91.000,00", preco: "400,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "21.375,28", limiteTotal: "28.760,00", preco: "200,00", pais: "Brasil" },
  { bin: "459080", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "PLATINUM", cpf: "COM CPF", nome: "COM NOME", limiteDisponivel: "44.636,61", limiteTotal: "60.000,00", preco: "300,00", pais: "Brasil" },
  { bin: "490172", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "SIGNATURE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "38.655,56", limiteTotal: "45.000,00", preco: "280,00", pais: "Brasil" },
  { bin: "490172", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "SIGNATURE", cpf: "COM CPF", nome: "COM NOME", limiteDisponivel: "109.808,39", limiteTotal: "109.920,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "40.413,76", limiteTotal: "41.160,00", preco: "300,00", pais: "Brasil" },
  { bin: "444054", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "GOLD", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "35.088,75", limiteTotal: "53.200,00", preco: "250,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "21.976,58", limiteTotal: "56.410,00", preco: "250,00", pais: "Brasil" }
];

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
            { id: 'cc-consultaveis', name: 'CC Consultáveis' },
            { id: 'cc-full', name: 'CC Full' },
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
        // Lógica de compra aqui
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