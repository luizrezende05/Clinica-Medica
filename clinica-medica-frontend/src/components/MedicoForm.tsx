import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

interface MedicoFormProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const MedicoForm = ({ open, onClose, onSuccess }: MedicoFormProps) => {
  const [formData, setFormData] = React.useState({
    nome: '',
    especialidade: '',
    email: '',
    telefone: ''
  });

  const handleSubmit = () => {
    // Implemente a lógica de submit aqui
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Adicionar Médico</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nome"
          fullWidth
          value={formData.nome}
          onChange={(e) => setFormData({...formData, nome: e.target.value})}
        />
        <TextField
          margin="dense"
          label="Especialidade"
          fullWidth
          value={formData.especialidade}
          onChange={(e) => setFormData({...formData, especialidade: e.target.value})}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <TextField
          margin="dense"
          label="Telefone"
          fullWidth
          value={formData.telefone}
          onChange={(e) => setFormData({...formData, telefone: e.target.value})}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MedicoForm; // Exportação obrigatória