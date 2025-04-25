import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnrollmentForm.css';

const disabilities = [
  'Blindness (अंधापन)', 'Low Vision (कम दृष्टि)', 'Leprosy Cured (कुष्ठ रोग ठीक हुआ)',
  'Hearing Impairment (श्रवण बाधित)', 'Locomotor Disability (गतिशीलता विकलांगता)',
  'Dwarfism (बौना पन)', 'Intellectual Disability (बौद्धिक विकलांगता)', 'Mental Illness (मानसिक बीमारी)',
  'Autism Spectrum Disorder (स्वलीनता स्पेक्ट्रम विकार)', 'Cerebral Palsy (सेरेब्रल पाल्सी)',
  'Muscular Dystrophy (मांसपेशीय अपक्षय)', 'Chronic Neurological Conditions (दीर्घकालिक तंत्रिका रोग)',
  'Multiple Sclerosis (एकाधिक स्क्लेरोसिस)', 'Speech and Language Disability (वाक् और भाषा विकलांगता)',
  'Thalassemia (थैलेसीमिया)', 'Hemophilia (हीमोफीलिया)', 'Sickle Cell Disease (सिकल सेल रोग)',
  'Multiple Disabilities (एकाधिक विकलांगताएँ)', 'Acid Attack Victims (तेज़ाब हमले के पीड़ित)',
  'Parkinson’s Disease (पार्किंसन रोग)', 'Learning Disabilities (अधिगम विकलांगताएँ)'
];

const interests = [
  'Sports (खेल)', 'Jobs (नौकरियाँ)', 'Scholarships (छात्रवृत्ति)'
];

export default function EnrollmentForm() {
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [disability, setDisability] = useState('');
  const [interest, setInterest] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { dob, gender, disability, interest };
    localStorage.setItem('userForm', JSON.stringify(formData));
    navigate('/opportunities');
  };

  return (
    <div className="enrollment-form-container">
      <h1>Aarambh Niyati</h1>
      <form onSubmit={handleSubmit}>

        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>

        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male (पुरुष)">Male (पुरुष)</option>
            <option value="Female (महिला)">Female (महिला)</option>
            <option value="Other (अन्य)">Other (अन्य)</option>
          </select>
        </label>

        <label>
          Disability Type:
          <select value={disability} onChange={(e) => setDisability(e.target.value)} required>
            <option value="">Select Disability</option>
            {disabilities.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </label>

        <label>
          Area of Interest:
          <select value={interest} onChange={(e) => setInterest(e.target.value)} required>
            <option value="">Select Interest</option>
            {interests.map((i, idx) => (
              <option key={idx} value={i}>{i}</option>
            ))}
          </select>
        </label>

        <button type="submit">🔍 Search Opportunities</button>

      </form>
    </div>
  );
}
