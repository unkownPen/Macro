export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }

    // ── API ROUTES ─────────────────────────────
    if (path === '/api/groq' && request.method === 'POST') {
      const body = await request.text();
      const keys = [env.GROQ_API_KEY, env.GROQ2_API_KEY].filter(Boolean);
      for (const key of keys) {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key,
          },
          body,
        });
        if (res.status !== 429 && res.status !== 401 && res.status !== 403) {
          return new Response(res.body, {
            status: res.status,
            headers: { ...cors, 'Content-Type': 'application/json' },
          });
        }
      }
      return new Response(JSON.stringify({ error: 'All Groq keys failed' }), {
        status: 429,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    if (path === '/api/gemini' && request.method === 'POST') {
      const model = url.searchParams.get('model') || 'gemini-2.0-flash-exp';
      const body = await request.text();
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body }
      );
      return new Response(res.body, {
        status: res.status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    if (path === '/api/gemini-image' && request.method === 'POST') {
      const model = url.searchParams.get('model') || 'imagen-3.0-generate-002';
      const key = env.GEMINI_IMAGE_API_KEY || env.GEMINI_API_KEY;
      const body = await request.text();
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${key}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body }
      );
      return new Response(res.body, {
        status: res.status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    if (path === '/api/hf' && request.method === 'POST') {
      const isSafety = url.searchParams.get('safety') === '1';
      const model = isSafety
        ? 'eliasalbouzidi/distilbert-nsfw-text-classifier'
        : url.searchParams.get('model');
      const body = await request.arrayBuffer();
      const res = await fetch(
        `https://router.huggingface.co/hf-inference/models/${model}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + env.HF_TOKEN,
          },
          body,
        }
      );
      return new Response(res.body, {
        status: res.status,
        headers: {
          ...cors,
          'Content-Type': res.headers.get('Content-Type') || 'application/json',
        },
      });
    }

    if (path === '/api/siliconflow-submit' && request.method === 'POST') {
      const body = await request.text();
      const keys = [env.SILICONFLOW_API_KEY, env.SILICONFLOW2_API_KEY, env.SILICONFLOW3_API_KEY].filter(Boolean);
      for (const key of keys) {
        const res = await fetch('https://api.siliconflow.com/v1/video/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key,
          },
          body,
        });
        if (res.status !== 429 && res.status !== 401 && res.status !== 403) {
          return new Response(res.body, {
            status: res.status,
            headers: { ...cors, 'Content-Type': 'application/json' },
          });
        }
      }
      return new Response(JSON.stringify({ error: 'All SiliconFlow keys failed' }), {
        status: 429,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    if (path === '/api/siliconflow-status' && request.method === 'POST') {
      const body = await request.text();
      const keys = [env.SILICONFLOW_API_KEY, env.SILICONFLOW2_API_KEY, env.SILICONFLOW3_API_KEY].filter(Boolean);
      for (const key of keys) {
        const res = await fetch('https://api.siliconflow.com/v1/video/status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key,
          },
          body,
        });
        if (res.status !== 429 && res.status !== 401 && res.status !== 403) {
          return new Response(res.body, {
            status: res.status,
            headers: { ...cors, 'Content-Type': 'application/json' },
          });
        }
      }
      return new Response(JSON.stringify({ error: 'All SiliconFlow keys failed' }), {
        status: 429,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // ── EVERYTHING ELSE: serve static files ──
    return env.ASSETS.fetch(request);
  },
};
