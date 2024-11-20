import React from 'react';
import { Button } from 'react-bootstrap';

export default function EditButton({ onEdit }) {
    return (
        <Button variant="warning" onClick={onEdit}>
            Editar
        </Button>
    );
}
