
import React, { Component } from 'react';
import { json } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produts: []
        };
    }
    componentDidMount() {
        console.log("componentDidMount is called");
        var ApiAddress = ("http://theeasylearnacademy.com/shop/ws/product.php");
        // [{"error":"no"},{"total":6},{"id":"50","categoryid":"0","title":"hi","price":"34444","stock":"455","weight":"0","size":"","photo":"Screenshot_20190823-142153.jpg","detail":"it is are","islive":"1","isdeleted":"0"},{"id":"68","categoryid":"0","title":"dell","price":"120000","stock":"20","weight":"0","size":"","photo":"images.png","detail":"dell laptop","islive":"1","isdeleted":"0"},{"id":"69","categoryid":"0","title":"iam","price":"77","stock":"7","weight":"0","size":"","photo":"G.jpg","detail":"iam","islive":"1","isdeleted":"0"},{"id":"70","categoryid":"0","title":"heee","price":"10","stock":"10","weight":"0","size":"","photo":"G.jpg","detail":"dashlkdljff","islive":"1","isdeleted":"0"},{"id":"71","categoryid":"0","title":"bag","price":"299","stock":"100","weight":"0","size":"","photo":"81mmaolsY5L._UX522_.jpg","detail":"for boy","islive":"1","isdeleted":"0"},{"id":"74","categoryid":"0","title":"watch","price":"12500","stock":"11","weight":"0","size":"","photo":"right_arrow.png","detail":"test","islive":"1","isdeleted":"0"}]
        fetch(ApiAddress).then((response) => response.json()).then((data) => {
            data.splice(0, 2);
            this.setState({
                produts: data
            });
        })

    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="card card shadow">
                            <div className="card-header bg-dark text-light ">
                                <div className="row">
                                    <div className="col">
                                        <h3 >Product</h3>
                                    </div>
                                    <div className="col text-end"><a href="/insertproduct" className="btn btn-dark fw-bold btn-outline-light">Add
                                        New Product</a></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr><th width="3%">Id</th>
                                                <th width="10%">Photo</th>
                                                <th width="15%">Name</th>
                                                <th width="5%">Category</th>
                                                <th width="3%">Price</th>
                                                <th width="3%">Stock</th>
                                                <th width="3%">Weight</th>
                                                <th width="25%">Details</th>
                                                <th width="5%">Details</th>
                                            </tr></thead>
                                        <tbody>
                                            {this.state.produts.map((pdata)=>{

                                                return  (<tr>
                                                    <td>{pdata['id']}</td>
                                                    <td><a className="imagee" href="../fancybox/im2.jpg"><img src="../fancybox/im2.jpg" className="img-fluid" /></a></td>
                                                    <td>{pdata['title']}</td>
                                                    <td>{pdata['title']}</td>
                                                    <td>{pdata['price']}</td>
                                                    <td>{pdata['stock']}</td>
                                                    <td>{pdata['weight']}</td>
                                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus voluptatem at blanditiis magnam illum quas accusantium</td>
                                                    <td><button type className="btn btn-dark w-100 my-2">Delete</button><a className="btn btn-dark w-100" href="/editproduct">Edit</a></td>
                                                </tr>);
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
export default Product;