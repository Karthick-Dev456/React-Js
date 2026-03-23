import React from 'react'

const ListRendering = () => {

    const students = [
        { id: 1, name: "Arun Kumar", age: 20, course: "Computer Science", email: "arun.kumar@example.com" },
        { id: 2, name: "Priya Sharma", age: 21, course: "Information Technology", email: "priya.sharma@example.com" },
        { id: 3, name: "Rahul Verma", age: 22, course: "Electronics", email: "rahul.verma@example.com" },
        { id: 4, name: "Sneha Reddy", age: 20, course: "Mechanical", email: "sneha.reddy@example.com" },
        { id: 5, name: "Karthik Raj", age: 23, course: "Civil Engineering", email: "karthik.raj@example.com" },
        { id: 6, name: "Anjali Mehta", age: 21, course: "Biotechnology", email: "anjali.mehta@example.com" },
        { id: 7, name: "Vikram Singh", age: 24, course: "Electrical", email: "vikram.singh@example.com" },
        { id: 8, name: "Divya Nair", age: 22, course: "Data Science", email: "divya.nair@example.com" },
        { id: 9, name: "Rohit Das", age: 20, course: "Mathematics", email: "rohit.das@example.com" },
        { id: 10, name: "Meera Iyer", age: 23, course: "Physics", email: "meera.iyer@example.com" }
    ]

    const studentsList = students.map((student, index) => {
        return (
            <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>{student.email}</td>
            </tr>
        )
    })

    return (
        <div>
            <h2>List Rendering</h2>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsList}
                </tbody>
            </table>
        </div>
    )
}

export default ListRendering
