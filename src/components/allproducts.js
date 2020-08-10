import React from 'react';
import axios  from "axios";
import Navbar from './nav';
import ProductDetail from './productdetail';

class AllProducts extends React.Component {

    constructor(props){
        super(props)
        this.state={
            products:[],
            deleteSuccess: false,
            myid: 0
        }
    }

    componentWillMount(){
        this.getAllProducts()
    }

    getAllProducts=()=>{
        axios.get('http://localhost:3000/allproducts')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({products: response.data})
                    console.log(this.state.products);
                }, error=>{
                    console.error(error);
                })
    }

    deleteProductWithId=(id)=>{
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/allproducts/' + id)
                .then(response=>{
                     console.log(response)
                     //show deleteSuccess message
                     this.setState({deleteSuccess: true})
                     this.getAllProducts()
                     //remove deleteSuccess message after 2000 millisecond
                     //this.intializeState()
                }, error=>{
                    console.error(error)
                })
    }
    
    renderAllProducts=()=>{
        return this.state.products.map(product=>{
            return(
              
                    <ProductDetail
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        category={product.category}
                        brand={product.brand}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                    >
                    </ProductDetail>
                
            )
        })
    }

    editProductWithId=(id)=>{
        this.setState({myid: id})
        console.log('Edit product with id: ' + id);
        this.props.history.push({
                                    pathname: '/editproduct', 
                                    state: {myid: id}
                                })
    }
    
    render() { 
        return (
            <div> 
            <Navbar></Navbar>
            <table style={{marginLeft: 9 +'%'}}>
                <thead>
                    <tr>
                        <th className="column1">Id</th>
                        <th className="column2">Name</th>
                        <th className="column3">Price</th>
                        <th className="column4">Quantity</th>
                        <th className="column5">Category</th>
                        <th className="column6">Brand</th>
                        <th colSpan="2" className="column7">Action</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderAllProducts()}
                </tbody>

            </table>
            </div>
         );
    }
}
 
export default AllProducts;