import { Request, Response } from 'express';
import pool from '../config/db';

export const criarPaciente = async (req: Request, res: Response) => {
  const { nome, cpf, email, telefone, data_nascimento } = req.body;
  
  try {
    const result = await pool.query(
      `INSERT INTO pacientes (nome, cpf, email, telefone, data_nascimento)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [nome, cpf, email, telefone, data_nascimento]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar paciente' });
  }
};

export const listarPacientes = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM pacientes ORDER BY nome');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar pacientes' });
  }
};

export const buscarPacientePorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const result = await pool.query('SELECT * FROM pacientes WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar paciente' });
  }
};