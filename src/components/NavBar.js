import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const sectionLinks = links.map((link) => {
    return (
      <a key={link} href={"#" + link}>
        {link}
      </a>
    );
  });

  return <nav>{sectionLinks}</nav>;
}

export default NavBar;
