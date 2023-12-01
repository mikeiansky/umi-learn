import React from 'react';
import Nav from '@/layouts/nav';
import Menu from '@/layouts/menu';

export default function Index(props) {
  const contentStyle = {
    width: '100%',
    backgroundColor: 'green',
    marginLeft: '100px',
  };

  const menuStyle = {
    height: '100%',
  };

  return (
    <div>
      <Nav />
      <Menu />
      {/*<Content/>*/}

      <div style={contentStyle}>{props.children}</div>
    </div>
  );
}
