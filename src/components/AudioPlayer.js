import React from 'react';

export default function AudioPlayer({ src }) {
    return (
        <audio controls>
            <source src={src} type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
        </audio>
    );
}