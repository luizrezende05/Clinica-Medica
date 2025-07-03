import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pacientes() {
  const [clinica, setClinica] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [horario, setHorario] = useState("");
  const navigate = useNavigate();

  const handleAgendar = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Agendamento realizado com sucesso!");
  };

  return (
    <form onSubmit={handleAgendar}>
      <input type="text" placeholder="Nome da Clínica" value={clinica} onChange={(e) => setClinica(e.target.value)} />
      <input type="text" placeholder="Especialidade (opcional)" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} />
      <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />
      <button type="submit">Agendar</button>
    </form>
  );
}
