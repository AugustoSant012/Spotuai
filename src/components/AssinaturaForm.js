'use client';
import React from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '@/app/css/compra.css'

export default function CompraForm() {
    // Validação com Yup
    const validationSchema = Yup.object({
        nome: Yup.string()
            .min(3, 'O nome deve ter pelo menos 3 caracteres')
            .required('O nome é obrigatório'),
        email: Yup.string()
            .email('Formato de email inválido')
            .required('O email é obrigatório'),
        plano: Yup.string()
            .required('O plano de compra é obrigatório'),
        pagamento: Yup.string()
            .required('A forma de pagamento é obrigatória'),
    });

    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            plano: '',
            pagamento: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form values', values);
            alert('Compra realizada com sucesso!');
            formik.resetForm();
        },
    });

    return (
        <Container className="gif-container mt-5">
            <Card className="card-container">
                <img
                    className="kkk"
                    src="https://icones.pro/wp-content/uploads/2021/04/logo-spotify-icone-png-violet.png"
                    width="60"
                    height="60"
                    alt="spotuai"
                />
                <Card.Body>
                    {formik.isSubmitting && <Alert variant="info">Enviando dados...</Alert>}
                    {formik.isSubmitSuccessful && !formik.isSubmitting && (
                        <Alert variant="success">Compra realizada com sucesso!</Alert>
                    )}
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group controlId="formNome" className="mb-3">
                            <Form.Label className="plan-text">Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                placeholder="Digite seu nome"
                                value={formik.values.nome}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.nome && formik.errors.nome}
                            />
                            {formik.touched.nome && formik.errors.nome && (
                                <Form.Control.Feedback type="invalid">{formik.errors.nome}</Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label className="plan-text">Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.email && formik.errors.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formPlano" className="mb-3">
                            <Form.Label className="plan-text">Plano de Compra</Form.Label>
                            <Form.Select
                                name="plano"
                                value={formik.values.plano}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.plano && formik.errors.plano}
                            >
                                <option value="">Selecione um plano</option>
                                <option value="pro">Plano PRO - R$7,50</option>
                                <option value="family">Plano Family - R$15,00</option>
                                <option value="duo">Plano Duo - R$10,00</option>
                            </Form.Select>
                            {formik.touched.plano && formik.errors.plano && (
                                <Form.Control.Feedback type="invalid">{formik.errors.plano}</Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formPagamento" className="mb-3">
                            <Form.Label className="plan-text">Forma de Pagamento</Form.Label>
                            <Form.Select
                                name="pagamento"
                                value={formik.values.pagamento}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.pagamento && formik.errors.pagamento}
                            >
                                <option value="">Selecione uma forma de pagamento</option>
                                <option value="cartao">Cartão de Crédito</option>
                                <option value="boleto">Boleto Bancário</option>
                                <option value="pix">PIX</option>
                            </Form.Select>
                            {formik.touched.pagamento && formik.errors.pagamento && (
                                <Form.Control.Feedback type="invalid">{formik.errors.pagamento}</Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="subscribe-link w-100"
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? 'Realizando Compra...' : 'Finalizar Compra'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
