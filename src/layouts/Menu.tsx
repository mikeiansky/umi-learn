import React from 'react';

const Menu: React.FC = () => {

  const menuStyle = {
    width: "100px",
    height: "700px",
    position: "fixed"
  }

  const ulStyle = {
    listStyle: "none",
    paddingLeft: "0px",
  }

  const liStyle = {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "#f0f0f0",
  }

  return (
    <div style={menuStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a>实习</a></li>
        <li style={liStyle}><a>校招</a></li>
        <li style={liStyle}><a>空宣</a></li>
        <li style={liStyle}><a>全职</a></li>
        <li style={liStyle}><a>课程</a></li>
        <li style={liStyle}><a>干货</a></li>
      </ul>
    </div>
  );
}

export default Menu;
