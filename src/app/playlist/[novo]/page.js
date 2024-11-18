"use client";  // Adicione esta linha no topo do arquivo

import React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { salvarMusica } from '@/services/cadastrar-musica';
import "@/app/css/playlist.css";

export default function NovoCadastro() {
    const router = useRouter();

    function handleSalvar(dados) {
        salvarMusica(dados);
        router.push('/playlist');
    }

    return (
        <div className="form-container">
            <h1>Cadastrar Música</h1>
            <Formik
                initialValues={{ cantor: '', musica: '', foto: '' }}
                onSubmit={handleSalvar}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="cantor">
                            <Form.Label>Cantor</Form.Label>
                            <Form.Control
                                type="text"
                                name="cantor"
                                value={values.cantor}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="musica">
                            <Form.Label>Música</Form.Label>
                            <Form.Control
                                type="text"
                                name="musica"
                                value={values.musica}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="foto">
                            <Form.Label>Foto da Capa (URL)</Form.Label>
                            <Form.Control
                                type="text"
                                name="foto"
                                value={values.foto}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <div className="button-group">
                            <Button type="submit" variant="success">
                                Salvar
                            </Button>
                            <Button variant="danger" onClick={() => router.push('/playlist')}>
                                Cancelar
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
