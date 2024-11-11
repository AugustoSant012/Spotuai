'use client'
import React from 'react';
import login from '@/app/css/Login.css';
import Link from 'next/link';

function Login() {
    return (
        <div className="login-container">
            <form>
                <div className='logo'>
                    <img 
                        src="https://icones.pro/wp-content/uploads/2021/04/logo-spotify-icone-png-violet.png"
                        alt="spotuai" 
                        width="30" 
                        height="30" 
                        className="d-inline-block align-top me-2"
                    />
                </div>

                <h2>Login</h2>

                <input type="text" placeholder="Usuário" required />
                <input type="password" placeholder="Senha" required />
                <Link href="/spotuai"> <button type="submit">Entrar</button></Link>
                <a href="#" className="link">Esqueceu sua senha?</a>
                <a href="/register" className="link">Criar Conta</a>
            </form>
        </div>
    );
}

export default Login;