'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import register from '@/app/css/Register.css';
import Link from 'next/link';

function Register() {

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(4, 'O nome de usuário deve ter pelo menos 4 caracteres')
            .required('O nome de usuário é obrigatório'),
        email: Yup.string()
            .email('Formato de email inválido')
            .required('O email é obrigatório'),
        password: Yup.string()
            .min(6, 'A senha deve ter pelo menos 6 caracteres')
            .required('A senha é obrigatória'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
            .required('Confirme a senha'),
    });


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form values', values);
            alert('Conta criada com sucesso!');
        },
    });

    return (
        <div className="register-container">
            <form onSubmit={formik.handleSubmit}>
                <div className='logo'>
                    <img 
                        src="https://icones.pro/wp-content/uploads/2021/04/logo-spotify-icone-png-violet.png"
                        alt="spotuai" 
                        width="30" 
                        height="30" 
                        className="d-inline-block align-top me-2"
                    />
                </div>

                <h2>Criar Conta</h2>

                <input
                    type="text"
                    name="username"
                    placeholder="Nome de Usuário"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div className="error">{formik.errors.username}</div>
                ) : null}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}

                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                ) : null}

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme a Senha"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="error">{formik.errors.confirmPassword}</div>
                ) : null}

               <Link href="/spotuai"> <button type="submit">Registrar</button></Link>
                <a href="/login" className="link">Já tem uma conta? Faça login</a>
            </form>
        </div>
    );
}



export default Register;
