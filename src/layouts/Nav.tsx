import React from 'react';

const Nav: React.FC = () => {

  localStorage.setItem("address", "shenzhen");

  const navStyle = {
    width: "100%",
    height: "50px",
  }

  const ulStyle = {
    listStyle: "none",
    display: "inline-block",
    float: "right",

  }

  const liStyle = {
    display: "block",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    float:"left",
    backgroundColor: "#f0f0f0",
  }

  return (
    <div style={navStyle}>

      <ul style={ulStyle}>
        <li style={liStyle}><a>个人入口</a></li>
        <li style={liStyle}><a>企业入口</a></li>
      </ul>

    </div>
  );
}

export default Nav;
