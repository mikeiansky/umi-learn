import styles from './index.less';
import {useEffect, useState} from "react";
import Nav from "@/layouts/Nav";
import Menu from "@/layouts/Menu";
import Content from "@/layouts/Content";

export default function IndexPage() {

  console.log("hello world");

  const [ content, setContent ] = useState("hello world");

  fetch("/api/campus/job/stats")
    .then(res => res.json())
    .then(data => setContent(JSON.stringify(data)))

  return (

    <div>
      <Nav/>
      <Menu/>
      <Content/>
    </div>
  );
}
