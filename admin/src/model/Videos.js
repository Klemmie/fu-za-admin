class Videos extends React.Component {
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
                    {this.props.videos && this.props.videos.map(video => {
                        return <tr key={video.vidOrder}>
                            <td>{video.name}</td>
                            <td>{video.path}</td>
                            <td>{video.course}</td>
                            <td>{video.guid}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}
