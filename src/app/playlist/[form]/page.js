'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { obterPlaylist, salvarMusica } from '@/services/cadastrar-musica';
import '@/app/css/playlist.css';

export default function FormularioMusica() {
    const [musica, setMusica] = useState({
        id: '',
        foto: '',
        musica: '',
        cantor: '',
        audio: '' 
    });

    const [erros, setErros] = useState({});
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const id = searchParams.get('id'); // Obtém o ID da URL
        if (id) {
            const playlist = obterPlaylist();
            const musicaExistente = playlist.find((item) => item.id === id);
            if (musicaExistente) {
                setMusica(musicaExistente); // Carrega os dados do item a ser editado
            }
        }
    }, [searchParams]);

    // Atualiza os campos do formulário
    function handleInputChange(event) {
        const { name, value } = event.target;
        setMusica({ ...musica, [name]: value });
    }

    // Validação dos campos obrigatórios
    function validarFormulario() {
        const novosErros = {};

        if (!musica.musica) novosErros.musica = 'O nome da música é obrigatório.';
        if (!musica.cantor) novosErros.cantor = 'O nome do cantor é obrigatório.';
        if (!musica.foto) novosErros.foto = 'A capa (URL) é obrigatória.';

        setErros(novosErros);
        return Object.keys(novosErros).length === 0; // Retorna true se não houver erros
    }

    // Salva ou edita o registro
    function handleSubmit(event) {
        event.preventDefault();

        if (!validarFormulario()) return; // Interrompe se o formulário não for válido

        salvarMusica(musica); // Salva no localStorage
        router.push('/playlist'); // Redireciona para a playlist
    }

    return (
        <div className="form-container">
            <h1>{musica.id ? 'Editar Música' : 'Adicionar Música'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome da Música:</label>
                    <input
                        type="text"
                        name="musica"
                        value={musica.musica}
                        onChange={handleInputChange}
                        className={`form-control ${erros.musica ? 'is-invalid' : ''}`}
                        required
                    />
                    {erros.musica && <div className="invalid-feedback">{erros.musica}</div>}
                </div>
                <div className="form-group">
                    <label>Cantor/Banda:</label>
                    <input
                        type="text"
                        name="cantor"
                        value={musica.cantor}
                        onChange={handleInputChange}
                        className={`form-control ${erros.cantor ? 'is-invalid' : ''}`}
                        required
                    />
                    {erros.cantor && <div className="invalid-feedback">{erros.cantor}</div>}
                </div>
                <div className="form-group">
                    <label>Capa (URL):</label>
                    <input
                        type="text"
                        name="foto"
                        value={musica.foto}
                        onChange={handleInputChange}
                        className={`form-control ${erros.foto ? 'is-invalid' : ''}`}
                        required
                    />
                    {erros.foto && <div className="invalid-feedback">{erros.foto}</div>}
                </div>
                <div className="form-group">
                    <label>Arquivo de Áudio:</label>
                    <input
                        type="file"
                        name="audio"
                        accept="audio/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    setMusica({ ...musica, audio: reader.result });
                                };
                                reader.readAsDataURL(file);
                            }
                        }}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {musica.id ? 'Salvar Alterações' : 'Adicionar Música'}
                </button>
            </form>
        </div>
    );
}
