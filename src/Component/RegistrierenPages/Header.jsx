import { MdOutlineLogin } from "react-icons/md";
const Header = () => {
  return (
    <div class="header">
      <img
        href="/"
        src="https://paytec.de/wp-content/uploads/2022/03/paytec-logo-blue-black.jpg"
        alt=""
      />
      <div class="login-button">
        <a href="/">
          <MdOutlineLogin /> Login in
        </a>
      </div>
    </div>
  );
};

export default Header;
