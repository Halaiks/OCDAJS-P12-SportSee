import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts';
import './ScoreChart.css';

function ScoreChart({ score }) {
  // score arrive entre 0 et 1 -> on le convertit en %
  const percent = Math.round(score * 100);

  const data = [
    {
      name: 'score',
      value: percent,
    },
  ];

  return (
    <section className="score-card">
      <h2 className="score-card__title">Score</h2>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={data}
          innerRadius="70%"
          outerRadius="80%"
          startAngle={90}
          endAngle={450}
        >
          {/* Axe angulaire 0–100 % */}
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />

          {/* Barre rouge + fond blanc en anneau */}
          <RadialBar
            dataKey="value"
            cornerRadius={50}
            fill="#FF0101"
            barSize={10}
            background={{ fill: '#FFFFFF' }}  // 👈 anneau blanc
          />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Texte centré */}
      <div className="score-card__center">
        <p className="score-card__value">{percent}%</p>
        <p className="score-card__label">
          de votre
          <br />
          objectif
        </p>
      </div>
    </section>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreChart;