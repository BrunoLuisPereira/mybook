// controllers/leituraController.js

const db = require('../db');

// Adicionar nova leitura
exports.adicionarLeitura = async (req, res) => {
  const { email, titulo } = req.body;

  try {
    await db.query(
      'INSERT INTO leituras (email, titulo) VALUES (?, ?)',
      [email, titulo]
    );
    res.json({ mensagem: 'Livro para leitura adicionado com sucesso.' });
  } catch (err) {
    console.error('Erro ao adicionar leitura:', err);
    res.status(500).json({ erro: 'Erro ao adicionar leitura.' });
  }
};

// Atualizar data de início
exports.marcarInicio = async (req, res) => {
  const { email, titulo, inicio } = req.body;

  try {
    await db.query(
      'UPDATE leituras SET inicio = ? WHERE email = ? AND titulo = ?',
      [inicio, email, titulo]
    );
    res.json({ mensagem: 'Início registrado.' });
  } catch (err) {
    console.error('Erro ao registrar início:', err);
    res.status(500).json({ erro: 'Erro ao registrar início.' });
  }
};

// Atualizar data de fim
exports.marcarFim = async (req, res) => {
  const { email, titulo, fim } = req.body;

  try {
    await db.query(
      'UPDATE leituras SET fim = ? WHERE email = ? AND titulo = ?',
      [fim, email, titulo]
    );
    res.json({ mensagem: 'Fim registrado.' });
  } catch (err) {
    console.error('Erro ao registrar fim:', err);
    res.status(500).json({ erro: 'Erro ao registrar fim.' });
  }
};

// Listar todas as leituras do usuário
exports.listarLeituras = async (req, res) => {
  const { email } = req.query;

  try {
    const [leituras] = await db.query('SELECT * FROM leituras WHERE email = ?', [email]);
    res.json(leituras);
  } catch (err) {
    console.error('Erro ao buscar leituras:', err);
    res.status(500).json({ erro: 'Erro ao buscar leituras.' });
  }
};
