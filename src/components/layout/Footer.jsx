import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <section className="pie">
          <div className="pie-container">
            <div className="footer-row">
              <article className="footer-links">
                <h4>CONTACTENOS</h4>
                <ul>
                  <li>
                    <a href="#">+54 11 12345678</a>
                    <a href="#">Hacer una consulta</a>
                    <a href="#">Calle falsa 123,Bs As</a>
                    <a href="#">Lunes a Sabados 9:00hs a 20:00hs</a>
                  </li>
                </ul>
              </article>
              <article className="footer-links">
                <h4>INFORMACION UTIL</h4>
                <ul>
                  <li>
                    <a href="#">+54 11 12345678</a>
                    <a href="#">Hacer una consulta</a>
                    <a href="#">Calle falsa 123,Bs As</a>
                    <a href="#">Lunes a Sabados 9:00hs a 20:00hs</a>
                  </li>
                </ul>
              </article>
              <section className="footer-links">
                <h4>Redes sociales</h4>
                <article className="social-link">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </article>
              </section>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};
