import { Response } from 'express';

type ResponseData = {
  success: boolean;
  data?: any;
  error?: string;
};

export const responder = (
  res: Response,
  status: number,
  data?: any,
  error?: string
) => {
  const response: ResponseData = { success: status < 400 };
  if (data) response.data = data;
  if (error) response.error = error;
  res.status(status).json(response);
};