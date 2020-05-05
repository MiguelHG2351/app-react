import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

// Imagenes
import task from '../assets/images/task.png'

class Sidenav extends Component{
    
    state = {
        geo: 'false',
        intro: 'false',
        ingles: 'false',
        filo: 'false',
        curso: 'false',
        task: 'false',
        activate: 'true'
    }
    
        componentDidMount() {
            switch (this.props.section) {
                case 'geo':
                    this.setState({geo: 'active'})
                    break;
                case 'intro':
                    this.setState({intro: 'active'})
                    break;
                case 'ingles':
                    this.setState({ingles: 'active'})
                    break;
                case 'filo':
                    this.setState({filo: 'active'})
                    break;
                case 'curso':
                    this.setState({curso: 'active'})
                    break;
                case 'task':
                    this.setState({task: 'active'})
                    break;
                default:
                    break;
            }

            if (matchMedia('(prefers-color-scheme: light)').matches) {
                document.body.classList.add('is-light')
            }

            if (matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('is-dark')
            }

            const btn = document.getElementById('btn-mode')
            btn.addEventListener('click', () => { btn.classList.toggle('active');
            if(document.body.classList[0] === 'is-light') {
                document.body.classList.remove('is-light')
                document.body.classList.add('is-dark')
            } else if(document.body.classList[0] === 'is-dark') {
                document.body.classList.remove('is-dark')
                document.body.classList.add('is-light')
            }
        })
        }
    
    render() {


        return <Fragment>
            <section className={"sidenav " + this.props.activate}>
                    <ul>
                        <li className="sidenav-header" id="sidenav">
                            <div className="logo">
                                <img className="img-responsive" src={task} alt="logo de tareas" />
                            </div>
                            <form >
                                <input type="text" placeholder="Busca tarea" className="sidenav-search" name="search" />
                            </form>
                        </li>
                        <li>
                            <button className="btn-mode"id="btn-mode" onClick={this.darkMode}>
                                <span><i className="material-icons">brightness_5</i></span>
                                <span><i className="material-icons">brightness_2</i></span>
                            </button>
                        </li>
                        <li className={this.state.geo}><Link to="/app-react">Geometría</Link></li>
                        <li className={this.state.intro}><Link to="/compu">Intro a computación</Link></li>
                        <li className={this.state.ingles}><Link to="/ingles">Íngles</Link></li>
                        <li className={this.state.filo}><Link to="/filo">Filosofía</Link></li>
                        <li className={this.state.curso}><Link to="/cursos">Cursos</Link></li>
                        <li className={this.state.task}><Link to="/task">Tarea</Link></li>
                        <li className={this.state.zip}><Link to="/zip">Descargar información</Link></li>
                        <li className={this.state.zip}><a href="https://miguelhg2351.github.io/API/aula1.zip">Descargar aula1</a></li>
                        <li className={this.state.zip}><a href="https://miguelhg2351.github.io/API/aula2.zip">Descargar aula2</a></li>
                    </ul>
                </section>
        </Fragment>
    }
}

export default Sidenav;