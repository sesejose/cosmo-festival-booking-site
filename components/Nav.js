import Anchor from "./Anchor";
import dark_theme_logo from "../public/dark_theme_logo.png";
import Image from "next/image";
import Context from "./Context";
import { useContext } from "react";
import Link from "next/link";

export default function Nav() {
  const context = useContext(Context);
  return (
    <>
      <nav className="nav">
        <div className="logo">
          {/* <h3 className="white">Logo</h3> */}
          <Link className="nav-home" href={"/"} onClick={closeMenu}>
            <Image className="logo" src={dark_theme_logo} alt={""} width={"50"} height={"45"} priority sizes="(max-width: 700px) 100vw, 700px" />
          </Link>
        </div>
        <div className="icons-nav-container">
          <a className="tab-basket basket-icon" onClick={openBasket}>
            {/* <div className="basket-icon pink"> */}
            <div className="how-many">
              {/* <p>3</p> */}
              <p className="white">{context.cartReg.amount + context.cartVip.amount}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            {/* </div> */}
          </a>
          <a className="open" onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </a>
        </div>
        <div className="nav-container" id="menu">
          <ul>
            <li>
              <Link className="nav-home" href={"/"} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-tickets" href={"/tickets"} onClick={closeMenu}>
                Tickets
              </Link>
            </li>
            <li>
              <Link className="nav-lineup" href={"/lineup"} onClick={closeMenu}>
                Line Up
              </Link>
            </li>
            <li>
              <Link className="nav-accommodation" href={"/accommodation"} onClick={closeMenu}>
                Acomodation
              </Link>
            </li>
            <li>
              <Link className="nav-about" href={"/about"} onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
          <a className="close" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}

function closeMenu() {
  const menu = document.querySelector("#menu");
  const icon = document.querySelector(".open");
  const nav = document.querySelector(".nav");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  if ((icon.style.display = "none")) {
    icon.style.display = "flex";
  }
  if ((nav.style.backgroundColor = "transparent")) {
    nav.style.backgroundColor = "var(--black)";
  } else {
    nav.style.backgroundColor = "transparent";
  }
}

function openMenu() {
  const icon = document.querySelector(".open");
  const menu = document.querySelector("#menu");
  const nav = document.querySelector(".nav");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  if ((icon.style.display = "flex")) {
    icon.style.display = "none";
  }
  if ((nav.style.backgroundColor = "var(--black)")) {
    nav.style.backgroundColor = "transparent";
  } else {
    nav.style.backgroundColor = "var(--black)";
  }
}

function openBasket() {
  //   const tab = document.querySelector(".tab-basket");
  const basket = document.querySelector("#basket");
  if (basket.style.display === "flex") {
    basket.style.display = "none";
  } else {
    basket.style.display = "flex";
  }
}
