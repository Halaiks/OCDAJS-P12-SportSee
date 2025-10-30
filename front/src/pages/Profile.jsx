import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import KpiCard from '../components/KpiCard';


function Profile({ bundle }) {
  const { user, source, activity, average, performance } = bundle;

  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard__wrap">
        <Sidebar />

        <section className="profile">
          {/* Hero */}
          <header className="profile__hero">
            <h1>
              Bonjour <span style={{ color: '#FF0101' }}>{user.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            <small style={{ opacity: 0.6 }}>Data source: {source}</small>
          </header>

          {/* Grille principale : charts + KPI */}
          <div className="profile__grid">
            <div className="profile__charts">
              {/* Remplace progressivement ces placeholders par tes vrais charts Recharts */}
              <div className="chart placeholder">BarChart – Activity ({activity.sessions.length} pts)</div>
              <div className="row">
                <div className="chart placeholder">LineChart – Average ({average.sessions.length} pts)</div>
                <div className="chart placeholder">RadarChart – Performance ({performance.data.length} pts)</div>
                <div className="chart placeholder">RadialBarChart – Score ({Math.round(user.score * 100)}%)</div>
              </div>
            </div>

            <aside className="profile__kpis">
              {/* KPIs branchés sur user.keyData */}
              <KpiCard icon="🔥" label="Calories"   value={`${user.keyData.calorieCount}kCal`} />
              <KpiCard icon="🥩" label="Protéines"  value={`${user.keyData.proteinCount}g`} />
              <KpiCard icon="🍞" label="Glucides"   value={`${user.keyData.carbohydrateCount}g`} />
              <KpiCard icon="🧈" label="Lipides"    value={`${user.keyData.lipidCount}g`} />
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;