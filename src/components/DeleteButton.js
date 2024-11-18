import React from 'react';
import { Button } from 'react-bootstrap';

export default function DeleteButton({ onDelete }) {
    return (
        <Button variant="danger" onClick={onDelete}>
            Excluir
        </Button>
    );
}
