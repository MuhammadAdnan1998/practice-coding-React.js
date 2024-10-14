import '../App.css'

const Table = (props) => {
    let count = 0;
    return (
        <table >
            <thead>
                <tr>
                    <th scope='col'>S.No.</th>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                {props.students.map((x, i) => {
                    return (
                        <tr key={i}>
                            <td>{count++}</td>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.grade}</td></tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table;