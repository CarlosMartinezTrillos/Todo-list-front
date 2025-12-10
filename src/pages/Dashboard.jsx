import { useEffect, useState } from "react";
import api from "../services/api";
import Header from "../components/Header"
import NoteEditor from "../components/NoteEditor";
import NoteList from "../components/NoteList";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes/");
      setNotes(res.data);
    } catch (err) {
      console.log(err);
      removeToken();
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <h1>Dashboard</h1>

      <div className="dashboard-content">
        <div className="note-editor">
          <NoteEditor fetchNotes={fetchNotes} />
        </div>

        <div className="note-list">
          <NoteList notes={notes} fetchNotes={fetchNotes} />
        </div>
      </div>
    </div>
  );

}