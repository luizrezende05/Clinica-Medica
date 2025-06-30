import { Request, Response } from 'express';
import pool from '../db';

export const listarMedicos = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM medicos ORDER BY nome');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar médicos' });
  }
};

export const criarMedico = async (req: Request, res: Response) => {
  const { nome, especialidade, email, telefone } = req.body;
  
  try {
    const result = await pool.query(
      `INSERT INTO medicos (nome, especialidade, email, telefone)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [nome, especialidade, email, telefone]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar médico' });
  }
};