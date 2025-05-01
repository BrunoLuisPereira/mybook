// controllers/usuarioController.js

const db = require('../db'); // conexão com banco
const Usuario = require('../models/Usuario');

exports.buscarUsuario = async (req, res) => {
  const { email } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    const usuario = rows[0];
    res.json({
      nome: usuario.nome,
      email: usuario.email,
      cpf: usuario.cpf,
      dataNascimento: usuario.dataNascimento,
      fotoPerfil: usuario.fotoPerfil
    });
  } catch (err) {
    console.error('Erro ao buscar usuário:', err);
    res.status(500).json({ erro: 'Erro interno do servidor.' });
  }
};

exports.atualizarPerfil = async (req, res) => {
  const { email, nome, cpf, dataNascimento, fotoPerfil } = req.body;

  try {
    await db.query(
      'UPDATE usuarios SET nome = ?, cpf = ?, dataNascimento = ?, fotoPerfil = ? WHERE email = ?',
      [nome, cpf, dataNascimento, fotoPerfil, email]
    );
    res.json({ mensagem: 'Perfil atualizado com sucesso.' });
  } catch (err) {
    console.error('Erro ao atualizar perfil:', err);
    res.status(500).json({ erro: 'Erro ao atualizar perfil.' });
  }
};
