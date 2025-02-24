# mybook
O MyBook Chat será um sistema de chat em tempo real integrado ao MyBook, permitindo que usuários compartilhem suas experiências de leitura, discutam livros e façam recomendações em tempo real.

Sobre o Projeto
O **MyBook Chat** é um sistema de chat em tempo real desenvolvido para permitir que usuários compartilhem suas experiências de leitura. Ele oferece funcionalidades como mensagens instantâneas, salas de bate-papo e integração com o sistema MyBook.

Frontend:
Next.js (React Framework) – Para um frontend otimizado e com suporte a SSR.
TailwindCSS / Styled Components – Para estilização da interface.
Backend:
Node.js + Express – Para criar a API do chat.
MYSQL 
JWT (JSON Web Token) – Para autenticação segura dos usuários.

 Requisitos do Projeto MyBook Chat Backend
Cadastro e Autenticação de Usuários
RF001: O sistema deve permitir que novos usuários se cadastrem informando nome, e-mail e senha.
RF002: O sistema deve permitir que usuários façam login utilizando e-mail e senha.
RF003: O sistema deve gerar um token JWT para autenticação dos usuários após o login.

Gerenciamento de Mensagens
RF004: O sistema deve permitir que usuários enviem mensagens para um chat público.
RF005: O sistema deve armazenar todas as mensagens no banco de dados.
RF006: O sistema deve permitir que usuários consultem mensagens anteriores no chat.
RF007: O sistema deve exibir o nome do usuário junto à mensagem enviada.

Comunicação em Tempo Real (WebSockets)
RF008: O sistema deve permitir que os usuários recebam mensagens em tempo real utilizando Socket.io.
RF009: O sistema deve notificar todos os usuários quando uma nova mensagem for enviada.

Salas de Chat (Opcional, mas recomendado)
RF010: O sistema deve permitir a criação de salas de chat separadas por tema.
RF011: Os usuários devem poder entrar e sair de salas de chat específicas.

Requisitos Não Funcionais (RNF)
Segurança
RNF001: O sistema deve utilizar JWT para autenticação dos usuários.
RNF002: As senhas dos usuários devem ser armazenadas de forma segura com hashing (bcrypt).
RNF003: O sistema deve permitir apenas usuários autenticados para enviar e visualizar mensagens.

Desempenho e Escalabilidade
RNF004: O sistema deve responder às requisições da API em no máximo 1 segundo.
RNF005: O sistema deve suportar pelo menos 100 usuários simultâneos sem degradação do desempenho.
RNF006: O banco de dados deve ser otimizado para suportar um grande volume de mensagens.

Infraestrutura e Deploy
RNF007: O backend deve ser containerizado com Docker.
RNF008: O sistema deve utilizar um banco de dados MySQL gerenciado pelo Sequelize.
RNF009: O projeto deve estar versionado no GitHub/GitLab e utilizar CI/CD para deploy automático.

Manutenibilidade e Padrões de Código
RNF010: O código deve seguir os padrões MVC (Model-View-Controller) para organização.
RNF011: O código deve ser documentado e conter um README detalhado com instruções de uso.
RNF012: O sistema deve ser testado com TDD (Test-Driven Development), implementando testes unitários.
