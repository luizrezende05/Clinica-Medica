// src/models/Paciente.ts
import { Document, Schema, model } from 'mongoose';

export interface IPaciente extends Document {
  nome: string;
  cpf: string;
  email: string;
  telefone?: string;
  data_nascimento?: Date;
  alergias?: string[];
  endereco?: {
    rua: string;
    numero: string;
    complemento?: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  created_at: Date;
  updated_at: Date;
}

const PacienteSchema = new Schema<IPaciente>(
  {
    nome: {
      type: String,
      required: [true, 'Nome é obrigatório'],
      trim: true,
      maxlength: [100, 'Nome não pode ter mais que 100 caracteres']
    },
    cpf: {
      type: String,
      required: [true, 'CPF é obrigatório'],
      unique: true,
      trim: true,
      match: [/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Por favor, insira um CPF válido']
    },
    email: {
      type: String,
      required: [true, 'Email é obrigatório'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Por favor, insira um email válido']
    },
    telefone: {
      type: String,
      trim: true,
      match: [/^\(\d{2}\) \d{4,5}\-\d{4}$/, 'Por favor, insira um telefone válido']
    },
    data_nascimento: {
      type: Date,
      validate: {
        validator: (value: Date) => value < new Date(),
        message: 'Data de nascimento deve ser no passado'
      }
    },
    alergias: {
      type: [String],
      default: []
    },
    endereco: {
      rua: { type: String, trim: true },
      numero: { type: String, trim: true },
      complemento: { type: String, trim: true },
      cidade: { type: String, trim: true },
      estado: { type: String, trim: true, maxlength: 2 },
      cep: { type: String, trim: true }
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false
  }
);

// Índice para buscas frequentes
PacienteSchema.index({ nome: 1, cpf: 1, email: 1 });

// Middleware para formatar CPF antes de salvar
PacienteSchema.pre<IPaciente>('save', function(next) {
  if (this.cpf) {
    this.cpf = this.cpf.replace(/[^\d]/g, ''); // Remove formatação
  }
  next();
});

export const Paciente = model<IPaciente>('Paciente', PacienteSchema);