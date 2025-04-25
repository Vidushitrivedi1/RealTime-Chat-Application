import React, { useState } from 'react';
import Opportunities  from './Opportunities ';

const disabilities = Object.keys(Opportunities );
const interests = ['Jobs', 'Sports', 'Scholarships'];

function DisabilitySupportFinder({ onSelectDisability }) {
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [disability, setDisability] = useState('');
  const [interest, setInterest] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = () => {
    if (disability && interest) {
      setResults(Opportunities [disability][interest] || []);
    }
  };

  return (
    <div className="finder-container">
      <div className="form-group">
        <label>जन्म तिथि (Date of Birth):</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>

      <div className="form-group">
        <label>लिंग (Gender):</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">-- Select Gender --</option>
          <option value="male">पुरुष (Male)</option>
          <option value="female">महिला (Female)</option>
          <option value="other">अन्य (Other)</option>
        </select>
      </div>

      <div className="form-group">
        <label>विकलांगता चुनें (Select Disability):</label>
        <select value={disability} onChange={(e) => setDisability(e.target.value)}>
          <option value="">-- Choose Disability --</option>
          {disabilities.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>रुचि क्षेत्र (Area of Interest):</label>
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">-- Choose Interest --</option>
          {interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      <button className="btn-show" onClick={handleSubmit}>
        अवसर दिखाएं (Show Opportunities )
      </button>

      {results.length > 0 && (
        <div className="results">
          <h3>अवसर (Opportunities ):</h3>
          <ul>
            {results.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>
      )}

      {disability && (
        <div className="chat-access">
          <button className="btn-chat" onClick={() => onSelectDisability(disability)}>
            {disability} विकलांगता समुदाय से जुड़ें (Join {disability} Disability Chat)
          </button>
        </div>
      )}
    </div>
  );
}

export default DisabilitySupportFinder;
