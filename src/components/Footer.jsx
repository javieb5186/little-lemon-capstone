export default function Footer() {
  return (
    <div className="bg-dark">
      <footer className="min-h-80">
        <nav>
          <ul className="flex flex-col sm-flex-row gap-y-8 justify-between">
            <li>
              <a href="/">
                <img
                  src="/images/footer-logo.png"
                  alt="Little Lemon Logo"
                  width={75}
                />
              </a>
            </li>
            <li className="space-y-4">
              <h6 className="text-lg text-secondary">Main</h6>
              <ul className="text-white space-y-4">
                <li>
                  <a href="/home" className="link-white visited-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="link-white visited-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/menu" className="link-white visited-white">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="/reservations" className="link-white visited-white">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="/order" className="link-white visited-white">
                    Order Online
                  </a>
                </li>
                <li>
                  <a href="/login" className="link-white visited-white">
                    Login
                  </a>
                </li>
              </ul>
            </li>
            <li className="space-y-4">
              <h6 className="text-lg text-secondary">Contact</h6>
              <ul className="text-white space-y-4">
                <li>
                  <a href="/address" className="link-white visited-white">
                    Address
                  </a>
                </li>
                <li>
                  <a href="/phone" className="link-white visited-white">
                    Phone Number
                  </a>
                </li>
                <li>
                  <a href="/email" className="link-white visited-white">
                    Email
                  </a>
                </li>
              </ul>
            </li>
            <li className="space-y-4">
              <h6 className="text-lg text-secondary">Social Media</h6>
              <ul className="space-y-4">
                <li>
                  <a href="/facebook" className="link-white visited-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/instagram" className="link-white visited-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/yelp" className="link-white visited-white">
                    Yelp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
