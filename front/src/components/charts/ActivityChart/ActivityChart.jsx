import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './ActivityChart.css';

function ActivityTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

const kg = payload[0]?.value;
const cal = payload[1]?.value;

return (
  <div className="activity-tooltip">
    <p>{kg}kg</p>
    <p>{cal}kCal</p>
  </div>
);
}

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

function ActivityChart({ sessions }) {
  return (
    <section className="activity-card">
      <h2 className="activity-card__title">Activité quotidienne</h2>
      <div className="activity-card__chart">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={sessions} barSize={7} barGap={8}>
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="#DEDEDE"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="dayLabel"
              tick={{ fill: '#9B9EAC', fontSize: 12 }}
              tickLine={false}
              stroke='#DEDEDE'
              strokeWidth={2}
              tickMargin={16}
            />
            <YAxis
              yAxisId="calories"
              hide
            />
            <YAxis
              yAxisId="kilogram"
              orientation="right"
              tickMargin={30}
              tick={{ fill: '#9B9EAC', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              domain={['dataMin-2', 'dataMax+1']}
              tickCount={3}
            />
            

            <Tooltip
              content={<ActivityTooltip />}
              cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
            />
<Bar
  name="Poids (kg)"
  dataKey="kilogram"
  yAxisId="kilogram"
  fill="#282D30"
  radius={[3, 3, 0, 0]}
/>

<Bar
  name="Calories brûlées (kCal)"
  dataKey="calories"
  yAxisId="calories"
  fill="#E60000"
  radius={[3, 3, 0, 0]}
/>
            

            <Legend
  verticalAlign="top"
  align="right"
  iconType="circle"
  iconSize={8}
  height={80}
  payload={[
    { value: 'Poids (kg)', type: 'circle', color: '#282D30' },
    { value: 'Calories brûlées (kCal)', type: 'circle', color: '#E60000' },
  ]}
/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

ActivityChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      dayLabel: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ActivityChart;