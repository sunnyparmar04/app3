function Order ()
{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="card card shadow">
                        <div className="card-heder bg-dark text-light">
                            <h3 className="mx-3">User Management</h3>
                        </div>
                        <div className="card-body">
                            <br /><table className="table table-bordered table-responsive table-striped">
                                <thead>
                                    <tr><th width="5%">Sr.No</th>
                                        <th width="10%">Order Date</th>
                                        <th>Order Details</th>
                                        <th width="10%">Amount</th>
                                        <th width="10%">Status</th>
                                        <th width="10%">Paymet  MOde</th>
                                        <th width="15%">View Detail</th>
                                    </tr></thead>
                                <tbody><tr><td>001</td>
                                    <td>02-02-2023</td>
                                    <td>Sunny Parmar <br /> Vijayrajnagar Dery Road <br /> Bhavnagar </td>
                                    <td>50000</td>
                                    <td>Cash On Delivery</td>
                                    <td>Confirmed</td>
                                    <td><a href="/orders_detail" className="btn btn-dark">view orders</a></td>
                                </tr></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default Order;