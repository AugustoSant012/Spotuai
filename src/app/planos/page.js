'use client';
import React, { useState } from 'react';
import { Form, Button, Card, Container, Modal } from 'react-bootstrap';
import Link from 'next/link';
import '@/app/css/compra.css';

export default function CompraForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [plano, setPlano] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [showCartaoModal, setShowCartaoModal] = useState(false);
    const [showPixModal, setShowPixModal] = useState(false);
    const [showSucessoModal, setShowSucessoModal] = useState(false);
    const [numeroCartao, setNumeroCartao] = useState('');
    const [validadeCartao, setValidadeCartao] = useState('');
    const [cvv, setCvv] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');

    const handlePagamentoChange = (e) => {
        const selectedPagamento = e.target.value;
        setPagamento(selectedPagamento);
        
        if (selectedPagamento === 'cartao' || selectedPagamento === 'debito') {
            setShowCartaoModal(true);
            setShowPixModal(false);
        } else if (selectedPagamento === 'pix') {
            setShowPixModal(true);
            setShowCartaoModal(false);
        } else {
            setShowCartaoModal(false);
            setShowPixModal(false);
        }
    };

    const handleNumeroCartaoChange = (e) => {
        let value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
        setNumeroCartao(value);
    };

    const handleValidadeCartaoChange = (e) => {
        let value = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2').slice(0, 5);
        setValidadeCartao(value);
    };

    const handleCvvChange = (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 3);
        setCvv(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nome, email, plano, pagamento });
        setShowSucessoModal(true);
        setNome('');
        setEmail('');
        setPlano('');
        setPagamento('');
        setShowCartaoModal(false);
        setShowPixModal(false);
    };

    const planoValor = {
        pro: 'R$7,50',
        family: 'R$15,00',
        duo: 'R$10,00'
    };

    return (
        <Container className="gif-container mt-5">
            <Card className="card-container">
                <Link href="/spotuai">
                    <img 
                        className='kkk' 
                        src="https://icones.pro/wp-content/uploads/2021/04/logo-spotify-icone-png-violet.png"
                        width="60"
                        height="60"
                        alt="spotuai"
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
                <Card.Body>
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
                                onChange={handlePagamentoChange}
                                required
                            >
                                <option value="">Selecione uma forma de pagamento</option>
                                <option value="cartao">Cartão de Crédito</option>
                                <option value="debito">Cartão de Débito</option>
                                <option value="pix">PIX</option>
                            </Form.Select>
                        </Form.Group>

                        <Button 
                            type="submit" 
                            className="subscribe-link w-100" 
                            style={{ backgroundColor: 'purple', color: 'white', borderColor: 'purple' }}
                        >
                            Finalizar Compra
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            {/* Modal para Cartão de Crédito/Débito */}
            <Modal show={showCartaoModal} onHide={() => setShowCartaoModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Informações do Cartão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formNomeCartao" className="mb-3">
                        <Form.Label>Nome do Titular</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nome impresso no cartão"
                            value={nomeCartao}
                            onChange={(e) => setNomeCartao(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formNumeroCartao" className="mb-3">
                        <Form.Label>Número do Cartão</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            value={numeroCartao}
                            onChange={handleNumeroCartaoChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formValidadeCartao" className="mb-3">
                        <Form.Label>Data de Validade</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="MM/AA"
                            value={validadeCartao}
                            onChange={handleValidadeCartaoChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formCVV" className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="CVV"
                            value={cvv}
                            onChange={handleCvvChange}
                            required
                        />
                    </Form.Group>
                    <Button 
                        onClick={() => setShowCartaoModal(false)}
                        style={{ backgroundColor: 'purple', color: 'white', borderColor: 'purple' }}
                    >
                        Salvar
                    </Button>
                </Modal.Body>
            </Modal>

            {/* Modal para PIX */}
            <Modal show={showPixModal} onHide={() => setShowPixModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Pagamento via PIX</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h5>Valor do Plano: {planoValor[plano]}</h5>
                    <p>Escaneie o QR Code para realizar o pagamento:</p>
                    <img 
                        src="https://ih1.redbubble.net/image.1407992816.7934/st,small,507x507-pad,600x600,f8f8f8.jpg" 
                        alt="QR Code PIX" 
                        width="200"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={() => setShowPixModal(false)} 
                        style={{ backgroundColor: 'purple', color: 'white', borderColor: 'purple' }}
                    >
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de Sucesso */}
            <Modal show={showSucessoModal} onHide={() => setShowSucessoModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Compra Realizada com Sucesso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Obrigado por sua compra! Seu pedido foi realizado com sucesso.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={() => setShowSucessoModal(false)} 
                        style={{ backgroundColor: 'purple', color: 'white', borderColor: 'purple' }}
                    >
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
