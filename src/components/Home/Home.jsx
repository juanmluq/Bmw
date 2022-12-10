import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllProducts } from '../../redux/actions';
import ProductCard from '../ProductCard/ProductCard';
import style from './Home.module.css';
import { Link } from 'react-router-dom';



export class Home extends Component {
  componentDidMount(){
    this.props.getAllProducts()
  }
  
  render() {
    return (
      <div>
     <h2>Bmw E-Commerce</h2>
     <h4>Modelos</h4>
<div className={style.cards}>
       {
     this.props.products?.map (product => { 
      return (
        <fragment>
          <Link className={style.sacarsub} to={"/product/" + product.id}>
     <div >
      
     <ProductCard 
     id= {product.id}
     name= {product.name}
     price= {product.price}
     stock= {product.stock}
     image = {product.image}
     key={product.id}
    //  si quisiera enviar una clase podria hacerlo: classname= {style.proDetd} y en ProductCard deberia recibir: (id, name,price, stock, classname) y asi la puede usar
     />
     </div>
     </Link>
</fragment>
     )
  })}
     </div>
     </div>
     )
  }
}

export const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)
