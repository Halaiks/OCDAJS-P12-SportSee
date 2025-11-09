import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import KpiCard from '../components/KpiCard/KpiCard';


function Profile({ bundle }) {
  const { user, source, activity, average, performance } = bundle;

  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard__wrap">
        <Sidebar />

        <section className="profile">

          <header className="profile__hero">
            <h1>
              Bonjour <span style={{ color: '#FF0101' }}>{user.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            <small style={{ opacity: 0.6 }}>Data source: {source}</small>
          </header>

          <div className="profile__grid">
            <div className="profile__charts">

              <div className="chart placeholder">BarChart – Activity ({activity.sessions.length})</div>
              <div className="row">
                <div className="chart placeholder">LineChart – Average ({average.sessions.length})</div>
                <div className="chart placeholder">RadarChart – Performance ({performance.data.length})</div>
                <div className="chart placeholder">RadialBarChart – Score ({Math.round(user.score * 100)}%)</div>
              </div>
            </div>

            <aside className="profile__kpis">
              <KpiCard label="Calories"   value={`${user.keyData.calorieCount}kCal`} />
              <KpiCard label="Protéines"  value={`${user.keyData.proteinCount}g`} />
              <KpiCard label="Glucides"   value={`${user.keyData.carbohydrateCount}g`} />
              <KpiCard label="Lipides"    value={`${user.keyData.lipidCount}g`} />
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;