import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Agendamento } from '../types';

interface AgendaProps {
  agendamentos: Agendamento[];
}

const Agenda = ({ agendamentos }: AgendaProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Paciente</TableCell>
            <TableCell>Médico</TableCell>
            <TableCell>Data/Hora</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agendamentos.map((agendamento) => (
            <TableRow key={agendamento.id}>
              <TableCell>{agendamento.paciente_nome}</TableCell>
              <TableCell>{agendamento.medico_nome}</TableCell>
              <TableCell>{new Date(agendamento.data_hora).toLocaleString()}</TableCell>
              <TableCell>{agendamento.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Agenda;