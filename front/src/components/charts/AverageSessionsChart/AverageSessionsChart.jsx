import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import './AverageSessionsChart.css';

function AverageTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="avg-tooltip">
      <p>{payload[0].value} min</p>
    </div>
  );
}

AverageTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

function AverageSessionsChart({ sessions }) {
  console.log('sessions', sessions);
  return (
    <section className="avg-card average-sessions">
      <h3 className="average-sessions__title">
        Durée moyenne des <br />
        sessions
      </h3>

      <div className="average-sessions__chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sessions} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="avgLineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,1)" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="dayLabel"
              type="category"
              interval={0}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
              tickMargin={10}
              padding={{ left: 14, right: 14 }}
            />

            <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />

            <Tooltip
              content={<AverageTooltip />}
              cursor={false}
              wrapperStyle={{ outline: 'none' }}
              allowEscapeViewBox={{ x: true, y: true }}
            />

            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="url(#avgLineGradient)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                strokeWidth: 8,
                stroke: 'rgba(255,255,255,0.3)',
                fill: '#FFF',
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

AverageSessionsChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      dayLabel: PropTypes.string.isRequired,     // "L" "M" "M" ...
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AverageSessionsChart;