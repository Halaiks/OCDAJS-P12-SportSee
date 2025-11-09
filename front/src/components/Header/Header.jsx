import './Header.css';
import logo from '../../assets/logo/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
      <img src={logo} alt="Logo SportSee" className="logo"></img>

      <nav className="nav" aria-label='Navigation principale'>
        <ul className='nav__list'>
          <li className='nav__item'>Accueil</li>
          <li className='nav__item'>Profil</li>
          <li className='nav__item'>Réglages</li>
          <li className='nav__item'>Communauté</li>
        </ul>
      </nav>
      </div>
    </header>
  );
}
export default Header;