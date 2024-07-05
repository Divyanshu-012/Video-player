import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDdjZDYwOTAxMDM2NjViMzRjNmM3ODYxN2U0MzRmYyIsIm5iZiI6MTcyMDExNTEwMC4xOTY0MjMsInN1YiI6IjY2N2JlY2I2MGY1MjhlNmJiNzE4NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GKsR4F8Q4bnGrEP1s0D4nckb2B1XERL5rOkoN8VIXUo',
    }
})

export default instance;