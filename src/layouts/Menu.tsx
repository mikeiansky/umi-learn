import React from 'react';

const Menu: React.FC = () => {

  const menuStyle = {
    width: "150px",
    height: "500px",
    backgroundColor: "blue",
    float: "left",
    display: "block",
    position: "fixed",
  }

  return (
    <div style={menuStyle}>
      This is menu
    </div>
  );
}

export default Menu;
