import React from 'react';

import styles from './index.scss';

export default function Nav() {
  localStorage.setItem('address', 'shenzhen');

  const navStyle = {
    width: '100%',
    height: '50px',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'inline-block',
    float: 'right',
  };

  const liStyle = {
    display: 'block',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    float: 'left',
    backgroundColor: '#f0f0f0',
  };

  return (
    <div className={styles.nav}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <a href="/account">个人入口</a>
        </li>
        <li style={liStyle}>
          <a href="/account">企业入口</a>
        </li>
      </ul>
    </div>
  );
}
