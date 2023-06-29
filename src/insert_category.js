import axios from "axios";
import React, { Component } from "react";

class InsertCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  InsertCategory = (e) => {
    var ApiAddress = "https://www.theeasylearnacademy.com/shop/ws/insert_category.php";
    var form = new FormData();
    //name,filename,price,stock,detail (required) 
    form.append('name', this.state.tital);
    form.append('photo', this.state.photo);
    form.append('IsItlive', this.state.gridRadios);
    form.append('id', this.state.id);
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
                window.location = '/Category'
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
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card card shadow">
              <div className="card-heder bg-dark text-light">
                <h3 className="mx-3">Insert New Catogery</h3>
              </div>
              <form onSubmit={this.InsertCategory}>
                <div className="card-body">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="title" placeholder="title" name="title" onChange={(e) => this.ChangeValue(e)}/>
                    <label htmlFor="floatingInput"> Title</label>
                  </div>
                  <div>
                    <label htmlFor="photo" className="form-label ">Change Photo</label>
                    <input type="file" className="form-control" name="photo" id="photo" onChange={(e) => this.Changefile(e)} required />
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>);
  }
}
export default InsertCategory;