import { useEffect, useState } from 'react';
import { DEFAULT_USER_ID } from './config';
import { useViewport } from './utils/Viewport';
import { loadUserBundle } from './services/dataProvider';
import Profile from './pages/Profile';

// Dev 
import DataSelector from './components/Dev/DataSelector';
function App() {
  const { isOk, min } = useViewport();
  const [bundle, setBundle] = useState(null);
  const [error, setError] = useState(null);
  // Dev
  const [params, setParams] = useState({ source: 'api', userId: 12 });

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setBundle(null);
    async function fetchData() {
      try {
        const data = await loadUserBundle(params.userId, params.source);
        if (!cancelled) {
          setBundle(data);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e);
        }
      }
    }
    fetchData();
    return () => {
      cancelled = true;
    };
  }, [params]);

  // Ecran trop petit
  if (!isOk) {
    return (
      <main style={{ padding: 24 }}>
        <h2>Fenêtre trop petite</h2>
        <p>Veuillez utiliser une résolution d’au moins {min.width}×{min.height}px.</p>
      </main>
    );
  }

  // Error avec DataSelector
  if (error) return (
    <>
      <DataSelector onChange={setParams} />
      <main style={{ padding: 24 }}>Erreur : {String(error)}</main>
    </>
  );
  if (!bundle) return (
    <>
      <DataSelector onChange={setParams} />
      <main style={{ padding: 24 }}>Chargement…</main>
    </>
  );

  // Page profil
  return (
    // Dev
    <>
      <DataSelector onChange={setParams} />
      <main>
        <Profile bundle={bundle} />
      </main>
    </>
  );
}

export default App;