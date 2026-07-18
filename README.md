# HeroVerse API Gateway 🚀

Backend API Gateway para el proyecto HeroVerse, encargado de gestionar y filtrar la información proveniente de la Superhero API externa.

## 🛠 Tecnologías
- **Runtime:** Node.js
- **Framework:** [Express](https://expressjs.com/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📡 Endpoints
- `GET /api/health`: Verifica el estado del servidor.
- `GET /api/characters`: Obtiene todos los personajes (acepta query param `name` para filtrar).
- `GET /api/characters/:id`: Obtiene el detalle de un personaje específico por su ID.

## ⚙️ Instalación y Uso
1. Clona el repositorio.
2. Instala dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`

---
*Desarrollado por Edgar Montenegro.*