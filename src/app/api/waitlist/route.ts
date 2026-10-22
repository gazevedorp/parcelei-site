import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: ligar a um serviço de lista de espera.
  // Enquanto não houver destino, não gravar e não enviar o contato.
  try {
    await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
