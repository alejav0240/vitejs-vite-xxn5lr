import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav
        className="navbar is-link has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="./index.php">
            <img
              src="https://seeklogo.com/images/G/gobierno-de-bolivia-logo-83644E0D6A-seeklogo.com.png"
              width="30"
              height="40"
            />
          </a>

          <a
            role="button"
            onClick={() => {
              setActive(!active);
            }}
            className={`navbar-burger burguer ${active && 'is-active'}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${active && 'is-active'}`}
        >
          <div className="navbar-start">
            <a className="navbar-item">
              <span className="icon-text">
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
                <span>Inicio</span>
              </span>
            </a>
            <a className="navbar-item">Libros</a>
            <a className="navbar-item">Articulos</a>
            <a className="navbar-item">Eventos</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item is-selected">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button has-background-link-15">
                  <strong>Registrarse</strong>
                </a>
                <a className="button is-light">Iniciar Sesión</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
