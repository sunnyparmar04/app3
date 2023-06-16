
import React, { Component } from "react";
class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }
    componentDidMount() {
        console.log("component did mount called")
        var Apiaddress = "https://theeasylearnacademy.com/shop/ws/users.php"
        fetch(Apiaddress).then((response) => response.json()).then((data) => {
            console.log(data)
            var error = data[0]['error'];
            console.log(error);
            if (error != 'no') {
                alert('error');
            }
            else {
                var total = data[1]['total'];
                if (total = 0) {
                    alert('no category found');
                }
                else {
                    data.splice(0, 2);
                    this.setState({
                        user: data
                    })
                }
            }
        });
    }

    render() {
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
                                        {this.state.user.map((userdata) => {
                                            return (
                                                <tr>
                                                    <td>{userdata['id']}</td>
                                                    <td>{userdata['email']}</td>
                                                    <td>{userdata['mobile']}</td>
                                                    <td><a href='' className="btn btn-dark w-75 ">View order</a></td>
                                                </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Users;