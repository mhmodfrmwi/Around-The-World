import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex items-center w-full shadow justify-between p-6 dark:bg-gray-800 bg-white max-[426px]:px-2">
      <Logo />
      <ThemeSwitcher />
    </header>
  );
};
export default Header;
