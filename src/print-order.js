import { Component } from "react";
class PritOrder extends Component {
  print() {
    window.print();
  }
  render() {
    return (

      <div><table border={3} align="center" width="100%" cellPadding={5}>
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
        <table border={2} align="center" width="100%" cellPadding={5}>
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
              <td colSpan={5}><button className="print"
                onClick={this.print}>Print</button></td>
            </tr>
          </tbody>
        </table></div>
    );
  }
}
export default PritOrder;