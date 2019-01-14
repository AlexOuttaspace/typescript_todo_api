import app from './app'

const PORT: number = +process.env.PORT || 3200

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
