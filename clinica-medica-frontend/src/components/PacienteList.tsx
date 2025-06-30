import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Paciente } from '../types';

interface PacienteListProps {
  pacientes: Paciente[];
}

const PacienteList = ({ pacientes }: PacienteListProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pacientes.map((paciente) => (
            <TableRow key={paciente.id}>
              <TableCell>{paciente.nome}</TableCell>
              <TableCell>{paciente.cpf}</TableCell>
              <TableCell>{paciente.email}</TableCell>
              <TableCell>{paciente.telefone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PacienteList;