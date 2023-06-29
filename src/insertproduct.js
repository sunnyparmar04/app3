import React, { Component } from "react";
import axios from "axios";
class InsertProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    InsertProduct = (e) => {
        var ApiAddress = "https://www.theeasylearnacademy.com/shop/ws/insert_product.php";
        var form = new FormData();
        //name,filename,price,stock,detail (required) 
        form.append('name', this.state.title);
        form.append('filename', this.state.photo);
        form.append('price', this.state.price);
        form.append('stock', this.state.stock);
        form.append('detail', this.state.detail);
        axios({
            url: ApiAddress,
            method: 'post',
            resposetype: 'json',
            data: form
        }).then((response) => {
            var data = response.data;
            console.log(data);
            /*
                [{"error":"input is missing"}] 
                [{"error":"no"},{"success":"yes"},{"message":"product inserted"}]
            */

            var error = data[0]['error'];
            if (error != 'no')
                alert(error);
            else {
                var message = data[2]['message'];
                alert(message);
                var success = data[1]['success'];
                if (success == 'yes')
                    window.location = '/product'
            }
        });
        e.preventDefault();
    }
    ChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    Changefile = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0],
        });
    }
    render() {
        return (
            <div className="container mt-3" >
                <div className="row">
                    <div className="col-12">
                        <div className="card card shadow">
                            <div className="card-heder bg-dark text-light ">
                                <h3 className="mx-3">Insert Product</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.InsertProduct}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-floating mt-2">
                                                <input type="text" className="form-control" id="tital" placeholder="Product tital" name="title" onChange={(e) => this.ChangeValue(e)} />
                                                <label htmlFor="Product tital">Product tital</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mt-2">
                                                <select className="form-select" id="floatingSelect">
                                                    <option>Select Catogery</option>
                                                    <option value={1}>Lep Top</option>
                                                    <option value={2}>Mobile</option>
                                                    <option value={3}>TV</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col"><label htmlFor="formFile" className="form-label">Select Photo</label>
                                            <input className="form-control" type="file" id="File" name="photo" onChange={(e) => this.Changefile(e)} />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <div className="form-floating mt-2">
                                                <input type="number" className="form-control" id="Price" placeholder="Price" name="price" onChange={(e) => this.ChangeValue(e)} />
                                                <label htmlFor="Price">Price</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mt-2">
                                                <input type="number" className="form-control" id="stock" placeholder="stock" name="stock" onChange={(e) => this.ChangeValue(e)} />
                                                <label htmlFor="stock">stock</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mt-2">
                                                <input type="number" className="form-control" id="weight" placeholder="weight" name="weight" onChange={(e) => this.ChangeValue(e)} />
                                                <label htmlFor="weight">weight</label>
                                            </div></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col ">
                                            <legend className="col-form-label col-sm-3">Is It Live</legend>
                                            <div className="form-check form-check-inline mt-2">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" />
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    YES
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ "height": "100px" }} defaultValue={""} name="detail" onChange={(e) => this.ChangeValue(e)} />
                                                <label htmlFor="floatingTextarea">Comments</label>
                                            </div>
                                        </div>
                                        <div className="col"><button type="submit" className="btn btn-primary w-100 mt-5">Save</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default InsertProduct;