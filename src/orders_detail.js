import { render } from "@testing-library/react";
import { Component } from "react";
import axios from 'axios'
class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            address1: '',
            address2: '',   
            city: '',
            pincode: '',
            mobile: '',
            orderid: ''
        }
    }
    componentDidMount() {
        var url = new URL(window.location.href);
        var CurrentPage = url.href;
        var position_of_last_slash = CurrentPage.lastIndexOf("/");
        var id = CurrentPage.substring(position_of_last_slash + 1);
        {
            var ApiAddress = `https://www.theeasylearnacademy.com/shop/ws/orders.php?id=${id}`;
            // var self = this;
            axios({
                method: 'get',
                url: ApiAddress,
                responseType: 'json'
            }).then((response) => {
                var data = response.data;
                console.log(data);
                var error = data[0]['error'];
                if (error != 'no') {
                    alert(error);
                }
                else {
                    var total = data[1]['total'];
                    if (total == 0) {
                        alert('no orders found');
                    }
                    else {
                        data.splice(0, 2); //remove first two object
                        this.setState({
                            orderid: data[0]['id'],
                            fullname: data[0]['fullname'],
                            address1: data[0]['address1'],
                            address2: data[0]['address2'],
                            city: data[0]['city'],
                            pincode: data[0]['pincode'],
                            amount: data[0]['amount'],
                        });
                        // console.log(data[1]);
                    }
                }
            });
        }
    }
   
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="card card shadow">
                            <div className="card-heder bg-dark text-light">
                                <h3 className="mx-3">Order management</h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-responsive table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th width="7%">Order No</th>
                                            <th width="15%">Order date</th>
                                            <th>Order Details</th>
                                            <th width="10%">AMount</th>
                                            <th>Status</th>
                                            <th width="10%">Payment Mode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.orderid}</td>
                                            <td>02-05-2023</td>
                                            <td>{this.state.fullname}  <br /> {this.state.address1} <br /> {this.state.address2}</td>
                                            <td>{this.state.amount}</td>
                                            <td>Confirmed</td>
                                            <td>Cash on delivery</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3>Order Items</h3>
                                <table className="table table-striped">
                                    <tbody><tr>
                                    </tr></tbody><thead>
                                        <tr className="bg-dark">
                                            <th className="text-white">Sr No</th>
                                            <th className="text-white">Name</th>
                                            <th className="text-end text-white">Price</th>
                                            <th className="text-end text-white">Quantity</th>
                                            <th className="text-end text-white">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td> HP Leptop</td>
                                            <td className="text-end">50000</td>
                                            <td className="text-end">1</td>
                                            <td className="text-end">50000</td>
                                        </tr>
                                        <tr>
                                            <td>002</td>
                                            <td width="20%">Dell Leptop</td>
                                            <td className="text-end">70000</td>
                                            <td className="text-end">1</td>
                                            <td className="text-end">70000</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}>Total</td>
                                            <td className="text-end">125000</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>
                                                <a target="_blank" href="/print-order" className="btn btn-dark w-100">Print</a>
                                            </td>
                                            <td colSpan={2}>
                                                <form>
                                                    <div className="row">
                                                        <d iv className="col">
                                                            <div className="form-floating">
                                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                                    <option selected>Select order status</option>
                                                                    <option value={1}>Confirmed</option>
                                                                    <option value={2}>Dispatched</option>
                                                                    <option value={3}>Received</option>
                                                                    <option value={4}>Canceled</option>
                                                                    <option value={5}>Return</option>
                                                                </select>
                                                                <label htmlFor="floatingSelect">Works with selects</label>
                                                            </div>
                                                        </d>
                                                        <div className="col">
                                                            <button type="button" className="btn btn-dark w-100">Change order status</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
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
export default OrderDetail;

// import React, { Component } from 'react'
// import axios from 'axios'
// class OrderDetail extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             fullname : '',
//             address1 : '',
//             address2 : '',
//             city : '',
//             pincode : '',
//             mobile : '',
//             orderid : '',
//         }
//     }
//     componentDidMount()
//     {
//         var url = new URL(window.location.href);
//         var CurrentPage = url.href;
//         var position_of_last_slash = CurrentPage.lastIndexOf("/");
//         var id = CurrentPage.substring(position_of_last_slash+1);
//         this.getOrder(id);
//         this.getOrderDetail(id);
//     }
//     getOrderDetail = (id) => {

