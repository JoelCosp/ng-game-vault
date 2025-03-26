export interface Genre {

}

export interface Videogame {
    title: String,
    developer: String,
    genre: String[],
    platforms: String[],
    release_year: Number,
    rating: Number,
    description: String,
    price: Number,
    image: String,
    multiplayer: Boolean
}