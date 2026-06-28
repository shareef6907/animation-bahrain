// Removed per security requirement — public DB-error endpoint
export async function GET() {
  return new Response('Not found', { status: 404 })
}
