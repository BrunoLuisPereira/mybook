// controllers/desejoController.js

const db = require('../db');

// Adicionar desejo
exports.adicionarDesejo = async (req, res) => {
  const { email, livro, prioridade } = req.body;

  try {
    await db.query(
      'INSERT INTO desejos (email, livro, prioridade) VALUES (?, ?, ?)',
      [email, livro, prioridade]
    );
    res.json({ mensagem: 'Desejo adicionado com sucesso.' });
  } catch (err) {
    console.error('Erro ao adicionar desejo:', err);
    res.status(500).json({ erro: 'Erro ao adicionar desejo.' });
  }
};

exports.removerDesejo = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM desejos WHERE id = ?', [id]);
    res.json({ mensagem: 'Desejo excluído com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Não foi possível excluir.' });
  }
  };

// Listar desejos do usuário
exports.listarDesejos = async (req, res) => {
  const { email } = req.query;

  try {
    const [desejos] = await db.query('SELECT * FROM desejos WHERE email = ?', [email]);
    res.json(desejos);
  } catch (err) {
    console.error('Erro ao buscar desejos:', err);
    res.status(500).json({ erro: 'Erro ao buscar desejos.' });
  }
};
