export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, projectType, details, dimensions, message, lang } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required fields' });
    }

    const quoteRecord = {
      id: 'QUO-' + Date.now(),
      createdAt: new Date().toISOString(),
      name,
      phone,
      email: email || 'Non renseigné',
      projectType: projectType || 'Cuisine Sur-Mesure',
      details: details || '',
      dimensions: dimensions || '',
      message: message || '',
      lang: lang || 'fr'
    };

    console.log('[LUCCI DESIGN — NOUVEAU DEVIS REÇU]:', JSON.stringify(quoteRecord, null, 2));

    return res.status(200).json({
      success: true,
      message: 'Quote request registered successfully',
      quoteId: quoteRecord.id
    });
  } catch (error) {
    console.error('[QUOTE API ERROR]:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
