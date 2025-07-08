import Link from "next/link";


export default function MyFirstComponent({children}) {

    let a = 3;
    let b = 4;

    return(
        <div>
            <h3>My First Component</h3>
            {children}
            <Link href="https://www.sait.ca">SAIT Website</Link>
            <p>{a} added to {b} equals {a+b}</p>
        </div>
    );
}