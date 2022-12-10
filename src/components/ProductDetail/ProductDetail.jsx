import React from 'react'
import { useDispatch } from 'react-redux';
import { PageHeader } from 'antd';
import { getProductDetail } from '../../redux/actions';
import { useSelector } from 'react-redux';
import style from './ProductDetail.module.css';
import asientos from "../../img-cp2/asientos2.jpg";
import interior from "../../img-cp2/interiordetail2.jpg"
import Motor from "../../img-cp2/motor2.jpg"
import caja from "../../img-cp2/caja2.jpg"



const ProductDetail = (props) => {
const dispatch = useDispatch();
const id= props.match.params.id;
React.useEffect(() => {
  dispatch(getProductDetail(id))
},[dispatch]);
const prod = useSelector ((state) => state.productDetail);

    return (
        <div className={style.proDet}>
          <div> < PageHeader classtitle="Atras" onBack={() => props.history.goBack()}/> </div> 
            <h7 className={style.alineartit}>DETALLES</h7>
            <br></br>
          <div class="card mb-3">
        <div className={style.cartados}>
<div class="card">
  <div class="mx-auto d-block">
    
    
    <div class="col-md-12">
      <div class="card-body">
            <h5 class="card-title">{prod.name}</h5>
          </div>
        </div>

        <div class="col-md-12">
      
      <img src={prod.image} class={style.tamimg} alt="..."/>

    </div>
</div>

<div class="mx-auto d-block">
  <div class="col-md-12">
    <       p class={`${style.styleuno}`}>{prod.descriptioncuatro}</p>
          </div>
        </div>
      </div>
    </div>

<div class="row g-3">
  <div class="col-md-6">
    <div className={style.carta}>
      <div class="card">
          <p class={`${style.styleuno}`}>{prod.description}</p>  
          <img src={Motor} class={style.tamimg} alt="..."/>
          <br></br> 
        </div>
      </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>

    <div class="col-md-6">
      <div className={style.carta}>
        <div class="card">

          <p class={`${style.styleuno}`}>{prod.descriptiondos}</p>
          <img src={caja} class={style.tamimgcuatro} alt="..."/>
        </div>
      </div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div class="col-md-6">
      <div className={style.carta}>
        <div class="card">

          <p class={`${style.styleuno}`}>{prod.descriptiontres}</p>
          <img src={asientos} class={style.tamimgcuatro} alt="..."/>
       </div>
      </div>
    </div>
      <br/>
      <br/>
      <br/>
      <br/>

    <div class="col-md-6">
      <div className={style.carta}>
        <div class="card">

             <p class={style.styleuno}>{prod.descriptioncinco}</p>
            <img src={interior} class={style.tamimg} alt="..."/>
          <br/>
        </div>

      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>

        <div className={style.prec}>
          
          <div class="col-md-2">

            <div class="mx-auto d-block">

        <div class="card">
        <div class="mx-auto d-block">

        <br/>

        <h3>OFERTA US${prod.price}</h3>
              <a class={style.myBtn}  href={prod.hrefer}> Comprar </a>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default ProductDetail;
