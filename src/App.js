import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnrollmentForm from './EnrollmentForm';
import Opportunities from './Opportunities';
import ChatWindow from './ChatWindow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnrollmentForm />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/community-chat" element={<ChatWindow />} />
      </Routes>
    </Router>
  );
}

export default App;
