import { Link } from "react-router-dom";
import logo from "/src/assets/react.svg";
function Logo() {
  return (
    <Link to={"/"} className="flex gap-3 items-center font-bold">
      <img width={24} height={28} src={logo} alt="" />
      around the world
    </Link>
  );
}
export default Logo;
