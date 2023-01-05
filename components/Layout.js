import { Children } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}
