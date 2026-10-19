# 🚀 Portfólio Bryan Szero Clone (Jolie Lopes Pavan)

## Stack
- Next.js 14+ (App Router, Static HTML Export)
- Tailwind CSS
- Framer Motion
- Lucide React

## Scripts
- `npm run dev`: Inicia o servidor local de desenvolvimento em http://localhost:3000
- `npm run build`: Gera o build estático pronto para GitHub Pages na pasta `out/`

## Deploy no GitHub Pages
O projeto está configurado com `output: 'export'` no `next.config.mjs`.
Ao subir para um repositório no GitHub (por exemplo `joliepavan.github.io`), a GitHub Action em `.github/workflows/deploy.yml` compila e publica o site automaticamente.
