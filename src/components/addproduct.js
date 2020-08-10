import React from 'react';
import axios from "axios";

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            productid:'',
            productname:'',
            productprice:0,
            productquantity:0,
            productcategory:'',
            productbrand:''
            
        }
    }

    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productname: event.target.value})
    }

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productprice: event.target.value})
    }
    getQuantity=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productquantity: event.target.value})
    }

    getCategory=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productcategory: event.target.value})
    }
    getBrand=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productbrand: event.target.value})
    }
    getId=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productid: event.target.value})
    }

    addProduct=()=>{
        console.log('Add product via axios and post')
        let productRequestBody = {
            "id":this.state.productid,
            "name": this.state.productname,
            "price": this.state.productprice,
            "quantity": this.state.productquantity,
            "category": this.state.productcategory,
            "brand": this.state.productbrand
        }
        axios.post('http://localhost:3000/allproducts', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/allproducts')
                }, error=>{
                    console.error(error);
                })
    }

    render() { 
        return ( 
            <div>
            <h3>Add New Product!!!!</h3>
            <form>
                <label className="addformLabel">Id: </label>
                <input className="addformInput" type='text' id="productid" onChange={this.getId}></input>
                <br></br>
                <label className="addformLabel">Name: </label>
                <input  className="addformInput" type='text' id="productname" onChange={this.getName}></input>
                <br></br>
                <label className="addformLabel">Price: </label>
                <input  className="addformInput" type='number' id="productprice" onChange={this.getPrice}></input>
                <br></br>
                <label className="addformLabel">Quantity: </label>
                <input  className="addformInput" type='number' id="productquantity" onChange={this.getQuantity}></input>
                <br></br>
                <label className="addformLabel">Category: </label>
                <input className="addformInput" type='text' id="productcategory" onChange={this.getCategory}></input>
                <br></br>
                <label className="addformLabel">Brand: </label>
                <input className="addformInput" type='text' id="productbrand" onChange={this.getBrand}></input>
                <br></br>
                <button type="button" onClick={this.addProduct}>Add Product</button>
                <br></br>
            </form>
        </div>
         );
    }
}
 
export default AddProduct;