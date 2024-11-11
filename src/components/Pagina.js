'use client';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import '@/app/css/navbar.css'; // Aqui, o import CSS não precisa ser armazenado em uma variável
import { FaRegUser } from "react-icons/fa";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

export default function Pagina({ children }) { // Adiciona 'children' como prop
    return (
        <div>
            {/* Navbar */}
            <Navbar className="navbar">
                <Container>
                    <div className="navbar-content">
                        <div className="links-container">
                            <Link href="/musicas" passHref>
                                <Nav.Link as="span" className="pini">Músicas</Nav.Link>
                            </Link>
                            <Navbar.Brand href="/spotuai">
                                <img className='imgic'
                                    src="https://icones.pro/wp-content/uploads/2021/04/logo-spotify-icone-png-violet.png"
                                    width="50"
                                    height="50"
                                    alt="spotuai"
                                />
                            </Navbar.Brand>
                            <Link href="/artistas" passHref>
                                <Nav.Link as="span" className="pini">Artistas</Nav.Link>
                            </Link>
                        </div>
                        <div className="icons-container">
                            <Link href="/login" passHref>
                                <FaRegUser className="icon" />
                            </Link>
                            <Link href="/register" passHref>
                                <HiOutlineArrowRightOnRectangle className="icon" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </Navbar>

            {/* Conteúdo da página */}
            <main>{children}</main> {/* Renderiza o conteúdo filho aqui */}
        </div>
    );
}
