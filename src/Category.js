import React, { Component } from 'react';
import { getApiBaseAddress } from './commonFuncton';
class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Categories: []
        };
    }
    componentDidMount() {
        console.log("component did mount is called");
        var ApiAddress = getApiBaseAddress()  + `category.php`;
        fetch(ApiAddress).then((response) => response.json()).then((data) => {
            console.log(data);
            // 0{"id":"99","title":"home & furniture","photo":"C:fakepathdownload (2).jpg"},
            // 1{"id":"91","title":"rutwik","photo":"C:fakepathcategory.png"},
            // 2{"id":"103","title":"Laptop","photo":"C:fakepathsigndivyakant.jpg"},
            // 3{"id":"102","title":"Electronics","photo":"C:fakepathimg-1.jpg"},
            // 4{"id":"97","title":"mobile","photo":"C:fakepathdownload (1).jpg"},
            // 5{"id":"98","title":"mobile","photo":"C:fakepathdownload (1).jpg"},
            // 6{"id":"85","title":"test","photo":"testphoto.jpg"},
            // {"id":"104","title":"furniture","photo":"C:fakepathdownload.jpg"},
            // {"id":"105","title":"diwali colors","photo":"C:fakepath\right_arrow.png"},
            // {"id":"81","title":"test","photo":"testphoto.jpg"},
            // {"id":"82","title":"test","photo":"testphoto.jpg"},
            // {"id":"79","title":"test","photo":"testphoto.jpg"},
            // {"id":"80","title":"test","photo":"testphoto.jpg"},
            // {"id":"106","title":"diwali colors","photo":"C:fakepath\right_arrow.png"}]
            var error = data[0]['error'];
            console.log(error);
            if (error != 'no') {
                alert('error');
            }
            else {
                var total = data[1]['total'];
                console.log(total);
                if (total = 0) {
                    alert('no category found');
                }
                else {
                    data.splice(0, 2);
                    this.setState({
                        Categories: data
                    });
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
                            <div className="card-header bg-dark text-light">
                                <div className="row">
                                    <div className="col">
                                        <h3>Categary</h3>
                                    </div>
                                    <div className="col text-end"> <a href="/insert_category" className="btn btn-dark fw-bold btn-outline-light ">Add
                                        New Category</a></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table table-bordered">
                                        <thead>
                                            <tr>
                                                <th width="10%">Id</th>
                                                <th width="25%">Photo</th>
                                                <th width="25%">Name</th>
                                                <th width="12%">Is It Live</th>
                                                <th width="12%">Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.Categories.map((category) => {
                                                return (<tr>
                                                    <td>{category['id']}</td>
                                                    <td><a className="im" href="../fancybox/im2.jpg"><img src="../fancybox/im2.jpg" className="img-fluid" /></a></td>
                                                    <td>{category['title']}</td>
                                                    <td>Yes</td>
                                                    <td><a href="EditCategory" className="btn btn-outline-dark ">Edit</a>
                                                        <button className="btn btn-outline-dark">Delete</button>
                                                    </td>
                                                </tr>)
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Category;