//     }
//     getOrder = (id) => {
//         var ApiAddress = `https://www.theeasylearnacademy.com/shop/ws/orders.php?id=${id}`;
//         // var self = this;
//         axios({
//             method: 'get',
//             url: ApiAddress,
//             responseType: 'json'
//         }).then((response)=>{
//             var data = response.data;
//             console.log(data);
//             var error = data[0]['error'];
//             if(error !='no')
//             {
//                 alert(error);
//             }
//             else
//             {
//                 var total = data[1]['total'];
//                 if(total == 0)
//                 {
//                     alert('no orders found');
//                 }
//                 else
//                 {
//                     data.splice(0,2); //remove first two object
//                     this.setState({
//                         orderid : data[0]['id'],
//                         fullname : data[0]['fullname'],
//                         address1 : data[0]['address1'],
//                         address2 : data[0]['address2'],
//                         city : data[0]['city'],
//                         pincode : data[0]['pincode'],
//                         amount : data[0]['amount'],
//                     });
//                     // console.log(data[1]);
//                 }
//             }
//         });
//     }
//     render() {
//         return (
//             <div className="container mt-3">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card shadow">
//                             <div className="card-header text-bg-danger">
//                                 <h3>Order management</h3>
//                             </div>
//                             <div className="card-body">
//                                 <table className="table table-bordered table-striped">
//                                     <thead>
//                                         <tr>
//                                             <th width="5%">Order <br /> No</th>
//                                             <th width="10%">Order Date</th>
//                                             <th>Order Detail</th>
//                                             <th width="10%">Amount</th>
//                                             <th width="10%">Status</th>
//                                             <th width="10%">Payment <br /> Mode</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>{this.state.orderid}</td>
//                                             <td>24-05-2023</td>
//                                             <td>{this.state.fullname} <br />
//                                             {this.state.address1}<br />
//                                             {this.state.address2} <br />
//                                                 Contact No - 9662512857
//                                             </td>
//                                             <td>₹ {this.state.amount}</td>
//                                             <td>Confirmed</td>
//                                             <td>Cash on delivery</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                                 <h3 className="border-bottom">Order items</h3>
//                                 <table className="table table-striped">
//                                     <tbody><tr>
//                                     </tr></tbody><thead>
//                                         <tr className="bg-dark">
//                                             <th className="text-white">Sr No</th>
//                                             <th className="text-white">Name</th>
//                                             <th className="text-end text-white">Price</th>
//                                             <th className="text-end text-white">Quantity</th>
//                                             <th className="text-end text-white">Total</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>1</td>
//                                             <td><a href="product.html">Acer Laptop</a></td>
//                                             <td className="text-end">50000</td>
//                                             <td className="text-end">1</td>
//                                             <td className="text-end">50000</td>
//                                         </tr>
//                                         <tr>
//                                             <td>2</td>
//                                             <td><a href="product.html">Washing machine</a></td>
//                                             <td className="text-end">25000</td>
//                                             <td className="text-end">3</td>
//                                             <td className="text-end">75000</td>
//                                         </tr>
//                                         <tr>
//                                             <td colSpan={4}>Total</td>
//                                             <td className="text-end">125000</td>
//                                         </tr>
//                                         <tr>
//                                             <td colSpan={3}>
//                                                 <a target="_blank" href="print-order.html" className="btn btn-dark w-100">Print</a>
//                                             </td>
//                                             <td colSpan={2}>
//                                                 <form>
//                                                     <div className="row">
//                                                         <div className="col">
//                                                             <div className="form-floating">
//                                                                 <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
//                                                                     <option selected>Select order status</option>
//                                                                     <option value={1}>Confirmed</option>
//                                                                     <option value={2}>Dispatched</option>
//                                                                     <option value={3}>Received</option>
//                                                                     <option value={4}>Canceled</option>
//                                                                     <option value={5}>Return</option>
//                                                                 </select>
//                                                                 <label htmlFor="floatingSelect">Works with selects</label>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col">
//                                                             <button type="button" className="btn btn-info w-100">Change order status</button>
//                                                         </div>
//                                                     </div>
//                                                 </form>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }
// export default OrderDetail;