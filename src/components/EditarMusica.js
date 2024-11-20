"use client";

import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { salvarMusica } from '@/services/cadastrar-musica'; // Usa a função salvarMusica para atualizar
import "@/app/css/playlist.css";

// Define a validação dos campos
const validationSchema = Yup.object({
    cantor: Yup.string().required('O cantor é obrigatório'),
    musica: Yup.string().required('O nome da música é obrigatório'),
    foto: Yup.string().required('A foto da capa é obrigatória'),
    audio: Yup.mixed().required('O arquivo de música é obrigatório')
});

export default function EditarMusica({ musicaId }) {
    const [musica, setMusica] = useState(null);  // Estado para armazenar os dados da música
    const router = useRouter();

    // Função para carregar os dados da música para edição
    useEffect(() => {
        // Aqui, você vai buscar a música no localStorage ou API
        const dadosMusica = JSON.parse(localStorage.getItem('playlist'))?.find(m => m.id === musicaId);
        if (dadosMusica) {
            setMusica(dadosMusica); // Preenche o estado com os dados da música
        }
    }, [musicaId]);

    function handleSalvar(dados) {
        // Atualiza a música no localStorage ou onde for necessário
        const playlist = JSON.parse(localStorage.getItem('playlist')) || [];
        const playlistAtualizada = playlist.map(item =>
            item.id === dados.id ? dados : item // Substitui a música editada
        );
        localStorage.setItem('playlist', JSON.stringify(playlistAtualizada));
        router.push('/playlist');
    }

    if (!musica) {
        return <div>Carregando...</div>;  // Carrega os dados antes de renderizar o formulário
    }

    return (
        <div className="form-container">
            <h1>Editar Música</h1>
            <Formik
                initialValues={musica}  // Passa os dados da música para preencher o formulário
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // Processa os dados ao submeter
                    const reader = new FileReader();
                    reader.onload = () => {
                        const updatedValues = {
                            ...values,
                            audio: reader.result, // Atualiza o arquivo MP4 como base64
                        };
                        handleSalvar(updatedValues);
                    };

                    if (values.audio) {
                        reader.readAsDataURL(values.audio); // Lê o arquivo como base64
                    } else {
                        handleSalvar(values);
                    }

                    setSubmitting(false); // Desativa o carregamento após a submissão
                }}
            >
                {({ values, handleChange, handleSubmit, setFieldValue, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="cantor">
                            <Form.Label>Cantor</Form.Label>
                            <Form.Control
                                type="text"
                                name="cantor"
                                value={values.cantor}
                                onChange={handleChange}
                                isInvalid={touched.cantor && !!errors.cantor}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.cantor}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="musica">
                            <Form.Label>Música</Form.Label>
                            <Form.Control
                                type="text"
                                name="musica"
                                value={values.musica}
                                onChange={handleChange}
                                isInvalid={touched.musica && !!errors.musica}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.musica}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="foto">
                            <Form.Label>Foto da Capa</Form.Label>
                            <Form.Control
                                type="text"
                                name="foto"
                                value={values.foto}
                                onChange={handleChange}
                                isInvalid={touched.foto && !!errors.foto}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.foto}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="audio">
                            <Form.Label>Arquivo de Música (MP4)</Form.Label>
                            <Form.Control
                                type="file"
                                name="audio"
                                accept=".mp4"  // Aceita apenas MP4
                                onChange={(event) =>
                                    setFieldValue('audio', event.currentTarget.files[0])
                                }
                                isInvalid={touched.audio && !!errors.audio}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.audio}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="button-group">
                            <Button 
                                type="submit" 
                                variant="success" 
                                className="btn-custom-save"
                            >
                                Salvar
                            </Button>
                            <Button 
                                variant="danger" 
                                onClick={() => router.push('/playlist')}
                                className="btn-custom-cancel"
                            >
                                Cancelar
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
