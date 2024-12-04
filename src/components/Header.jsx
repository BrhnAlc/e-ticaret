import { useState } from "react";
import "../css/Header.css";
import { BsBasket2 } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }

    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img
          style={{ marginRight: "10px" }}
          className="logo"
          src="./src/image/logo.png"
          alt=""
        />
        <p className="logo-text">BURHAN A.Ş</p>
      </div>

      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Bir Şeyler Ara"
        />
        <div>
          {/* Temaya göre ikonları değiştirme */}
          {theme ? (
            <FaMoon className="icon"  onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
          <BsBasket2 className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;

