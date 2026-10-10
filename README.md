<div align="center">

<img src="public/icon.png" alt="Logo Kawã Sanchez" width="140" />

# Vilarejo 3D

**Um portfólio interativo onde você passeia por uma vila para conhecer meu trabalho.**

<br />

[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r180-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Licença](https://img.shields.io/badge/Licença-MIT-2ea44f?style=for-the-badge)](LICENSE)

<br />

<img src="https://github.com/user-attachments/assets/8ea3b1f6-126a-410d-96c2-93a2bf58a109" width="100%" alt="Prévia do Vilarejo 3D" />

</div>

<br />

## Sobre

Em vez de uma página com rolagem, aqui você controla um personagem em terceira pessoa e anda por um vilarejo em 3D. Cada canto da vila leva a uma parte do portfólio: **Sobre mim**, **Projetos**, **Experiência**, **Habilidades** e **Contato**.

Feito com **React Three Fiber** e física em tempo real com **Rapier**.

## Destaques

- **Personagem 3D** com animações de caminhada e corrida.
- **Vila completa**: casas, coreto, fonte, árvores, pedras e grama animada pelo vento.
- **Física real**: colisões e gravidade, sem atravessar objetos.
- **Funciona em qualquer tela**: teclado (`W` `A` `S` `D`) no computador e joystick virtual com atalhos no celular.
- **Controle de som**: botão para silenciar música e passos.
- **Tela de carregamento** com barra de progresso e botão START.

## Tecnologias

| Camada | Tecnologia | Para quê |
| :-- | :-- | :-- |
| Interface | `React 19` | Componentes e estado |
| 3D | `Three.js` + `React Three Fiber` + `drei` | Renderização da cena |
| Física | `Rapier 3D` | Colisões e movimento |
| Efeitos | `Postprocessing` | Bloom e profundidade |
| Hardware | `detect-gpu` | Ajusta a qualidade ao aparelho |
| Build | `Vite 7` | Desenvolvimento e empacotamento |

## Desempenho

O site foi pensado para carregar rápido, inclusive no celular:

- **Modelos comprimidos**: o mapa e o avatar usam compressão **Draco** e texturas **WebP**, caindo de cerca de 27 MB para cerca de 3 MB.
- **Pré-carregamento**: tudo é preparado durante a tela de carregamento, para não travar ao explorar.
- **Qualidade adaptativa**: o número de folhas de grama e os efeitos se ajustam ao aparelho.
- **Cache longo** para modelos e arquivos estáticos, configurado no `vercel.json`.

## Segurança

- **CSP restritiva** e cabeçalhos de segurança (HSTS, `X-Frame-Options`, `nosniff`, entre outros) definidos no `vercel.json`.
- **Sem segredos no código**: `.env` e chaves ficam fora do Git.
- **Links externos** com `rel="noopener noreferrer"`.
- **Dependências em dia**: `npm audit` com 0 vulnerabilidades e atualizações de dependências conferidas antes de cada deploy.

Detalhes e como reportar uma falha em [SECURITY.md](SECURITY.md).

## Como rodar

Você precisa do **Node.js 18+**.

```bash
# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Abra `http://localhost:5173` e entre na vila.

| Comando | O que faz |
| :-- | :-- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Testa a versão de produção localmente |
| `npm run lint` | Verifica o código |

## Publicar no Vercel

1. Importe o repositório no Vercel.
2. Framework: **Vite**. Build: `npm run build`. Saída: `dist`.
3. Os cabeçalhos de segurança e o cache já vêm do `vercel.json`.

## Licença

Distribuído sob a licença [MIT](LICENSE).

<br />

<div align="center">

Feito com ☕ e 💻 por **[Kawasanchezz](https://github.com/Kawasanchezz)**

</div>
