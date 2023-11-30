import React from 'react';

import styles from "./menu.module.scss";
const menu: React.FC = () => {

  // const menuStyle = {
  //   width: "100px",
  //   height: "700px",
  //   position: "fixed"
  // }

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
    <div className={styles.menuStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="/internship">实习</a></li>
        <li style={liStyle}><a href="/campus">校招</a></li>
        <li style={liStyle}><a href="/job">全职</a></li>
        <li style={liStyle}><a href="/tv">空宣</a></li>
        <li style={liStyle}><a href="/course">课程</a></li>
        <li style={liStyle}><a href="/knowledge">干货</a></li>
      </ul>
    </div>
  );
}

export default menu;
