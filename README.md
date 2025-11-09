# 🍳 Gerador de Receitas Inteligente

Um projeto **Full Stack** que combina **Java + Spring Boot** no back-end e **React** no front-end para gerar receitas com o auxílio de **Inteligência Artificial (Groq API)**.

O usuário informa os ingredientes disponíveis, e o sistema retorna uma **receita completa**, com modo de preparo e sugestões personalizadas.

---

## 🚀 Tecnologias Utilizadas

### 🧠 Inteligência Artificial
- **Groq API** — utilizada para interpretar o prompt e gerar receitas de forma criativa e contextual.

### ⚙️ Back-end (API REST)
- **Java 17+**
- **Spring Boot 3+**
- **Spring Web / Spring MVC**
- **OpenAI/Groq API integration**
- **Maven**
- **Cors Configuration** para comunicação com o front-end

### 💻 Front-end
- **React + Vite**
- **Axios** para comunicação com a API
- **TailwindCSS / Shadcn UI** (ou outra biblioteca de componentes)
- **Hooks e Context API** para gerenciar estado
- Interface simples e responsiva para interação com o usuário

---

## 🧩 Arquitetura

GeradorReceitasFullStack/
│
├── BackEnd-Spring/
│ └── GeradorReceitas/
│ ├── src/main/java/com/inovation/GeradorReceitas/
│ └── pom.xml
│
└── FrontEnd-React/
└── src/

yaml
Copiar código

- O **back-end** expõe endpoints REST para receber os ingredientes e enviar o texto gerado pela IA.
- O **front-end** consome esses endpoints e exibe a receita ao usuário.

---

## 🧠 Como Funciona

1. O usuário digita os **ingredientes disponíveis**.
2. O front monta um **prompt descritivo** e envia para o back-end.
3. O back-end faz a requisição para a **API da Groq**.
4. A IA retorna uma **receita detalhada**, incluindo nome, ingredientes e modo de preparo.
5. O front exibe o resultado de forma bonita e legível.

---

## ⚙️ Como Rodar o Projeto

### 🔧 Pré-requisitos
- **Node.js 18+**
- **Java 17+**
- **Maven**
- **Groq API Key**

---

### 🖥️ Back-end (Spring Boot)

1. Acesse a pasta:
   ```bash
   cd BackEnd-Spring/GeradorReceitas
Configure sua chave da Groq API em um arquivo .env ou em application.properties:

properties
Copiar código
GROQ_API_KEY=your_api_key_here
Rode o projeto:

bash
Copiar código
mvn spring-boot:run
O servidor subirá em:
👉 http://localhost:8080

💻 Front-end (React)
Acesse a pasta:

bash
Copiar código
cd FrontEnd-React
Instale as dependências:

bash
Copiar código
npm install
Rode o servidor de desenvolvimento:

bash
Copiar código
npm run dev
O front estará em:
👉 http://localhost:5173

📸 Demonstração (exemplo)
yaml
Copiar código
🧂 Ingredientes: arroz, frango, cenoura
🍽️ Receita gerada:
Nome: Arroz de Frango com Cenoura
Modo de preparo:
1. Refogue o frango...
2. Adicione o arroz...
3. Sirva com cheiro-verde.
