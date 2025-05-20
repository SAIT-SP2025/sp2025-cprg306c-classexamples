import StudentComponent from "./student-component";
import StudentComponentNew from "./student-component-new";

export default function PropsPage() {

    let studentOne = {
        studentName: "Joe",
        studentAge: 24,
        hasGraduated: false,
        schedule: ["CPGR123", "CPRG456", "CPRG789", "CPRG306"],
        address: {
            street: "123 Main St.",
            city: "Calgary",
            province: "AB"
        }
    }

    let studentTwo = {
        studentName: "Frank",
        studentAge: 23,
        address: {
            city: "Edmonton"
        }
    }

    return (
        <main>
            <StudentComponent sName="Kevin" sAge="21" sCity="Edmonton" />
            <StudentComponent sName="Bob" sAge="26" sCity="Calgary" />
            <StudentComponent 
                sName={studentOne.studentName}
                sAge={studentOne.studentAge}
                sCity={studentOne.address.city}
            />
            <StudentComponentNew studentObj={studentOne} />
            <StudentComponentNew studentObj={studentTwo} />
        </main>
    );
}