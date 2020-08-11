import React from 'react';
import axios from "axios";
import Navbar from './nav';

class EditProduct extends React.Component {

    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        //console.log(this.props.location.state.myid);
        this.state={
            name:'',
            price:0,
            quantity:0,
            category:'',
            brand:'',
            id:0
        }

    }

    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/allproducts/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        name: response.data.name,
                        price:response.data.price,
                        quantity:response.data.quantity,
                        category:response.data.category,
                        brand:response.data.brand,
                        id: response.data.id
                    })
                }, error=>{
                    console.error(error);
                })
        }
    }
    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})
    }

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({price: event.target.value})
    }
    getQuantity=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({quantity: event.target.value})
    }

    getCategory=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({category: event.target.value})
    }
    getBrand=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({brand: event.target.value})
    }

    editProduct=()=>{
        console.log('Edit product via axios and put')
        let productRequestBody = {
            "name":this.state.name,
            "price":this.state.price,
            "quantity":this.state.quantity,
            "category":this.state.category,
            "brand":this.state.brand,
            "id":this.state.id
        }
        axios.put('http://localhost:3000/allproducts/'+this.state.id, productRequestBody)
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
                <Navbar></Navbar>
            <h3>Edit Product!!!!</h3>
            <form>
                <label>Name: </label>
                <input type='text' id="productname"  value={this.state.name} onChange={this.getName}></input>
                <br></br>
                <label>Price: </label>
                <input type='number' id="productprice" value={this.state.price} onChange={this.getPrice}></input>
                <br></br>
                <label>Quantity: </label>
                <input type='number' id="productquantity" value={this.state.quantity} onChange={this.getQuantity}></input>
                <br></br>
                <label>Category: </label>
                <input type='text' id="productcategory" value={this.state.category} onChange={this.getCategory}></input>
                <br></br>
                <label>Brand: </label>
                <input type='text' id="productbrand" value={this.state.brand} onChange={this.getBrand}></input>
                <br></br>
                <button type="button" onClick={this.editProduct}>Update Product</button>
                <br></br>
            </form>
        </div>
        );
    }
}
 
export default EditProduct;