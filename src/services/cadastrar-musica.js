export function obterPlaylist() {
    const playlist = JSON.parse(localStorage.getItem('playlist')) || [];
    return playlist;
}

export function salvarMusica(musica) {
    let playlist = obterPlaylist();

    if (musica.id) {
        // Atualiza a música existente
        playlist = playlist.map((m) => (m.id === musica.id ? musica : m));
    } else {
        // Cria uma nova música
        musica.id = String(Date.now()); // Gera um ID único
        playlist.push(musica);
    }

    localStorage.setItem('playlist', JSON.stringify(playlist));
}

export function removerMusica(id) {
    let playlist = obterPlaylist(); // Obtém a playlist atual do localStorage
    playlist = playlist.filter((musica) => musica.id !== id); // Filtra a música com o ID passado

    localStorage.setItem('playlist', JSON.stringify(playlist)); // Atualiza o localStorage com a playlist modificada
}
