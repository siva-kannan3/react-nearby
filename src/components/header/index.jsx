import { SelectDropdown } from "../select";

import "./index.css";

import logo from "./logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="BrowserStack's logo" width={48} height={48} />
      <div className="header__dropdown">
        <SelectDropdown />
      </div>
      <div className="header__profile">AG</div>
    </div>
  );
};
