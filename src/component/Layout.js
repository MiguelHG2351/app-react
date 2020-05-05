import React from 'react';
import Header from './header'

function header(props) {
    return (
        <React.Fragment>
            <Header/>
            {props.children}
        </React.Fragment>
    )
}

export default header;