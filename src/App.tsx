import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { Home } from './pages/Home';
import { Todos } from './pages/Todos';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;