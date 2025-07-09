export async function POST(request) {
  try {
    const { name } = await request.json();
    const greeting = `Hello, ${name || 'Valued Visitor'}!`;
    return new Response(JSON.stringify({ greeting }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
}
