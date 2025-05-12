
const db = require('../db');

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

exports.listarAvaliacoesDoUsuario = async (req, res) => {
  const { email } = req.params;

  try {
    const [avaliacoes] = await db.query(
      'SELECT * FROM avaliacoes WHERE email = ? ORDER BY nota DESC LIMIT 10',
      [email]
    );
    res.json(avaliacoes);
  } catch (err) {
    console.error('Erro ao buscar avaliações do usuário:', err);
    res.status(500).json({ erro: 'Erro ao buscar avaliações.' });
  }
};

exports.listarTop10Global = async (req, res) => {
  try {
    const [top10] = await db.query(`
      SELECT nome, 
             ROUND(AVG(nota), 1) AS media, 
             COUNT(*) AS total
      FROM avaliacoes
      GROUP BY nome
      ORDER BY media DESC
      LIMIT 10
    `);
    res.json(top10);
  } catch (err) {
    console.error('Erro ao buscar top 10 global:', err);
    res.status(500).json({ erro: 'Erro ao buscar top 10 global.' });
  }
};
