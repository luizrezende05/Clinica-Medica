import { Request, Response } from 'express';
import pool from '../config/db';

export const criarAgendamento = async (req: Request, res: Response) => {
  const { medico_id, paciente_id, data_hora, observacoes } = req.body;
  
  try {
    const result = await pool.query(
      `INSERT INTO agendamentos 
       (medico_id, paciente_id, data_hora, observacoes) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [medico_id, paciente_id, data_hora, observacoes]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar agendamento' });
  }
};

export const listarAgendamentos = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT a.*, m.nome as medico_nome, p.nome as paciente_nome
      FROM agendamentos a
      JOIN medicos m ON a.medico_id = m.id
      JOIN pacientes p ON a.paciente_id = p.id
      ORDER BY a.data_hora
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
};

export const atualizarStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  
  try {
    const result = await pool.query(
      `UPDATE agendamentos SET status = $1 
       WHERE id = $2 RETURNING *`,
      [status, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar agendamento' });
  }
};