function OrderDetail() {
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
                                        <td>001</td>
                                        <td>02-05-2023</td>
                                        <td>Sunny Parmar <br /> Vijayrajnagar Dery Road <br /> Bhavnagar</td>
                                        <td>50000</td>
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
export default OrderDetail;