import React from 'react';

export default function AudioPlayer({ src }) {
    if (!src) return null; 

    return (
        <audio controls style={{ width: '100%' }}>
            <source src={src} type="audio/mpeg" />
            Seu navegador não suporta o player de áudio.
        </audio>
    );
}
