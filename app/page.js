import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";

export default function Home() {

  // this is a single line comment
  /*
  this is a
  mult-line comment
  */

  let linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl">CPRG306 Class Examples</h1>
      <p>Hello World!</p>
      <MyFirstComponent />
      <h2>Course Example Links</h2>
      <ul>
        <li><Link href="./week-2/" className={linkStyles}>Week 2 - Intro to React</Link> </li>
        <li><Link href="./week-3/objects/" className={linkStyles}>Week 3 - Objects</Link> </li>
        <li><Link href="./week-3/props/" className={linkStyles}>Week 3 - Props</Link> </li>
        <li><Link href="./week-4/functions/" className={linkStyles}>Week 4 - Functions</Link> </li>
        <li><Link href="./week-4/counter/" className={linkStyles}>Week 4 - Counter</Link> </li>
        <li><Link href="./week-5/" className={linkStyles}>Week 5 - Managed Form</Link> </li>
        <li><Link href="./week-6/arrays" className={linkStyles}>Week 6 - Array Manipulation</Link> </li>
        <li><Link href="./week-6/contact" className={linkStyles}>Week 6 - Handling Lists</Link> </li>
        <li><Link href="./week-7/" className={linkStyles}>Week 7 - Managing State</Link> </li>
        <li><Link href="./week-8/" className={linkStyles}>Week 8 - Fetching Data</Link> </li>
        <li><Link href="./week-9/" className={linkStyles}>Week 9 - Firebase Authentication</Link> </li>
        <li><Link href="./week-10/" className={linkStyles}>Week 10 - Cloud Firestore</Link> </li>
        <li><Link href="./week-12/part-1" className={linkStyles}>Week 12 - API Routes Part 1</Link> </li>
        <li><Link href="./week-12/part-2" className={linkStyles}>Week 12 - API Routes Part 2</Link> </li>
      </ul>
    </main>
  );
}
