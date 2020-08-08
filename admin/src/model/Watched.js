class Watched extends React.Component {
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vid Order</th>
                        <th>Name</th>
                        <th>Path</th>
                        <th>Course</th>
                        <th>Guid</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.watched && this.props.watched.map(watch => {
                        return <tr key={watch.videoName}>
                            <td>{watch.watched}</td>
                            <td>{watch.cellNumber}</td>
                            <td>{watch.date}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}