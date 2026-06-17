export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const offset = Number(searchParams.get("offset") ?? 2);

  const hoje = new Date();

  const dataFutura = new Date(
    hoje.getFullYear(),
    hoje.getMonth() + offset,
    1
  );

  return Response.json({
    offset,
    mes: dataFutura.toLocaleDateString("pt-BR", {
      month: "long",
    }),
    ano: dataFutura.getFullYear(),
  });
}
