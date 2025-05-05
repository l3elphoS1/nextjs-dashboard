import postgres from "postgres";

// app/query/route.ts
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

export async function GET() {
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({ error: 'Unknown error' }, { status: 500 });
  }
}