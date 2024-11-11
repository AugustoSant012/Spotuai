'use client';
import React from 'react';
import Pagina from '@/components/Pagina';
import '@/app/css/play.css';
import { Card, ListGroup, Tab, Tabs } from 'react-bootstrap';

export default function Spotuai() {
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
                <iframe
                    className="spotify-iframe"
                    src="https://open.spotify.com/embed/track/3cVG7cfDxVLZmNOs17aWTF?utm_source=generator&theme=0"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>

                <iframe
                    className="spotify-iframe"
                    src="https://open.spotify.com/embed/track/5jaqPYoLJjfJT92vQ7WXha?utm_source=generator&theme=0"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>

                <iframe
                    className="spotify-iframe"
                    src="https://open.spotify.com/embed/track/338horqJYhaeVjkiFXcVIh?utm_source=generator&theme=0"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>

                <iframe
                    className="spotify-iframe"
                    src="https://open.spotify.com/embed/track/4ES3qh8IU3tQfe4ZmZvWdi?utm_source=generator&theme=0"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>

            <div className='promocaotext'>
                <h1 className="discount-text">Desconto de 50% em todo o mês de Novembro!</h1>
            </div>

            <div className="card-container">
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src="https://i.ibb.co/StT60bx/Brocasito-exclusivo-no-Spotuai.png" alt="Plano PRO" />
                    <Card.Body>
                        <Card.Title>Plano PRO</Card.Title>
                        <Card.Text className="plan-text">
                            Aproveite milhões de músicas com acesso ilimitado e sem anúncios! O Plano PRO é perfeito para quem não quer interrupções.
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



            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Minha Playlist">
                    <div className="playlist">
                        <iframe className="listspotfy" src="https://open.spotify.com/embed/track/0d16iGBlngyLHsldWzvahM?utm_source=generator&theme=0" loading="lazy"></iframe>
                        <iframe className="listspotfy" src="https://open.spotify.com/embed/track/5CUH8hEmgqsfQ3jKTPJLdm?utm_source=generator&theme=0" loading="lazy"></iframe>
                        <iframe className="listspotfy" src="https://open.spotify.com/embed/track/5aDlgmz3RSR2FP5SqZuuzs?utm_source=generator&theme=0" loading="lazy"></iframe>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
        </Pagina>
    );
}
