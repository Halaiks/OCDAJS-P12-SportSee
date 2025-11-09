import './Sidebar.css';

import icon1 from '../../assets/icons/icon1.svg';
import icon2 from '../../assets/icons/icon2.svg';
import icon3 from '../../assets/icons/icon3.svg';
import icon4 from '../../assets/icons/icon4.svg';
function Sidebar() {
  return (
    <aside className="sidebar" aria-label='Navigation secondaire'>
      <nav className="sidebar__icons" aria-label="Types d'activités">
      <ul>
        <li><a href="#" aria-label="Activité 1">
              <img src={icon1} alt="" />
            </a></li>
        <li><a href="#" aria-label="Activité 1">
              <img src={icon2} alt="" />
            </a></li>
        <li><a href="#" aria-label="Activité 1">
              <img src={icon3} alt="" />
            </a></li>
        <li><a href="#" aria-label="Activité 1">
              <img src={icon4} alt="" />
            </a></li>
      </ul>
      </nav>
      <p className="sidebar__copy">Copyright, SportSee 2025</p>
    </aside>
  );
}
export default Sidebar;