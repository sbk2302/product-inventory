import React from 'react';
import axios  from "axios";
import Navbar from './nav';
import ProductDetail from './productdetail';
import Imageproduct from './imageproduct';

class AllProducts extends React.Component {

    constructor(props){
        super(props)
        this.state={
            products:[],
            duplicateproducts:[],
            deleteSuccess: false,
            myid: 0,
            searchValue:''
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
                    this.setState({products: response.data,
                                   duplicateproducts:response.data})
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
              
                    <Imageproduct
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        profile={product.image}
                        category={product.category}
                        brand={product.brand}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                    ></Imageproduct>
                
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
    getSearch=(e)=>{
        let searchV = e.target.value
        if(searchV===''){
            this.getAllProducts()
        }
        this.setState({searchValue: searchV})
        console.log(searchV);
        let searchF = this.state.duplicateproducts.filter(product=>{
                                return (product.name.toLowerCase().match(searchV.toLowerCase())||(product.category.toLowerCase().match(searchV.toLowerCase())))
                            })
        console.log(searchF);    
        this.setState({products: searchF})                

    }
    
    render() { 
        return (
            <div> 
            <Navbar></Navbar>
            <div style={{marginTop: 2+'%'}}>
                  
                       <label>Search: </label>
                       <input type="text" value={this.state.searchValue} onChange={this.getSearch}></input>
                       <br></br>
                   </div>
            <table style={{marginLeft: 9 +'%',marginTop: 5 +'%'}}>
                <thead>
                    <tr>
                        <th className="column1">img</th>
                        <th className="column1">Id</th>
                        <th className="column2">Name</th>
                        <th className="column3">Price</th>
                        <th className="column4">Quantity</th>
                        <th className="column5">Category</th>
                        <th className="column6">Brand</th>
                        <th colSpan="2" className="column7">Action</th>
                </tr>
                </thead>
                
                    {this.renderAllProducts()}
                

            </table>
            </div>
         );
    }
}
 
export default AllProducts;