import React from 'react';


const Content: React.FC = () => {

  const contentStyle = {
    width: "100%",
    height: "1500px",
    backgroundColor: "green",
    marginLeft: "100px",
  }

  return (
    <div style={contentStyle}>
      This is content
    </div>
  );
}

export default Content;
