import { Medico } from './Medico';
import { Paciente } from './Paciente';

export interface Agendamento {
  id: number;
  medico_id: number;
  paciente_id: number;
  data_hora: Date;
  status: 'agendado' | 'cancelado' | 'realizado';
  observacoes?: string;
  created_at?: Date;
  updated_at?: Date;
  
  // Para joins
  medico?: Medico;
  paciente?: Paciente;
}