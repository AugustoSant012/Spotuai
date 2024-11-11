'use client';
import React, { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import '@/app/css/compra.css'; // Certifique-se de criar e ajustar o caminho para o CSS

export default function CompraForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [plano, setPlano] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [sucesso, setSucesso] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            nome,
            email,
            plano,
            pagamento,
        });

        setSucesso(true);
        setNome('');
        setEmail('');
        setPlano('');
        setPagamento('');
    };

    return (
        <Container className="gif-container mt-5">
            <Card className="card-container">
                <img 
                    className='kkk' 
                    src="https://icones.pro/wp-content/uploads/2021/04/logo-spotify-icone-png-violet.png"
                    width="60"
                    height="60"
                    alt="spotuai"
                />
                <Card.Body>
                    {sucesso && <Alert variant="success">Compra realizada com sucesso!</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formNome" className="mb-3">
                            <Form.Label className="plan-text">Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label className="plan-text">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPlano" className="mb-3">
                            <Form.Label className="plan-text">Plano de Compra</Form.Label>
                            <Form.Select
                                value={plano}
                                onChange={(e) => setPlano(e.target.value)}
                                required
                            >
                                <option value="">Selecione um plano</option>
                                <option value="pro">Plano PRO - R$7,50</option>
                                <option value="family">Plano Family - R$15,00</option>
                                <option value="duo">Plano Duo - R$10,00</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formPagamento" className="mb-3">
                            <Form.Label className="plan-text">Forma de Pagamento</Form.Label>
                            <Form.Select
                                value={pagamento}
                                onChange={(e) => setPagamento(e.target.value)}
                                required
                            >
                                <option value="">Selecione uma forma de pagamento</option>
                                <option value="cartao">Cartão de Crédito</option>
                                <option value="boleto">Boleto Bancário</option>
                                <option value="pix">PIX</option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="subscribe-link w-100">
                            Finalizar Compra
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
