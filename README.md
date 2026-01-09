# Forest 🌲

Uma landing page criada para um resort de ecoturismo. A ideia é transportar quem visita o site direto pra natureza, mostrando as acomodações, eventos e experiências que o lugar oferece.

## O que tem aqui

O projeto simula algumas coisas legais:

- O clima muda toda vez que você recarrega a página - a temperatura é aleatória e o vídeo de fundo se adapta (sol ou chuva)
- Menu animado pra mobile que abre e fecha de forma bem suave
- Totalmente responsivo, funciona bem tanto no computador quanto no celular
- Cards das acomodações, eventos e atividades
- Seção de parceiros e depoimentos

## Tecnologias usadas

O projeto foi construído com:

- React 19 e TypeScript
- Vite pra deixar o desenvolvimento mais rápido
- Tailwind CSS pra estilização
- Motion (Framer Motion) pras animações
- ESLint e Prettier pra manter o código organizado

## Como rodar o projeto

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
```

Depois é só abrir o navegador no endereço que aparecer no terminal (geralmente `http://localhost:5173`).

## Comandos úteis

```bash
npm run dev      # Roda o projeto localmente
npm run build    # Cria a versão de produção
npm run preview  # Testa a build antes de subir
npm run lint     # Checa se tem algum erro no código
```

## Como está organizado

```
src/
├── components/       # Todos os componentes da página
│   ├── Menu.tsx
│   ├── Banner.tsx
│   ├── WeatherCard.tsx
│   └── outros componentes...
├── assets/          # Imagens, vídeos e logos
├── App.tsx          # Componente raiz
└── main.tsx         # Arquivo de entrada
```

## Alguns detalhes legais

- A temperatura é gerada aleatoriamente e compartilhada entre o card de clima e o banner (mostra chuva ou sol baseado nisso)
- As animações do menu mobile têm um efeito cascata bem legal
- Os componentes são todos tipados com TypeScript pra facilitar manutenção
- Usei `useMemo` pra evitar cálculos desnecessários e melhorar a performance

---

Feito com React, TypeScript e muito café ☕
