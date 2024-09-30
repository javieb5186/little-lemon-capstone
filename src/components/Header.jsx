export default function Header() {
  return (
    <header>
      <a href="/">
        <img src="/images/Logo.png" alt="Little Lemon Logo" width={200} />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/menu">MENU</a>
          </li>
          <li>
            <a href="/reservations">RESERVATIONS</a>
          </li>
          <li>
            <a href="/order">ORDER ONLINE</a>
          </li>
          <li>
            <a href="/login">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
