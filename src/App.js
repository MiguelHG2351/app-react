// Dependencias
import React from 'react';
// import Header from './component/sidenav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Estilos
import './assets/css/index.css'

//Rutas
import Home from './pages/home'
import Catalogo from './pages/catalogo'
import Layout from './component/Layout'
import Page404 from './pages/Pages404'
import Aula2 from './pages/aula2';

function App() {
  return (
    <Router>
        <Switch>
          <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/app-react/" component={Home} />
          <Route exact path="/compu" component={Catalogo} />
          <Route exact path="/respuestas-aula2" component={Aula2} />
          </Layout>
            <Route component={Page404} />
        </Switch>
      </Router>
  );
}


console.clear()

console.log(
  "%c ATENCIÓN!, este es un entorno que solo esta permitido para desarrolladores del sitio favor no intentar ejecutar ningun código en esta consola sin importar el motivo; Si tiene problemas en el sitio contactar a yo@gmail.com, ni intene hackear el sitio con malos motivos debido a que es ilegal y no lograra nada",
  "text-align:center; color:#0804af; font-size:30px; padding:250px;"
);


export default App;