export interface Artistas {
    _id: string,
    image: string,
    name: string,
    banner: string
}

export interface Musicas {
    _id: string,
    image: string,
    name: string,
    artist: string,
    audio: string,
    duration: string
}