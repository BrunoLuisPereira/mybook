
const db = require('../db');

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


exports.listarLivros = async (req, res) => {
  
  const email = req.params.email || req.query.email;

  try {
    const [livros] = await db.query(
      'SELECT * FROM livros WHERE email = ? ORDER BY id DESC',
      [email]
    );
    res.json(livros);
  } catch (err) {
    console.error('Erro ao buscar livros:', err);
    res.status(500).json({ erro: 'Erro ao buscar livros.' });
  }
};


exports.atualizarLivro = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, nota } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE livros SET titulo = ?, autor = ?, nota = ? WHERE id = ?',
      [titulo, autor, nota, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Livro não encontrado.' });
    }
    res.json({ mensagem: 'Livro atualizado com sucesso.' });
  } catch (err) {
    console.error('Erro ao atualizar livro:', err);
    res.status(500).json({ erro: 'Erro ao atualizar livro.' });
  }
};

exports.excluirLivro = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query(
      'DELETE FROM livros WHERE id = ?',
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Livro não encontrado.' });
    }
    res.json({ mensagem: 'Livro excluído com sucesso.' });
  } catch (err) {
    console.error('Erro ao excluir livro:', err);
    res.status(500).json({ erro: 'Erro ao excluir livro.' });
  }
};
