import { ReactComponent as Hamburger } from "../assets/hamburger.svg";

export default function Header() {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between">
        <a href="/">
          <img src="/images/Logo.png" alt="Little Lemon Logo" width={225} />
        </a>
        <button className="py-4 pl-4 hidden bg-white md-block border-none">
          <Hamburger />
        </button>
        <nav className="md-hidden">
          <ul className="flex space-x-4 font-extrabold text-lg">
            <li>
              <a href="/home" className="link-black visited-black">
                HOME
              </a>
            </li>
            <li>
              <a href="/about" className="link-black visited-black">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/menu" className="link-black visited-black">
                MENU
              </a>
            </li>
            <li>
              <a href="/reservations" className="link-black visited-black">
                RESERVE
              </a>
            </li>
            <li>
              <a
                href="/order"
                className="link-black visited-black inline-block"
              >
                DELIVERY
              </a>
            </li>
            <li>
              <a href="/login" className="link-black visited-black">
                LOGIN
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
