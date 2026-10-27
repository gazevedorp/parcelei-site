import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: ligar ao CRM ou e-mail do time comercial.
  // Enquanto não houver destino, não gravar e não enviar o contato.
  try {
    await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
