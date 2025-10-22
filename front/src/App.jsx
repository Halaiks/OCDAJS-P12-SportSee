import { useState, useEffect } from 'react';
import { getUserById } from './services/userService';
import { useViewport } from './utils/Viewport';

function App() {
  const [user, setUser] = useState(null);
  const { isOk, min } = useViewport();

  useEffect(() => {
    // Simule la récupération du user #12
    const fetchedUser = getUserById(12);
    setUser(fetchedUser);
  }, []);

 if (!isOk) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Fenêtre trop petite</h2>
        <p>
          Veuillez utiliser une résolution d’au moins {min.width}×{min.height} px.
        </p>
      </div>
    );
  }
  return (
    <div style={{ padding: '2rem' }}>
      {user ? (
        <>
          <h1>Bonjour <span style={{ color: '#FF0101' }}>{user.userInfos.firstName}</span></h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default App;