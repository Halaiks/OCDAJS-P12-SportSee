import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Text,
} from 'recharts';
import './PerformanceRadarChart.css';

const LABEL_MAP = {
  cardio: 'Cardio',
  energy: 'Énergie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
};

function PerformanceRadarChart({ data }) {
  // On inverse l’ordre pour se rapprocher de la maquette
  const chartData = [...data].reverse();

  const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
  const raw = payload.value;
  const key = typeof raw === 'string' ? raw.toLowerCase() : String(raw).toLowerCase();
  const label = LABEL_MAP[key] || raw;

  return (
    <Text
      {...rest}
      y={y + (y - cy) / 10}
				x={x + (x - cx) / 100}
      fill="#FFFFFF"
      fontSize="0.75rem"
      verticalAnchor="middle"
    >
      
      {label}
    </Text>
  );
};

  return (
    <section className="perf-card">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={chartData}
          outerRadius="70%"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={renderPolarAngleAxis}
          />
          <PolarRadiusAxis
            tickCount={6}
            tick={false}
            axisLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

PerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PerformanceRadarChart;