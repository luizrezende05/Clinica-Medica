import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Medicos() {
  const [crm, setCrm] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (crm === "123456" && senha === "senha123") {
      navigate("/dashboard-medico");
    } else {
      alert("CRM ou senha inválidos");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="CRM" value={crm} onChange={(e) => setCrm(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
}
