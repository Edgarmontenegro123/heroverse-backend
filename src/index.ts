import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const SUPERHERO_API_URL = 'https://akabab.github.io/superhero-api/api'

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'HeroVerse API gateway is online' })
})

app.get('/api/characters', async (req, res) => {
    try {
        const { name } = req.query
        const response = await axios.get(`${SUPERHERO_API_URL}/all.json`)
        let heroes = response.data

        if (name) {
            heroes = heroes.filter((hero: any) =>
                hero.name.toLowerCase().includes((name as string).toLowerCase())
            )
        }

        res.json(heroes)
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'External API Error' })
    }
})

app.get('/api/characters/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await axios.get(`${SUPERHERO_API_URL}/id/${id}.json`)
        res.json(response.data)
    } catch (error: any) {
        res.status(404).json({ error: 'Hero not found' })
    }
})

// Solo levanta el puerto de manera tradicional si no estamos en producción (Vercel)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running locally on port ${PORT}`)
    })
}

// Exportación crucial para que Vercel tome el control en producción
export default app