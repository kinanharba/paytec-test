import option from "../option.png";

const NavBar = () => {
  return (
    <nav>
      <a href="/">
        <img
          class="logo-img"
          width={200}
          src="https://paytec.de/wp-content/uploads/2022/03/paytec-logo-blue-black.jpg"
          alt=""
        />
      </a>
      <img src={option} alt="" />
    </nav>
  );
};

export default NavBar;
