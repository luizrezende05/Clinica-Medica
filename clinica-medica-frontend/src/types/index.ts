export interface Medico {
    id: number;
    nome: string;
    especialidade: string;
    email: string;
    telefone?: string;
  }
  
  export interface Paciente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone?: string;
    data_nascimento?: string;
  }
  
  export interface Agendamento {
    id: number;
    medico_id: number;
    paciente_id: number;
    data_hora: string;
    status: 'agendado' | 'cancelado' | 'realizado';
    medico_nome?: string;
    paciente_nome?: string;
  }