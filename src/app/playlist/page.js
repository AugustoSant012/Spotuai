'use client';

import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { obterPlaylist, removerMusica } from '@/services/cadastrar-musica';
import DeleteButton from '@/components/DeleteButton';
import EditButton from '@/components/EditButton';
import AudioPlayer from '@/components/AudioPlayer';
import '@/app/css/playlist.css'
import Pagina from '@/components/Pagina';

export default function Playlist() {
    const [playlist, setPlaylist] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setPlaylist(obterPlaylist()); // Obtém a playlist do localStorage ao carregar a página
    }, []);

    function handleDelete(id) {
        console.log(`Excluindo a música com ID: ${id}`); // Log para verificar se o ID está correto
        removerMusica(id); // Remove a música do localStorage
        setPlaylist(obterPlaylist()); // Atualiza a lista após a remoção
        console.log('Playlist após remoção:', obterPlaylist()); // Verifica a playlist após a remoção
    }

    function handleEdit(id) {
        // Redireciona para a página de edição passando o ID como query param
        router.push(`/playlist/form?id=${id}`);
    }

    return (
        <Pagina titulo="Minha Playlist">
            <div className="playlist-container">
                {/* Header da playlist */}
                <div className="playlist-header">
                    <h1 className="playlist-title">Minha Playlist</h1>
                    <Link href="/playlist/form">
                        <Button variant="primary" className="add-button">Adicionar Música</Button>
                    </Link>
                </div>
                
                {/* Mensagem ou cards da playlist */}
                {playlist.length === 0 ? (
                    <p className="semmusica">Nenhuma música na playlist.</p>
                ) : (
                    <div className="cards-container">
                        {playlist.map((musica) => (
                            <Card key={musica.id} className="music-card">
                                <Card.Img
                                    variant="top"
                                    src={musica.foto}
                                    alt={musica.musica}
                                    className="music-image"
                                />
                                <Card.Body>
                                    <Card.Title>{musica.musica}</Card.Title>
                                    <Card.Text>{musica.cantor}</Card.Text>
                                    <AudioPlayer src={musica.audio} />
                                    <div className="button-group">
                                        <EditButton onEdit={() => handleEdit(musica.id)} />
                                        <DeleteButton onDelete={() => handleDelete(musica.id)} />
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </Pagina>
    );
}
