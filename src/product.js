function Product ()
{
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
                                    <tr><td>001</td>
                                        <td><a className="imagee" href="../fancybox/im2.jpg"><img src="../fancybox/im2.jpg" className="img-fluid" /></a></td>
                                        <td>hp-2023</td>
                                        <td>Leptop</td>
                                        <td>50000</td>
                                        <td>5</td>
                                        <td>500 gm</td>
                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus voluptatem at blanditiis magnam illum quas accusantium</td>
                                        <td><button type className="btn btn-dark w-100 my-2">Delete</button><a className="btn btn-dark w-100" href="/editproduct">Edit</a></td>
                                    </tr></tbody>
                            </table></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Product ;