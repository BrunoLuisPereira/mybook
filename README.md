# mybook
O mybook é um sistema pessoal para gerenciamento de leituras. O usuário pode cadastrar livros, registrar o tempo de leitura, dar notas e avaliações e acompanhar estatísticas sobre seu hábito de leitura.

Frontend
Next.js (React Framework) – Para um frontend otimizado e com suporte a SSR.
TailwindCSS / Styled Components – Para estilização da interface.
Backend
Node.js + Express – Para criar a API do chat.
MYSQL 
JWT (JSON Web Token) – Para autenticação segura dos usuários.

Cadastro e Autenticação de Usuários
RF001: O sistema deve permitir que usuários se cadastrem informando nome, e-mail e senha.
RF002: O sistema deve permitir que usuários façam login utilizando e-mail e senha.
RF003: O sistema deve utilizar JWT para autenticação e gerenciamento de sessões.

Gerenciamento de Livros
RF004: O usuário deve poder adicionar livros informando título, autor, gênero e número de páginas.
RF005: O usuário deve poder listar todos os livros cadastrados.
RF006: O usuário deve poder editar as informações de um livro.
RF007: O usuário deve poder excluir um livro da biblioteca.

Avaliação de Livros
RF012: O usuário deve poder avaliar um livro, atribuindo uma nota de 0 a 5 estrelas e um comentário.
RF013: O usuário deve poder editar sua avaliação de um livro.
RF014: O usuário deve poder excluir uma avaliação.

Requisitos Não Funcionais (RNF)
1. Segurança
RNF001: O sistema deve utilizar JWT para autenticação e autorização de usuários.
RNF002: As senhas dos usuários devem ser armazenadas de forma segura utilizando hashing (bcrypt).
RNF003: Apenas usuários autenticados podem acessar as funcionalidades do sistema.
2. Desempenho e Escalabilidade
RNF004: O sistema deve responder a requisições em no máximo 1 segundo.
RNF005: O sistema deve suportar 100 usuários simultâneos sem degradação do desempenho.
RNF006: O banco de dados deve ser otimizado para armazenamento e consulta eficiente dos registros de leitura.
3. Infraestrutura e Deploy
RNF007: O backend deve ser containerizado com Docker.
RNF008: O sistema deve utilizar um banco de dados MySQL ou PostgreSQL com ORM Sequelize.
RNF009: O projeto deve estar versionado no GitHub/GitLab e utilizar CI/CD para deploy automatizado.
4. Manutenção e Padrões de Código
RNF010: O código deve seguir a arquitetura MVC (Model-View-Controller).
RNF011: O código deve ser documentado e conter um README detalhado com instruções de uso.
RNF012: O sistema deve incluir testes unitários e de integração para garantir estabilidade.
