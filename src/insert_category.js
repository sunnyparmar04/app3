function InsertCategory ()
{
    return(
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <div className="card card shadow">
                <div className="card-heder bg-dark text-light">
                  <h3 className="mx-3">Insert New Catogery</h3>
                </div>
                <form>
                  <div className="card-body">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label htmlFor="floatingInput"> Title</label>
                    </div>
                    <div>
                      <label htmlFor="photo" className="form-label ">Change Photo</label>
                      <input type="file" className="form-control" name="photo" id="photo" required />
                    </div>
                    <div className="cotainer">
                      <div className="row mb-2">
                        <legend className="col-form-label col-sm-1 ">Is It Live</legend>
                        <div className="col ">
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
                      </div>
                      <div className="mt-3">
                        <button type="submit" className="btn btn-dark text-light ">Save Change</button>
                        <button type="reset" className="btn btn-dark text-light ">Clear All</button>
                      </div>
                    </div>
                  </div></form>
              </div>
            </div>
          </div>
        </div>);
}
export default InsertCategory;