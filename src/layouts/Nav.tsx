import React from 'react';

const Nav: React.FC = () => {

  // localStorage.setItem("", "");

  const navStyle = {
    width: "100%",
    height: "100px",
    backgroundColor: "red",
    position: "fixed",
  }

  return (
    <div style={navStyle}>
      This is nav
    </div>
  );
}

export default Nav;
