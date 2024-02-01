import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Importera CSS-filen där vi kommer att definiera våra anpassade stilar

function RightForm() {
  const [formData, setFormData] = useState({ Name: '', Text: '', key: '' }); // 
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!formData.Name || !formData.Text || !formData.key) {
        alert('Alla fält är obligatoriska!');
        return;
      }

      const response = await axios.post('//rightEndpoint//data//com', formData);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponse({ status: 'Error', message: 'Ett fel uppstod ! ' });
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Name:</label>
        <input type="text" value={formData.Name} onChange={(e) => setFormData({ ...formData, Name: e.target.value })} />
      </div>
      <div className="input-container">
        <label>Plain Text:</label>
        <input type="text" value={formData.Text} onChange={(e) => setFormData({ ...formData, Text: e.target.value })} />
      </div>
      <div className="input-container">
        <label>Din nyckel number :</label>
        <input type="number" value={formData.key} onChange={(e) => setFormData({ ...formData, key: e.target.value })} />
      </div>
      <button type="submit">Skicka</button>
      {response && (
        <div className={`response ${response.status === 'Error' ? 'error' : 'success'}`}>
          <p>Status: {response.status}</p>
          <p>{response.message}</p>
        </div>
      )}
    </form>
  );
}

function LeftForm() {
  const [formData, setFormData] = useState({ Name: '', Text: '' });
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!formData.Name || !formData.Text) {
        alert('Alla fält är obligatoriska!');
        return;
      }

      const response = await axios.post('//leftEndpoint//data//com', formData);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponse({ status: 'Error', message: 'Ett fel uppstod ! ' });
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Name:</label>
        <input type="text" value={formData.Name} onChange={(e) => setFormData({ ...formData, Name: e.target.value })} />
      </div>
      <div className="input-container">
        <label>Cypher Text:</label>
        <input type="text" value={formData.Text} onChange={(e) => setFormData({ ...formData, Text: e.target.value })} />
      </div>
      <button type="submit">Skicka</button>
      {response && (
        <div className={`response ${response.status === 'Error' ? 'error' : 'success'}`}>
          <p>Status: {response.status}</p>
          <p>{response.message}</p>
        </div>
      )}
    </form>
  );
}

function Form() {
  return (
    <div className="form-container">
      <RightForm />
      <LeftForm />
    </div>
  );
}

export default Form;
