export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img
                src="/images/footer-logo.png"
                alt="Little Lemon Logo"
                width={100}
              />
            </a>
          </li>
          <li>
            <h6>Main</h6>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/reservations">Reservations</a>
              </li>
              <li>
                <a href="/order">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </li>
          <li>
            <h6>Contact</h6>
            <ul>
              <li>
                <a href="/address">Address</a>
              </li>
              <li>
                <a href="/phone">Phone Number</a>
              </li>
              <li>
                <a href="/email">Email</a>
              </li>
            </ul>
          </li>
          <li>
            <h6>Social Media</h6>
            <ul>
              <li>
                <a href="/facebook">Facebook</a>
              </li>
              <li>
                <a href="/instagram">Instagram</a>
              </li>
              <li>
                <a href="/yelp">Yelp</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
