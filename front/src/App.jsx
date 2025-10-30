import { useEffect, useState } from 'react';
import { DEFAULT_USER_ID } from './config';
import { useViewport } from './utils/Viewport';
import { loadUserBundle } from './services/dataProvider';
import Profile from './pages/Profile';
function App() {
  const { isOk, min } = useViewport();
const [bundle, setBundle] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    loadUserBundle(DEFAULT_USER_ID)
      .then(setBundle)
      .catch((e) => setError(e));
  }, []);

  // ——— UI guard: écran trop petit
  if (!isOk) {
    return (
      <main style={{ padding: 24 }}>
        <h2>Fenêtre trop petite</h2>
        <p>Veuillez utiliser une résolution d’au moins {min.width}×{min.height}px.</p>
      </main>
    );
  }

  // ——— Loading / Error
  if (error) return <main style={{ padding: 24 }}>Erreur : {String(error)}</main>;
  if (!bundle) return <main style={{ padding: 24 }}>Chargement…</main>;

  // ——— Page profil
  return (
    <main>
      <Profile bundle={bundle} />
    </main>
  );
}

export default App;