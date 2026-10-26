import express from 'express';
import http from 'http';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

app.post('/api/faq-answer', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          role: 'user',
          parts: [{
            text: `You are the AI partnership specialist for ShownLeads.
ShownLeads provides guaranteed, pre-screened in-home & on-site estimate appointments for home improvement contractors ($30k+/mo revenue, $2k+ ticket values) in the US, UK, and Ireland.

Key facts about ShownLeads:
- Model: Pay Per Estimate. Contractors only pay when a vetted single-family homeowner sits down for the scheduled estimate. If they cancel or no-show, the contractor pays $0.
- Zero monthly retainers, zero contract locks.
- 100% exclusive territory lock: only 1 contractor per trade/niche in each city. Estimates are NEVER shared with competitors (unlike Angi or Thumbtack).
- 2-Step Qualification: 
  1) Digital property & scope filter ($2k+ project budget, single-family homeowner deed verification, decision timeline within 30 days).
  2) Live telephone concierge calls within 180 seconds to confirm both decision-makers will be present and books directly into your estimator's calendar.
- Speed of launch: 7 business days setup, first sits typically scheduled within week 1-2.

The prospective contractor lead asks:
"${question}"

Provide a concise, direct, professional answer (2-4 sentences max). Be transparent, authoritative, contractor-focused, and finish with a helpful, inviting tone.`
          }],
        },
      ],
    });

    const answer = response.text || "We couldn't generate an answer at this time. Please speak with our specialist.";
    return res.json({ answer });
  } catch (error: any) {
    console.error('Error generating FAQ answer:', error);
    return res.status(500).json({
      error: 'Unable to reach the AI engine right now. Please try again or talk with a specialist.',
    });
  }
});

async function start() {
  const httpServer = http.createServer(app);

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: {
          server: httpServer,
        },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  httpServer.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

start();
