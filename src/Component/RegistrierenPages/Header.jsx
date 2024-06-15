import { MdOutlineLogin } from "react-icons/md";
const Header = () => {
  return (
    <header class="header">
      <img
        href="/"
        src="https://paytec.de/wp-content/uploads/2022/03/paytec-logo-blue-black.jpg"
      />
      <a href="/">
        <MdOutlineLogin />
        Login in
      </a>
    </header>
  );
};

export default Header;
