import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Opportunities.css';

function Opportunities() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('enrollmentData')) || {};
  const { disability, interest } = data;

  const dummyResults = [
    `🚂 Govt Job in Railways for ${disability} / रेलवे में ${disability} के लिए सरकारी नौकरी`,
    `🎓 Scholarship for ${disability} students / ${disability} छात्रों के लिए छात्रवृत्ति`,
    `📚 ${interest} training program for ${disability} / ${disability} के लिए ${interest} प्रशिक्षण कार्यक्रम`
  ];

  return (
    <div className="opportunities-container">
      <h1>🌟 Aarambh Niyati 🌟</h1>
      <h2>Opportunities for {disability} / {disability} के लिए अवसर</h2>
      <ul>
        {dummyResults.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/community-chat')}>
        Join Community Chat / सामुदायिक चैट में शामिल हों
      </button>
    </div>
  );
}

export default Opportunities;
