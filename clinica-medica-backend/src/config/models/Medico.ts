// src/models/Medico.ts
import { Document, Model, Schema, model } from 'mongoose';

export interface IMedico {
  nome: string;
  especialidade: string;
  email: string;
  crm: string;
  telefone?: string;
  ativo?: boolean;
}

export interface IMedicoDocument extends IMedico, Document {
  created_at: Date;
  updated_at: Date;
}

export interface IMedicoModel extends Model<IMedicoDocument> {}

const MedicoSchema = new Schema<IMedicoDocument, IMedicoModel>(
  {
    nome: {
      type: String,
      required: [true, 'Nome é obrigatório'],
      trim: true,
    },
    especialidade: {
      type: String,
      required: [true, 'Especialidade é obrigatória'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email é obrigatório'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Por favor, insira um email válido'],
    },
    crm: {
      type: String,
      required: [true, 'CRM é obrigatório'],
      unique: true,
      trim: true,
    },
    telefone: {
      type: String,
      trim: true,
    },
    ativo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false,
  }
);

// Índices para melhorar performance nas buscas
MedicoSchema.index({ nome: 1, especialidade: 1 });

export const Medico = model<IMedicoDocument, IMedicoModel>('Medico', MedicoSchema);