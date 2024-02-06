import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; 

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

  const handleClear = () => {
    setFormData({ Name: '', Text: '', key: '' });
    setResponse(null);
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <div className="input-container">
        <label>ID Name :</label>
        <input type="text" value={formData.Name} onChange={(e) => setFormData({ ...formData, Name: e.target.value })} />
      </div>
      <div className="input-container">
        <label>Plain Text :</label>
        <input type="text" value={formData.Text} onChange={(e) => setFormData({ ...formData, Text: e.target.value })} />
      </div>
      <div className="input-container">
        <label>Din nyckel number :</label>
        <input type="number" value={formData.key} onChange={(e) => setFormData({ ...formData, key: e.target.value })} />
      </div>
      <button type="submit">Skicka</button>
      <dir></dir>
      <button type="button" onClick={handleClear}>Clear</button>
 
      {response && (
        <div className={`response ${response.status === 'Error' ? 'error' : 'success'}`}>
          <p>Status för din request : {response.status}</p>
          <p>Svar Meddelandet : {response.message}</p>
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
      if (!formData.Name) {
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
  const handleClear = () => {
    setFormData({ Name: '', Text: '' });
    setResponse(null);
  };
  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <div className="input-container">
        <label>ID Name :</label>
        <input type="text" value={formData.Name} onChange={(e) => setFormData({ ...formData, Name: e.target.value })} />
      </div>
      <div className="input-container">
        <label>Cypher Text :</label>
        <input type="text" value={formData.Text} onChange={(e) => setFormData({ ...formData, Text: e.target.value })} />
      </div>
      <button type="submit">Skicka</button>
      <dir></dir>
      <button type="button" onClick={handleClear}>Clear</button>

      {response && (
        <div className={`response ${response.status === 'Error' ? 'error' : 'success'}`}>
          <p>Status för din request : {response.status}</p>
          <p>Svar Meddelandet : {response.message}</p>
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
