import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import KpiCard from '../components/KpiCard/KpiCard';
import ActivityChart from '../components/charts/ActivityChart/ActivityChart';
import AverageSessionsChart from '../components/charts/AverageSessionsChart/AverageSessionsChart';
import PerformanceRadarChart from '../components/charts/PerformanceRadarChart/PerformanceRadarChart'
import ScoreChart from '../components/charts/ScoreChart/ScoreChart';



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

              <div className="chart chart--activity">
              <ActivityChart sessions={activity.sessions} />
            </div>
              <div className="row">
                <div className="chart">
   <AverageSessionsChart sessions={average.sessions} />
  </div>
 <div className="chart">
    <PerformanceRadarChart data={performance.data} />
  </div>
                <div className="chart">
  <ScoreChart score={user.score} />
</div>
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