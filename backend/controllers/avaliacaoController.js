// controllers/avaliacaoController.js

const db = require('../db');

// Adicionar avaliação
exports.adicionarAvaliacao = async (req, res) => {
  const { email, nome, nota, comentario, data } = req.body;

  try {
    await db.query(
      'INSERT INTO avaliacoes (email, nome, nota, comentario, data) VALUES (?, ?, ?, ?, ?)',
      [email, nome, nota, comentario, data]
    );
    res.json({ mensagem: 'Avaliação adicionada com sucesso.' });
  } catch (err) {
    console.error('Erro ao adicionar avaliação:', err);
    res.status(500).json({ erro: 'Erro ao adicionar avaliação.' });
  }
};

// Listar avaliações do usuário
exports.listarAvaliacoesDoUsuario = async (req, res) => {
  const { email } = req.query;

  try {
    const [avaliacoes] = await db.query(
      'SELECT * FROM avaliacoes WHERE email = ? ORDER BY nota DESC LIMIT 10',
      [email]
    );
    res.json(avaliacoes);
  } catch (err) {
    console.error('Erro ao buscar avaliações:', err);
    res.status(500).json({ erro: 'Erro ao buscar avaliações.' });
  }
};

// Top 10 global (opcional)
exports.listarTop10Global = async (req, res) => {
  try {
    const [top10] = await db.query(
      'SELECT nome, AVG(nota) as mediaNota FROM avaliacoes GROUP BY nome ORDER BY mediaNota DESC LIMIT 10'
    );
    res.json(top10);
  } catch (err) {
    console.error('Erro ao buscar top 10 global:', err);
    res.status(500).json({ erro: 'Erro ao buscar top 10 global.' });
  }
};
