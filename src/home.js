import { Component } from "react";
import { getApiBaseAddress } from "./commonFuncton";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Category: 0,
            Product: 0,
            Order: 0,
            User: 0
        };
    }
    componentDidMount(){
        var ApiAddress = getApiBaseAddress() + `summary.php`;
        fetch(ApiAddress).then((response) => response.json()).then((data) =>{
            console.log(data);
        }).catch((error) => {
          alert('oops its seems either you are disconnected with internet or server is not available');
        });
      }
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="card card shadow">
                            <div className="card-heder bg-dark">
                                <h3 className="mx-3 text-light">Dashbord</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="card shadow border-0 bg-dark">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col text-white ">
                                                        <span className="h6 font-semibold text-sm d-block mb-2">Category</span>
                                                        <span className="h3 font-bold mb-0">{this.state.Category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="card shadow border-0 bg-dark">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col text-white ">
                                                        <span className="h6 font-semibold text-sm d-block mb-2">Product</span>
                                                        <span className="h3 font-bold mb-0">{this.state.Product}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="card shadow border-0 bg-dark">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col text-white ">
                                                        <span className="h6 font-semibold text-sm d-block mb-2">Order</span>
                                                        <span className="h3 font-bold mb-0">{this.state.Order}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="card shadow border-0 bg-dark">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col text-white ">
                                                        <span className="h6 font-semibold text-sm d-block mb-2">User</span>
                                                        <span className="h3 font-bold mb-0">{this.state.User}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
