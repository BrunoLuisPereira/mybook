// controllers/livroController.js

const db = require('../db');

// Adicionar livro
exports.adicionarLivro = async (req, res) => {
  const { email, titulo, autor, nota } = req.body;

  try {
    await db.query(
      'INSERT INTO livros (email, titulo, autor, nota) VALUES (?, ?, ?, ?)',
      [email, titulo, autor, nota]
    );
    res.json({ mensagem: 'Livro adicionado com sucesso.' });
  } catch (err) {
    console.error('Erro ao adicionar livro:', err);
    res.status(500).json({ erro: 'Erro ao adicionar livro.' });
  }
};

// Listar livros do usuário
exports.listarLivros = async (req, res) => {
  const { email } = req.query;

  try {
    const [livros] = await db.query('SELECT * FROM livros WHERE email = ?', [email]);
    res.json(livros);
  } catch (err) {
    console.error('Erro ao buscar livros:', err);
    res.status(500).json({ erro: 'Erro ao buscar livros.' });
  }
};
