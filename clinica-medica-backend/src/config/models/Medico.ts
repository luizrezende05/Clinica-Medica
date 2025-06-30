export interface Medico {
    id: number;
    nome: string;
    especialidade: string;
    email: string;
    telefone?: string;
    created_at?: Date;
    updated_at?: Date;
  }