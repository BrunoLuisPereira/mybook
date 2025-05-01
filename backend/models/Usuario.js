// models/Usuario.js

class Usuario {
    constructor(id, nome, email, senha, cpf, dataNascimento, fotoPerfil) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.fotoPerfil = fotoPerfil;
    }
  }
  
  module.exports = Usuario;
  