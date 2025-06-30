// src/models/Agendamento.ts
import { Document, Schema, model, Types } from 'mongoose';
import { IMedico } from './Medico';
import { IPaciente } from './Paciente';

export type StatusAgendamento = 'agendado' | 'cancelado' | 'realizado' | 'nao_compareceu';

export interface IAgendamento extends Document {
  medico: Types.ObjectId | IMedico;
  paciente: Types.ObjectId | IPaciente;
  data_hora: Date;
  duracao: number;
  status: StatusAgendamento;
  observacoes?: string;
  created_at: Date;
  updated_at: Date;
}

const AgendamentoSchema = new Schema<IAgendamento>(
  {
    medico: {
      type: Schema.Types.ObjectId,
      ref: 'Medico',
      required: [true, 'Médico é obrigatório']
    },
    paciente: {
      type: Schema.Types.ObjectId,
      ref: 'Paciente',
      required: [true, 'Paciente é obrigatório']
    },
    // ... (restante do schema permanece igual)
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false
  }
);

// Populate corrigido e tipado
AgendamentoSchema.pre<IAgendamento>(/^find/, function(next) {
  (this as any)
    .populate({
      path: 'medico',
      select: 'nome especialidade crm'
    })
    .populate({
      path: 'paciente',
      select: 'nome email telefone'
    });
  next();
});

// ... (restante do código permanece igual)

export const Agendamento = model<IAgendamento>('Agendamento', AgendamentoSchema);