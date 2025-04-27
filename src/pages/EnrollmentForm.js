import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EnrollmentForm() {
  const navigate = useNavigate();
  const [disability, setDisability] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDisability', disability);
    localStorage.setItem('userInterest', interest);
    navigate('/opportunities');
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#fff8f0', minHeight: '100vh' }}>
      <h1 style={{
        textAlign: 'center',
        color: '#0d47a1',
        fontFamily: "'Merriweather', serif",
        fontSize: '36px',
        marginBottom: '10px'
      }}>
        🌟 Aarambh Niyati 🌟
      </h1>

      <h2 style={{
        textAlign: 'center',
        color: '#e65100',
        fontFamily: "'Merriweather', serif",
        fontSize: '24px',
        marginBottom: '40px'
      }}>
        Enrollment Form / नामांकन फॉर्म
      </h2>

      <form 
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0px 4px 15px rgba(0,0,0,0.1)'
        }}
      >

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#1b5e20',
            fontSize: '18px'
          }}>
            Disability Type / विकलांगता प्रकार:
          </label>
          <select 
            value={disability} 
            onChange={(e) => setDisability(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          >
            <option value="">Select Disability / विकलांगता चुनें</option>
            {/* Saare options same as before */}
            <option value="blindness">Blindness (अंधापन)</option>
            <option value="lowVision">Low Vision (कम दृष्टि)</option>
            <option value="leprosy">Leprosy Cured (कुष्ठ रोग ठीक हुआ)</option>
            <option value="hearing">Hearing Impairment (श्रवण बाधित)</option>
            <option value="locomotor">Locomotor Disability (गतिशीलता विकलांगता)</option>
            <option value="dwarfism">Dwarfism (बौना पन)</option>
            <option value="intellectualDisability">Intellectual Disability (बौद्धिक विकलांगता)</option>
            <option value="mentalIllness">Mental Illness (मानसिक बीमारी)</option>
            <option value="autism">Autism Spectrum Disorder (स्वलीनता स्पेक्ट्रम विकार)</option>
            <option value="cerebralPalsy">Cerebral Palsy (सेरेब्रल पाल्सी)</option>
            <option value="muscularDystrophy">Muscular Dystrophy (मांसपेशीय अपक्षय)</option>
            <option value="chronicNeurological">Chronic Neurological Conditions (दीर्घकालिक तंत्रिका रोग)</option>
            <option value="multipleSclerosis">Multiple Sclerosis (एकाधिक स्क्लेरोसिस)</option>
            <option value="speechAndLanguageDisability">Speech and Language Disability (वाक् और भाषा विकलांगता)</option>
            <option value="thalassemia">Thalassemia (थैलेसीमिया)</option>
            <option value="hemophilia">Hemophilia (हीमोफीलिया)</option>
            <option value="sickleCellDisease">Sickle Cell Disease (सिकल सेल रोग)</option>
            <option value="multipleDisabilities">Multiple Disabilities (एकाधिक विकलांगताएँ)</option>
            <option value="acidAttackVictims">Acid Attack Victims (तेज़ाब हमले के पीड़ित)</option>
            <option value="parkinsonsDisease">Parkinson’s Disease (पार्किंसन रोग)</option>
            <option value="learningDisabilities">Learning Disabilities (अधिगम विकलांगताएँ)</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#1b5e20',
            fontSize: '18px'
          }}>
            Area of Interest / रुचि का क्षेत्र:
          </label>
          <select 
            value={interest} 
            onChange={(e) => setInterest(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          >
            <option value="">Select Interest / रुचि चुनें</option>
            <option value="Sports">Sports</option>
            <option value="Jobs">Jobs</option>
            <option value="Scholarships">Scholarships</option>
          </select>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            type="submit"
            style={{
              padding: '12px 30px',
              backgroundColor: '#0d47a1',
              color: 'white',
              fontSize: '18px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: "'Merriweather', serif",
              boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
            }}
          >
            Find Opportunities / अवसर खोजें 🚀
          </button>
        </div>

      </form>
    </div>
  );
}

export default EnrollmentForm;
