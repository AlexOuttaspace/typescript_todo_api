import app from './app'

const PORT: number = +process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
