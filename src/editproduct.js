function EditProduct ()
{
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="card card shadow">
                        <div className="card-heder bg-dark text-light ">
                            <h3 className="mx-3">Edit Product</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-floating mt-2">
                                            <input type="text" className="form-control" id="Product tital" placeholder="Product tital" />
                                            <label htmlFor="Product tital">Edit tital</label>
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
                                        <input className="form-control" type="file" id="formFile" />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <div className="form-floating mt-2">
                                            <input type="number" className="form-control" id="Price" placeholder="Price" />
                                            <label htmlFor="Price">Price</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mt-2">
                                            <input type="number" className="form-control" id="stock" placeholder="stock" />
                                            <label htmlFor="stock">stock</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mt-2">
                                            <input type="number" className="form-control" id="weight" placeholder="weight" />
                                            <label htmlFor="weight">weight</label>
                                        </div>
                                    </div>
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
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ "height": "100px" }} defaultValue={""} />
                                            <label htmlFor="floatingTextarea">Comments</label>
                                        </div>
                                    </div>
                                    <div className="col"><button type="button" className="btn btn-primary w-100 mt-5">Save and
                                        change</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default EditProduct;