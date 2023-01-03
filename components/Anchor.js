import { useRouter } from "next/router";
//use router is a hook that allow us to make dinamic navigation

function Anchor({ children, href, className }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href); //this method pushes a new entry into the history stack, so when the user clicks the browser is taken to an specific URL.
  }
  //the anchor tag receibes the props className, children and href
  return (
    <a className={className} href={href} onClick={(handleClick, closeMenu)}>
      {children}
    </a>
  );
}

export default Anchor;

function closeMenu() {
  const menu = document.querySelector("#menu");
  const icon = document.querySelector(".open");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  if ((icon.style.display = "none")) {
    icon.style.display = "flex";
  }
}
