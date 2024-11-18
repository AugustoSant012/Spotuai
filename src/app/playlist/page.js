'use client';

import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { obterPlaylist, excluirMusica } from '@/services/cadastrar-musica';
import DeleteButton from '@/components/DeleteButton';
import EditButton from '@/components/EditButton';
import AudioPlayer from '@/components/AudioPlayer';
import "@/app/css/playlist.css";

export default function Playlist() {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        setPlaylist(obterPlaylist());
    }, []);

    function handleDelete(id) {
        excluirMusica(id);
        setPlaylist(obterPlaylist());
    }

    function handleEdit(id) {
        // Implemente a navegação para a página de edição passando o ID
        // Por exemplo, router.push(`/playlist/editar/${id}`);
    }

    return (
        <div className="playlist-container">
            <h1 className="playlist-title">Minha Playlist</h1>
            <Link href="/playlist/novo">
                <Button variant="primary" className="add-button">Adicionar Música</Button>
            </Link>
            <div className="cards-container">
                {playlist.map((musica) => (
                    <Card key={musica.id} className="music-card">
                        <Card.Img variant="top" src={musica.foto} alt={musica.musica} />
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
        </div>
    );
}