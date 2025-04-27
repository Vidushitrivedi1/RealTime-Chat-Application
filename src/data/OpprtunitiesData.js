import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import opportunitiesData from '../data/OpportunitiesData';

function Opportunities() {
  const navigate = useNavigate();
  const [disability, setDisability] = useState('');
  const [interest, setInterest] = useState('');
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const storedDisability = localStorage.getItem('userDisability');
    const storedInterest = localStorage.getItem('userInterest');

    setDisability(storedDisability || '');
    setInterest(storedInterest || '');

    if (storedDisability && storedInterest) {
      const data = opportunitiesData[storedDisability]?.[storedInterest] || [];
      setOpportunities(data);
    }
  }, []);

  const handleGoToChat = () => {
    navigate('/community-chat');
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#fff8f0', minHeight: '100vh' }}>
      <h1 style={{
        textAlign: 'center',
        color: '#0d47a1', // Royal Blue
        fontFamily: "'Merriweather', serif",
        fontSize: '36px',
        marginBottom: '10px'
      }}>
        🌟 Aarambh Niyati 🌟
      </h1>

      <h2 style={{
        textAlign: 'center',
        color: '#e65100', // Deep Saffron
        fontFamily: "'Merriweather', serif",
        fontSize: '24px',
        marginBottom: '40px'
      }}>
        Opportunities Tailored for You
      </h2>

      {disability && interest ? (
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#1b5e20', marginBottom: '10px' }}>
            Selected Disability: <span style={{ color: '#bf360c' }}>{disability}</span>
          </h3>
          <h3 style={{ color: '#1b5e20', marginBottom: '20px' }}>
            Area of Interest: <span style={{ color: '#bf360c' }}>{interest}</span>
          </h3>

          <h4 style={{ marginBottom: '15px', color: '#6a1b9a' }}>Available Opportunities:</h4>
          <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
            {opportunities.length > 0 ? (
              opportunities.map((opp, idx) => (
                <li key={idx} style={{ marginBottom: '8px', color: '#3e2723' }}>{opp}</li>
              ))
            ) : (
              <li style={{ color: '#b71c1c' }}>No opportunities available at the moment.</li>
            )}
          </ul>
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#c62828' }}>Please fill the enrollment form first.</p>
      )}

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={handleGoToChat}
          style={{
            padding: '12px 30px',
            backgroundColor: '#0d47a1', // Royal Blue
            color: 'white',
            fontSize: '18px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: "'Merriweather', serif",
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          Join Community Chat 🚀
        </button>
      </div>
    </div>
  );
}

export default Opportunities;
