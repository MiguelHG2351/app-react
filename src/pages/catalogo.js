import React, { Component, Fragment } from 'react'
import Sidenav from '../component/sidenav'


class Catalogo extends Component {
    render() {
        return <Fragment>
            <Sidenav section="intro" />
            <h1>Hola Mundo!!</h1>
        </Fragment>
    }
}

export default Catalogo;