class Users extends React.Component {
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Cell Number</th>
                        <th>Registered Courses</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users && this.props.users.map(user => {
                        return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.companyNames}</td>
                            <td>{user.cellNumber}</td>
                            <td>{user.registeredCourses}</td>
                            <td>{user.active}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}