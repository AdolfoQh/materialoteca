export const config = { runtime: 'edge' };

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzC7OdC5ExvFJr-_JjYmXjT-3xKEamQAgRfgB-yHw-Wsnwb8WDr_EmV-giCdiHGXtA/exec';

export default async function handler(req) {
  const response = await fetch(APPS_SCRIPT_URL + '?cobertura=1');
  const body = await response.text();

  return new Response(body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
