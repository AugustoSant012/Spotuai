'use client';
import React, { useState, useEffect } from 'react';
import Pagina from '@/components/Pagina';
import '@/app/css/play.css';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { obterPlaylist } from '@/services/cadastrar-musica'; // Função para obter as músicas cadastradas
import Link from 'next/link'; // Importando o Link do Next.js para navegação

export default function Spotuai() {
    const [playlist, setPlaylist] = useState([]);

    // Carregar a playlist do localStorage
    useEffect(() => {
        const lista = obterPlaylist();
        setPlaylist(lista);
    }, []);

    // Função para renderizar a playlist
    const renderPlaylist = () => {
        if (playlist.length === 0) {
            return <p>Não há músicas na sua playlist.</p>;
        }
        return (
            <div className="playlist-container">
                {playlist.map((musica) => (
                    <Link href={`/playlist?id=${musica.id}`} key={musica.id} passHref>
                        <Card style={{ width: '18rem' }} className="playlist-card">
                            <Card.Img variant="top" src={musica.foto} alt={musica.musica} />
                            <Card.Body>
                                <Card.Title>{musica.musica}</Card.Title>
                                <Card.Text>{musica.cantor}</Card.Text>
                                <Button variant="danger" onClick={() => handleDelete(musica.id)}>
                                    Excluir
                                </Button>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        );
    };

    // Função para excluir música da playlist
    const handleDelete = (id) => {
        let updatedPlaylist = playlist.filter((musica) => musica.id !== id);
        localStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
        setPlaylist(updatedPlaylist); // Atualiza o estado da playlist
    };

    return (
        <Pagina>
            <br />

            <div className="gif-container">
                <img
                    src="https://pic.surf/drv"
                    alt="Exemplo de GIF"
                    className="gif-image"
                />
            </div>

            <div className="iframe-container">
                {/* Spotify embeds */}
                <iframe
                    className="spotify-iframe"
                    src="https://open.spotify.com/embed/track/5jaqPYoLJjfJT92vQ7WXha?utm_source=generator&theme=0"
                    width="350"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
                <iframe
                    className="spotify-iframe"
                    src="https://open.spotify.com/embed/track/59iiIkwDcLRqyUwwt4UgU1?utm_source=generator&theme=0"
                    width="350"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
                <iframe
                    className="spotify-iframe"
                    src="https://open.spotify.com/embed/track/5ZEyH3VBYL4QJA7ePtocdX?utm_source=generator&theme=0"
                    width="350"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
                <iframe
                    className="spotify-iframe"
                    src="https://open.spotify.com/embed/track/6pnQjZPabSrppBUozCFZdw?utm_source=generator&theme=0"
                    width="350"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>

            <div className="promocaotext">
                <h1 className="discount-text">Desconto de 50% em todo o mês de Novembro!</h1>
            </div>

            {/* Cartões de planos */}
            <div className="card-container">
                {/* Plano PRO */}
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src="https://i.ibb.co/StT60bx/Brocasito-exclusivo-no-Spotuai.png" alt="Plano PRO" />
                    <Card.Body>
                        <Card.Title>Plano PRO</Card.Title>
                        <Card.Text className="plan-text">
                            Aproveite milhões de músicas com acesso ilimitado e sem anúncios!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="original-price">De: R$ 15,00</ListGroup.Item>
                        <ListGroup.Item className="discount-price">Por: R$ 7,50</ListGroup.Item>
                        <ListGroup.Item>Alta qualidade de áudio e músicas offline</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="/planos" className="subscribe-link">Assinar</Card.Link>
                    </Card.Body>
                </Card>

                {/* Plano Family */}
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src="https://i.ibb.co/sPrfvT9/Brocasito-exclusivo-no-Spotuai-1.png" alt="Plano Family" />
                    <Card.Body>
                        <Card.Title>Plano Family</Card.Title>
                        <Card.Text className="plan-text">
                            Um plano ideal para a família! Até 6 contas individuais, cada uma com playlists personalizadas e sem anúncios.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="original-price">De: R$ 30,00</ListGroup.Item>
                        <ListGroup.Item className="discount-price">Por: R$ 15,00</ListGroup.Item>
                        <ListGroup.Item>Perfis individuais para cada membro</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="/planos" className="subscribe-link">Assinar</Card.Link>
                    </Card.Body>
                </Card>

                {/* Plano Duo */}
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src="https://i.ibb.co/gvXC2r7/Brocasito-exclusivo-no-Spotuai-2.png" alt="Plano Duo" />
                    <Card.Body>
                        <Card.Title>Plano Duo</Card.Title>
                        <Card.Text className="plan-text">
                            Pensado para casais ou amigos! Duas contas premium por um preço reduzido, com playlists e benefícios individuais.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="original-price">De: R$ 20,00</ListGroup.Item>
                        <ListGroup.Item className="discount-price">Por: R$ 10,00</ListGroup.Item>
                        <ListGroup.Item>Playlists compartilhadas e personalizadas</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="/planos" className="subscribe-link">Assinar</Card.Link>
                    </Card.Body>
                </Card>
            </div>

            {/* Exibindo as playlists cadastradas */}
            <div className="my-playlist">
                <h2>Minha Playlist</h2>
                {renderPlaylist()}
            </div>
        </Pagina>
    );
}
