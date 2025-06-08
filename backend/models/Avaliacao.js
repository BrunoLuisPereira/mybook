// models/Avaliacao.js

class Avaliacao {
    constructor(id, email, nome, nota, comentario, data) {
      this.id = id;
      this.email = email;
      this.nome = nome;
      this.nota = nota;
      this.comentario = comentario;
      this.data = data;
    }
  }
  
  module.exports = Avaliacao;
  