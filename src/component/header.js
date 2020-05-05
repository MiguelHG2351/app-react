import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

// Component
import Sidenav from '../component/sidenav'

// Imagenes+
import logo from '../assets/images/google.png'

class Header extends Component {
    
    constructor(props) {
        super(props)
        this.state = {classCard: 'header-site'}
    }

    handleAnimation = () => {       
        if (document.documentElement.scrollTop > 50) {           
         this.setState({ classCard: 'header-site header-fixed' });  
       }
       else {
           this.setState({classCard: 'header-site'})
       }
    }

    componentDidMount() {
        window.onscroll = () => this.handleAnimation();  
        const btn = document.getElementById('btn-menu')
        
        btn.addEventListener('click',(e) => {
            switch (e.target.children[0].textContent) {
                case "menu":
                        this.setState({ active: 'active' });
                        e.target.children[0].textContent = 'close'
                    break;
                    case "close":
                        e.target.children[0].textContent = 'menu'
                        this.setState({ active: 'flase' });

                    break;
                default:
                        e.target.children[0].textContent = 'menu'
                        this.setState({ active: 'false' });
                    break;
            }
        })

        btn.addEventListener('blur', (e) => {
            console.log()
            e.target.children[0].textContent = 'menu'
        })

        document.querySelector('#overlay').addEventListener('click', () => {
                this.setState({ active: 'flase' });
                document.querySelector('#overlay').classList.remove('active')
        })
    }

    state = {
        active: "false"
    }
    
       render() {
           return (<Fragment>
            <header className={this.state.classCard} role="banner">
                <button id="btn-menu" className="btn-menu"><i className="material-icons">menu</i></button>
                <div className="logo-header">
                    <img alt="Logo del sitio" src={logo} />
                </div>
                <ul className="list-nav">
                    <li><Link to="/" >Inicio</Link></li>
                    <li><a href="emailto:hola@qonexia.com">Contactanos</a></li>
                    <li><Link to="/compu" >Catalogos</Link></li>
                    <li><Link to="" >Promociones</Link></li>
                </ul>
            </header>
            <Sidenav section="geo" activate={this.state.active} />
            <div id="overlay" className={"overlay " + this.state.active}></div>
           </Fragment>
        )
    }    
}

export default Header;