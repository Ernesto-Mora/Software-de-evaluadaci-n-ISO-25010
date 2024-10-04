import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardAdminGeneral = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUsers = async () => {
      const response = await fetch('/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, [navigate]);

  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      setUsers(users.filter((user) => user.id !== userId));
    } else {
      alert('Error al eliminar el usuario');
    }
  };

  return (
    <div className="dashboard-admin-general">
      <h2>Panel de Control - Administrador General</h2>
      <h3>Lista de Usuarios</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.role})
            <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardAdminGeneral;
