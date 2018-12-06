import app from './app'

const PORT: number = 3000 || +process.env.PORT

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
