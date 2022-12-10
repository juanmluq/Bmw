import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

export default class Nav extends Component {
    render() {
        return (
            <div className={style.nav}>
             <Link className={style.lin} to= "/home">Home</Link>
             <Link className={style.lin} to="/products/service">Service</Link>
             <Link className={style.lin} to="/products/contact">Contacto</Link>
             <Link  className={style.lin} to="/products/Garantia">Garantia</Link>
             <Link className={style.lin} to="/products/cuidado">Cuidado</Link>
            </div>
        )
    }
}
