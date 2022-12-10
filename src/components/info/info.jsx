 import React from 'react';
 import style from './Info.module.css';
 import image from "../../img-cp2/wsp.png";
 import face from "../../img-cp2/face.png";
 import lk from "../../img-cp2/lk.png";
 import foto from "../../img-cp2/foto.jpg"


const info = () => { 
return(
  <div className={style.info}>
        <h5 >Web creada por:</h5>
      <img src={foto}  alt="..."/>
    <div >
      <div >
        <p > 
        Juan M. Luque
        <br />
        Full Stack Developer
        </p>
        <p ><small class="text-muted">soyluque@hotmail.com
        <br />
        11 7025 9063</small></p>
      </div>
  <section>
    <img src={image} alt="" />
    <img src={face} alt="" />
    <img src={lk} alt="" />
    </section>

</div>
</div>

  );
};

export default info;