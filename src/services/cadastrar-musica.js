import { v4 } from "uuid";

export function salvarMusica(dados) {
    const playlist = JSON.parse(localStorage.getItem("playlist")) || [];
    dados.id = v4();
    playlist.push(dados);
    localStorage.setItem("playlist", JSON.stringify(playlist));
}

export function obterPlaylist() {
    return JSON.parse(localStorage.getItem("playlist")) || [];
}
export function excluirMusica(id) {
    const playlist = obterPlaylist();
    const novaPlaylist = playlist.filter(musica => musica.id !== id);
    localStorage.setItem("playlist", JSON.stringify(novaPlaylist));
}