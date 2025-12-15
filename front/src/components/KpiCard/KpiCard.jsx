import PropTypes from 'prop-types';
import './KpiCard.css';
import caloriesIcon from '../../assets/icons/energy.svg';
import proteinsIcon from '../../assets/icons/chicken.svg';
import carbsIcon from '../../assets/icons/apple.svg';
import fatIcon from '../../assets/icons/cheeseburger.svg';

const ICON_CONFIG = {
  Calories: {
    icon: caloriesIcon,
    bg: 'rgba(255, 0, 0, 0.07)',
  },
  Protéines: {
    icon: proteinsIcon,
    bg: 'rgba(74, 184, 255, 0.1)',
  },
  Glucides: {
    icon: carbsIcon,
    bg: 'rgba(249, 206, 35, 0.1)',
  },
  Lipides: {
    icon: fatIcon,
    bg: 'rgba(253, 81, 129, 0.1)',
  },
};

function KpiCard({ label, value }) {
  const config = ICON_CONFIG[label] || {};

  return (
    <div className="kpi">
      <div
        className="kpi__icon"
        style={config.bg ? { backgroundColor: config.bg } : null}
        aria-hidden="true"
      >
<img
  src={config.icon}
  alt=""
  className="kpi__icon-img"
  aria-hidden="true"
/>      </div>

      <div className="kpi__content">
        <strong className="kpi__value">{value}</strong>
        <span className="kpi__label">{label}</span>
      </div>
    </div>
  );
}

KpiCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default KpiCard;