import React from 'react';
import Nav from "@/layouts/nav";
import Menu from "@/layouts/menu";


export default (props: any) => {

    const contentStyle = {
        width: "100%",
        backgroundColor: "green",
        marginLeft: "100px",
    }

    return (

        <div>
            <Nav/>
            <Menu/>
            {/*<Content/>*/}

            <div style={contentStyle}>
                {props.children}
            </div>


        </div>
    );
}
