import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';
import { createAgendamento } from '../services/agendamentos';

interface AgendamentoFormProps {
  open: boolean;
  onClose: () => void;
  medicos: { id: number; nome: string }[];
  pacientes: { id: number; nome: string }[];
  onSuccess: () => void;
}

const AgendamentoForm = ({ open, onClose, medicos, pacientes, onSuccess }: AgendamentoFormProps) => {
  const [formData, setFormData] = useState({
    medico_id: '',
    paciente_id: '',
    data_hora: '',
  });

  const handleSubmit = async () => {
    try {
      await createAgendamento({
        ...formData,
        medico_id: Number(formData.medico_id),
        paciente_id: Number(formData.paciente_id),
      });
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Erro ao criar agendamento:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Novo Agendamento</DialogTitle>
      <DialogContent>
        <TextField
          select
          label="Médico"
          fullWidth
          margin="normal"
          value={formData.medico_id}
          onChange={(e) => setFormData({...formData, medico_id: e.target.value})}
        >
          {medicos.map((medico) => (
            <MenuItem key={medico.id} value={medico.id}>
              {medico.nome}
            </MenuItem>
          ))}
        </TextField>
        
        <TextField
          select
          label="Paciente"
          fullWidth
          margin="normal"
          value={formData.paciente_id}
          onChange={(e) => setFormData({...formData, paciente_id: e.target.value})}
        >
          {pacientes.map((paciente) => (
            <MenuItem key={paciente.id} value={paciente.id}>
              {paciente.nome}
            </MenuItem>
          ))}
        </TextField>
        
        <TextField
          label="Data e Hora"
          type="datetime-local"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={formData.data_hora}
          onChange={(e) => setFormData({...formData, data_hora: e.target.value})}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit}>Agendar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AgendamentoForm;