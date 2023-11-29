import React from 'react';

const Menu: React.FC = () => {

  const menuStyle = {
    width: "100px",
    height: "700px",
    backgroundColor: "blue",
    position: "fixed"
  }

  return (
    <div style={menuStyle}>
      This is menu
    </div>
  );
}

export default Menu;
