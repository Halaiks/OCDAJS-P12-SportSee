import { useState } from 'react';
import { DEFAULT_USER_ID } from '../../config';

function DataSelector({ onChange }) {
  const [source, setSource] = useState('api');
  const [userId, setUserId] = useState(DEFAULT_USER_ID);

  const handleApply = () => {
    onChange({ source, userId: Number(userId) || DEFAULT_USER_ID });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 12,
      right: 12,
      background: '#fafafa',
      border: '1px solid #ccc',
      borderRadius: 6,
      padding: '12px 20px',
      fontSize: 15,
      boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
      zIndex: 999,
      fontFamily: 'Arial, sans-serif',
      width: 200,
    }}>
      <h4 style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>Dev panel</h4>
      <div style={{ marginBottom: 10 }}>
        <label>
          <strong>Source:</strong>{' '}
          <select value={source} onChange={(e) => setSource(e.target.value)} style={{ fontSize: 14, padding: '4px' }}>
            <option value="api">API</option>
            <option value="mock">Mock</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          <strong>User ID:</strong>{' '}
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ width: 70, fontSize: 14, padding: '4px' }}
          />
        </label>
      </div>

      <button onClick={handleApply} style={{
        background: '#d32f2f',
        color: '#fff',
        border: 'none',
        borderRadius: 5,
        padding: '8px 14px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: 15,
        width: '100%',
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b71c1c'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#d32f2f'}
      >
        Appliquer
      </button>
    </div>
  );
}

export default DataSelector;