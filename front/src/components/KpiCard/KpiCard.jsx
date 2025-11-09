import PropTypes from 'prop-types';

function KpiCard({ icon, label, value }) {
  return (
    <div className="kpi">
      <div className="kpi__icon" aria-hidden>{icon}</div>
      <div className="kpi__content">
        <strong className="kpi__value">{value}</strong>
        <span className="kpi__label">{label}</span>
      </div>
    </div>
  );
}

KpiCard.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default KpiCard;