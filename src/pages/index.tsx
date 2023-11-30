import styles from './index.less';
import {useEffect, useState} from "react";

export default function IndexPage() {

  console.log("hello world");

  const [ content, setContent ] = useState("hello world");

  fetch("/api/campus/job/stats")
    .then(res => res.json())
    .then(data => setContent(JSON.stringify(data)))

  return (

    <div>
      this is index page
    </div>
  );
}
