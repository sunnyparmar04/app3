class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Categories: []
        };
    }
    componentDidMount() {
        console.log("component did mount is called");
        var ApiAddress = ("https://theeasylearnacademy.com/shop/ws/category.php");
        fetch(ApiAddress).then((response) => response.json()).then((data) => {
            console.log(data);
            //  [
            //     0{"error":"no"},
            //     1{"total":14},
            //     2{"id":"99","title":"home & furniture","photo":"C:fakepathdownload (2).jpg"},
            //     3{"id":"91","title":"rutwik","photo":"C:fakepathcategory.png"},
            //     4{"id":"103","title":"Laptop","photo":"C:fakepathsigndivyakant.jpg"},
            //     5{"id":"102","title":"Electronics","photo":"C:fakepathimg-1.jpg"},
            //     6{"id":"97","title":"mobile","photo":"C:fakepathdownload (1).jpg"},
            //     7{"id":"98","title":"mobile","photo":"C:fakepathdownload (1).jpg"},
            //     8{"id":"85","title":"test","photo":"testphoto.jpg"},
            //     9{"id":"104","title":"furniture","photo":"C:fakepathdownload.jpg"},
            //     10{"id":"105","title":"diwali colors","photo":"C:fakepath\right_arrow.png"},
            //     11{"id":"81","title":"test","photo":"testphoto.jpg"},
            //     12{"id":"82","title":"test","photo":"testphoto.jpg"},
            //     13{"id":"79","title":"test","photo":"testphoto.jpg"},
            //     14{"id":"80","title":"test","photo":"testphoto.jpg"},
            //     15{"id":"106","title":"diwali colors","photo":"C:fakepath\right_arrow.png"}]
            var error = data[0]['error']
            console.log(error);
            if (error != 'no') {
                alert(error);
            }
            else {
                var total = data[1]['total'];
                console.log(total);
                if (total = 0) {
                    alert('no category found');
                }
                else {
                    data.splice(0, 2);
                    this.setState({
                        Categories: data
                    });
                }
            }
        });
    }
    <div>
    {this.state.Categories.map((pdata) => {

        return (
            <tr>
                <td>{pdata['id']}</td>
                <td><a className="imagee" href="../fancybox/im2.jpg"><img src="../fancybox/im2.jpg" className="img-fluid" /></a></td>
                <td>{pdata['title']}</td>
                <td>{pdata['title']}</td>
                <td>{pdata['price']}</td>
                <td>{pdata['stock']}</td>
                <td>{pdata['weight']}</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus voluptatem at blanditiis magnam illum quas accusantium</td>
                <td><button type className="btn btn-dark w-100 my-2">Delete</button><a className="btn btn-dark w-100" href="/editproduct">Edit</a></td>
            </tr>
        );
    })
    }
</div>
}

