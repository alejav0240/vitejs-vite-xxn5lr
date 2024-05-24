import { useState } from 'react';

function Menu() {
  return (
    <>
      <aside className="menu">
        <ul className="menu-list">
          <li>
            <figure className="image is-64x64">
              <img
                className="is-rounded"
                src="https://png.pngtree.com/png-vector/20220817/ourlarge/pngtree-manager-icon-business-man-symbol-profile-vector-png-image_19530578.jpg"
              />
            </figure>
            <p className="title is-5">Username</p>
            <p className="subtitle is-5">Subject</p>
          </li>
          <li>
            <a className="is-active">Publicaciones</a>
          </li>
          <li>
            <ul className="menu-list">
              <li className="menu-label">
                <i className="fa fa-book" aria-hidden="true"></i>Libros
              </li>
              <li>
                <ul className="menu-list">
                  <li>
                    <a>Solicitudes</a>
                  </li>
                  <li>
                    <a>Rechazados</a>
                  </li>
                  <li>
                    <a>Aprobados</a>
                  </li>
                </ul>
              </li>
              <li className="menu-label">
                <i className="fa-solid fa-newspaper"></i>Articulos
              </li>
              <ul className="menu-list">
                <li>
                  <a>Solicitudes</a>
                </li>
                <li>
                  <a>Rechazados</a>
                </li>
                <li>
                  <a>Aprobados</a>
                </li>
              </ul>
              <li className="menu-label">
                <i className="fa-regular fa-calendar-days"></i>Eventos
              </li>
              <ul className="menu-list">
                <li>
                  <a>Publicados</a>
                </li>
                <li>
                  <a>Pasados</a>
                </li>
              </ul>
            </ul>
          </li>
          <li>
            <a className="is-active">
              <i className="fa-solid fa-user"></i>Usuarios
            </a>
          </li>
          <li>
            <ul className="menu-list">
              <li className="menu-label">
                <i className="fa-solid fa-user-tie"></i> Comite
              </li>
              <li>
                <ul className="menu-list">
                  <li>
                    <a>Miembros Activos</a>
                  </li>
                  <li>
                    <a>Miembros Inactivos</a>
                  </li>
                  <li>
                    <a>Nuevos Miembros</a>
                  </li>
                </ul>
              </li>
              <li className="menu-label">
                <i className="fa-solid fa-user"></i> Colaboradores
              </li>
              <ul className="menu-list">
                <li>
                  <a>Miembros Activos</a>
                </li>
                <li>
                  <a>Miembros Inactivos</a>
                </li>
                <li>
                  <a>Nuevos Miembros</a>
                </li>
              </ul>
              <li className="menu-label">
                <i className="fa-solid fa-graduation-cap"></i> Pasantes
              </li>
              <ul className="menu-list">
                <li>
                  <a>Miembros Activos</a>
                </li>
                <li>
                  <a>Miembros Inactivos</a>
                </li>
                <li>
                  <a>Nuevos Miembros</a>
                </li>
              </ul>
              <li className="menu-label">
                <i className="fa-solid fa-address-card"></i> Investigadores
              </li>
              <ul className="menu-list">
                <li>
                  <a>Miembros Activos</a>
                </li>
                <li>
                  <a>Miembros Inactivos</a>
                </li>
                <li>
                  <a>Nuevos Miembros</a>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Menu;
