import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aluno from "../pages/Aluno";
import Alunos from '../pages/Alunos';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';


export default function Rotas() {
  return (

    <Routes>
      <Route exact path="/" element={<Alunos />} />
      <Route exact path="/aluno/:id/edit" element={
        <PrivateRoute>
          <Aluno />

        </PrivateRoute>

      } />
      <Route exact path="/aluno/" element={
        <Aluno />
      } />

      <Route exact path="/aluno/" element={<PrivateRoute>
        <Aluno />
      </PrivateRoute>} />
      <Route exact path="/login/" element={<Login />} />

      <Route exact path="/register/" element={<Register />} />
    </Routes>

  );
};
