import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, ListTodo, ChevronLeft, ChevronRight } from "lucide-react";
import "../css/Home.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const cards = [
    {
      title: "Publica tareas con Markdown",
      text: "Puedes escribir tus tareas con formato Markdown, agregar listas, títulos y más.",
    },
    {
      title: "Organiza tu vida",
      text: "Mantén todas tus tareas en un solo lugar, rápido y sencillo.",
    },
    {
      title: "Guarda tus preocupaciones",
      text: "Úsala como tú quieras.",
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-left">
          <ListTodo size={28} className="icon-red" />
          Todo List
        </div>

        <div className="navbar-buttons">
          <Link to="/login" className="btn-outline">
            <LogIn size={18} /> Iniciar Sesión
          </Link>

          <Link to="/signup" className="btn-red">
            <UserPlus size={18} /> Registrarse
          </Link>
        </div>

        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <Link to="/login" className="btn-outline">
            <LogIn size={18} /> Iniciar Sesión
          </Link>

          <Link to="/signup" className="btn-red">
            <UserPlus size={18} /> Registrarse
          </Link>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <h1>Bienvenido a Todo List</h1>
        <p>
          La plataforma perfecta para organizar tus tareas, escribir en Markdown y gestionar tu día a día.
        </p>
      </section>

      {/* CAROUSEL */}
      <section className="carousel-section">
        <h2>Características</h2>

        <div className="carousel">
          <div className="carousel-card">
            <h3>{cards[index].title}</h3>
            <p>{cards[index].text}</p>
          </div>

          <button onClick={prev} className="carousel-btn left">
            <ChevronLeft />
          </button>
          <button onClick={next} className="carousel-btn right">
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* EXTRA */}
      <section className="extra-section">
        <div className="extra-card">
          <h3>Rápido</h3>
          <p>Sistema liviano y optimizado para cargar al instante.</p>
        </div>
        <div className="extra-card">
          <h3>Seguro</h3>
          <p>Tus datos están protegidos con autenticación moderna.</p>
        </div>
        <div className="extra-card">
          <h3>Moderno</h3>
          <p>Interfaz elegante, minimalista y 100% responsive.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © Todo List 2025 — Todos los derechos reservados.
      </footer>
    </div>
  );
}
