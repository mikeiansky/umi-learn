import styles from './index.less';
import {useEffect, useState} from "react";
import Nav from "@/layouts/Nav";
import Menu from "@/layouts/Menu";

export default function IndexPage() {

  console.log("hello world");

  const [ content, setContent ] = useState("hello world");

  fetch("/api/campus/job/stats")
    .then(res => res.json())
    .then(data => setContent(JSON.stringify(data)))

  return (

    <div>
      <Nav />

      {/*<h1 className={styles.title}>Page index</h1>*/}
      <div style={{
        marginTop: "100px",
      }}>
        <Menu/>
        <div style={{
          height: "1000px",
        }}>
          {content}
        </div>
      </div>
    </div>
  );
}
