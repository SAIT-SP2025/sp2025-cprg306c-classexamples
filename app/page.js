import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";

export default function Home() {

  // this is a single line comment
  /*
  this is a
  mult-line comment
  */

  return (
    <main>
      <h1 className="text-3xl">CPRG306 Class Examples</h1>
      <p>Hello World!</p>
      <MyFirstComponent />
      <h2>Course Example Links</h2>
      <ul>
        <li> <Link href="./week-2/" className="text-cyan-600 underline hover:text-cyan-300">Week 2 - Intro to React</Link> </li>
      </ul>
    </main>
  );
}
