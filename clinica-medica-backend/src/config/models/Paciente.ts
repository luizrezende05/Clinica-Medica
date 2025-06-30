export interface Paciente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone?: string;
    data_nascimento?: Date;
    created_at?: Date;
    updated_at?: Date;
  }