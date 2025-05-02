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

// Atualizar data de início (recebe data manualmente via body)
exports.marcarInicio = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!data) return res.status(400).json({ erro: 'Data de início não fornecida.' });

  try {
    await db.query(
      'UPDATE leituras SET inicio = ? WHERE id = ?',
      [data, id]
    );
    res.json({ mensagem: 'Início registrado com sucesso.' });
  } catch (err) {
    console.error('Erro ao registrar início:', err);
    res.status(500).json({ erro: 'Erro ao registrar início.' });
  }
};

// Atualizar data de fim (recebe data manualmente via body)
exports.marcarFim = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!data) return res.status(400).json({ erro: 'Data de término não fornecida.' });

  try {
    await db.query(
      'UPDATE leituras SET fim = ? WHERE id = ?',
      [data, id]
    );
    res.json({ mensagem: 'Término registrado com sucesso.' });
  } catch (err) {
    console.error('Erro ao registrar término:', err);
    res.status(500).json({ erro: 'Erro ao registrar término.' });
  }
};

// Listar todas as leituras do usuário
exports.listarLeituras = async (req, res) => {
  const { email } = req.params;

  try {
    const [leituras] = await db.query('SELECT * FROM leituras WHERE email = ?', [email]);
    res.json(leituras);
  } catch (err) {
    console.error('Erro ao buscar leituras:', err);
    res.status(500).json({ erro: 'Erro ao buscar leituras.' });
  }
};
