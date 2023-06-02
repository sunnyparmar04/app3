function Users() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="card card shadow">
                        <div className="card-heder bg-dark text-light">
                            <h3 className="mx-3">User Management</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-responsive table-striped">
                                <thead>
                                    <tr><th>Sr.No</th>
                                        <th>Email </th>
                                        <th>Mobile No</th>
                                        <th>View Orders</th>
                                    </tr></thead>
                                <tbody>
                                    <tr><td>001</td>
                                        <td>Pararsunny2222@gmail.com</td>
                                        <td>9909763447</td>
                                        <td><a href='' className="btn btn-dark w-75 ">View order</a></td>
                                    </tr></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Users;