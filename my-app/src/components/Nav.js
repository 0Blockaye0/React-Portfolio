function Nav(props) {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li className="active">
            <a id="navLink" href="/about">About</a>
          </li>
          <li>
            <a id="navLink" href="contact">Contact</a>
          </li>
          <li>
            <a id="navLink" href="portfolio">Portfolio</a>
          </li>
          <li>
            <a id="navLink" href="resume">Resume</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Nav;
