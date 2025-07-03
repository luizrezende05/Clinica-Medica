// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  const dataAtual = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="bg-blue-600 flex items-center justify-between px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 bg-white rounded-full p-1" />
          <h1 className="text-xl font-semibold">Início</h1>
        </div>
        <button className="text-2xl">☰</button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-48 bg-white border-r">
          <div className="p-4 border-b text-center font-semibold text-gray-700">Principal</div>
          <nav className="flex flex-col px-4 mt-2 space-y-2 text-blue-600 font-medium">
            <Link to="/home" className="hover:underline">Início</Link>
            <Link to="/pacientes" className="hover:underline">Pacientes</Link>
            <Link to="/agendamento" className="hover:underline">Agenda</Link>
          </nav>
        </aside>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="flex items-center gap-4 mb-4">
            <img src="/logo.png" alt="Logo" className="w-20 h-20 rounded-full bg-white p-2 shadow" />
            <div>
              <p className="text-gray-600">{dataAtual}</p>
              <h2 className="text-2xl font-bold text-gray-800">Inova Saúde</h2>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-3">
            <div className="bg-gray-200 rounded px-4 py-2 flex items-center gap-2">
              <span className="text-blue-600">🔵</span> Pacientes cadastrados
            </div>
            <div className="bg-gray-300 rounded px-4 py-2 flex items-center gap-2">
              <span className="text-green-600">🟢</span> Agendamentos hoje
            </div>
            <div className="bg-gray-400 rounded px-4 py-2 flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Paciente"
                className="w-6 h-6 rounded-full"
              />
              Pacientes recentes
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
