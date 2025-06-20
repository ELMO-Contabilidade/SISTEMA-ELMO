// BackEnd/routes/loginRoute.js
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { loginScriptUrl } = require('../conectionLinks/links');

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const response = await fetch(loginScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email, senha })
    });

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ status: 'erro', mensagem: 'Erro interno do servidor' });
  }
});

module.exports = router;
