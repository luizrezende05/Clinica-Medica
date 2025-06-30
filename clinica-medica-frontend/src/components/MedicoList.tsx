import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Medico } from '../types';

interface MedicoListProps {
  medicos: Medico[];
}

const MedicoList = ({ medicos }: MedicoListProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Especialidade</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medicos.map((medico) => (
            <TableRow key={medico.id}>
              <TableCell>{medico.nome}</TableCell>
              <TableCell>{medico.especialidade}</TableCell>
              <TableCell>{medico.email}</TableCell>
              <TableCell>{medico.telefone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MedicoList;