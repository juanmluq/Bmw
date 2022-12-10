import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postQuery } from '../../redux/actions';
import { Link, useHistory } from "react-router-dom";
import style from './Contact.module.css';

const Contact = (props) => {
const dispatch = useDispatch();
const history = useHistory() 


const [ input, setInput ] = useState({//aca uso el input para guardar los datos que cargo en la pagina
  Name: "",
  Email: "",
  Tel: "",
  City: "",
  Consulta: "",
  Model: "",
  Whatsapp:"off"
})

function handleChange(e){
  setInput({ 
          ...input,
      [e.target.id] : e.target.value
  })
}

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input)
    dispatch(postQuery(input))
    alert("Consulta enviada!!")
    setInput({
      Name: "",
      Email: "",
      Tel: "",
      City: "",
      Consulta: "",
      Model: "",
      Whatsapp:"off"
    })
     history.push("/home") //cuando termine de hacer lo anterior llevame al home. El history.push  redirige
}

    return (
        <div className={style.proDet}>
            <h7 className={style.texto}>CONTACTO</h7>
        <br></br>
        <br></br>
        <form class="row g-3" onSubmit={(e) => handleSubmit(e)}>
  <div class="col-md-6">
    <label for="Name" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="Name" placeholder="Escribe tu nombre" onChange={(e) => handleChange(e)} 
/>
  </div>
  <div class="col-md-6">
    <label for="Email" class="form-label">Email</label>
    <input type="email" class="form-control" id="Email" placeholder="escribe tu email" onChange={(e) => handleChange(e)}/>
  </div>
  
  <div class="col-12">
    <label for="Tel" class="form-label">Telefono</label>
    <input type="text" class="form-control" id="Tel" placeholder="Escribe tu telefono" onChange={(e) => handleChange(e)}/>
  </div>
  <div class="col-md-6">
    <label for="City" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="City" placeholder="Escribe tu ciudad" onChange={(e) => handleChange(e)}/>
  </div>
  <div class="col-md-4">
    <label for="Consulta" class="form-label">Tipo de Consulta</label>
    <select id="Consulta" class="form-select" onChange={(e) => handleChange(e)}>
      <option selected>Seleccionar...</option>
      <option>Financiacion</option>
      <option>Compra realizada</option>
      <option>Garantia</option>
      <option>Detalles Vehiculo</option>
      <option>Otra consulta</option>
    </select>
  </div>
  <div class="col-md-2">
  <label for="Model" class="form-label">Modelo</label>
    <select id="Model" class="form-select" onChange={(e) => handleChange(e)}>
      <option selected>Seleccionar...</option>
      <option>BMW X1</option>
      <option>BMW X2</option>
      <option>BMW X3</option>
      <option>BMW X4</option>
      <option>BMW X5</option>
      <option>BMW X6</option>
    </select>
  </div>
  <div class="col-md-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="Whatsapp" onChange={(e) => handleChange(e)}/>
      <label class="form-check-label" for="gridCheck">
        Contactarme via WhatsApp
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>

        </div>
    )
}

export default Contact;
