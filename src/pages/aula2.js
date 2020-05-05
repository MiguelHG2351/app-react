import React, { Component, Fragment } from "react";
import images from "../component/index.json";

class Aula2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-aula">
          <main className="main">
            <h2 style={{ textAlign: "center" }}>Respuestas del aula2</h2>
            <div className="card">
              <div className="thumb">
                  <h3>ejercicio 1</h3>
                <img className="img-responsive" src={images.aula2[0].url} alt="Primer ejercicio" title="primer ejercicios"/>
              </div>
              <div className="response">
                <p>
                    h = &radic;3 / 2 h = (&radic;3 *10) / 2
                    </p>
                <p>
                    h = 5&radic;3
                </p>
                <p>
                    h = 3r<br></br>
                    r = h/3
                    <br></br>
                    r = 5&radic;3 / 3
                    <br></br>
                    R = 2r
                    <br></br>
                    R = 2(5&radic;3 / 3)
                    <br></br>
                    R = 10&radic;3 / 3
                </p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
              <h3>ejercicio 2</h3>
                <img className="img-responsive" src={images.aula2[1].url} alt="segundo ejercicio" title="segundo ejercicios"/>
              </div>
              <div className="response">
                <p>X = 66°</p>
                <p>Y = 123°</p>
                <p>Y = 90° + X° / 2</p>
                <p>Y = 90° + 66° / 2</p>
                <p>Y =123°</p>
                <p>119 = 180° - 28° - 33°</p>
                <p>117 = 360° - 119° - 123°</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
              <h3>ejercicio 3</h3>
                <img className="img-responsive" src={images.aula2[2].url} alt="tercero ejercicio" title="tercero ejercicios"/>
              </div>
              <div className="response">
              <p>X = 72°</p>
                <p>Y = 126°</p>
                <p>126 = 90° + X° / 2</p>
                <p>X / 2 = 126 - 90</p>
                <p>X / 2 = 36</p>
                <p>X = 72</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
              <h3>ejercicio 4</h3>
                <img className="img-responsive" src={images.aula2[3].url} alt="cuarto ejercicio" title="cuarto ejercicios"/>
              </div>
              <div className="response">
                <p>No hay que explicarlo</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
              <h3>ejercicio 5</h3>
                <img className="img-responsive" src={images.aula2[4].url} alt="quinto ejercicio" title="quinto ejercicios"/>
              </div>
              <div className="response">
                <p>h = 3</p>
                <p>h = 3r</p>
                <p>3 = 3r</p>
                <p>r = 1</p>
                <p>3 = 3r</p>
                <p>El radio de la circunferencia circunscrita</p>
                <p>R = 2r</p>
                <p>R = 2(1)</p>
                <p>Lados del lado</p>
                <p>h = &radic;3<i>l</i> / 2</p>
                <p>3 = &radic;3<i>l</i> / 2</p>
                <p>despejando: <i>l</i> = 6&radic;3 / 3</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
              <h3>ejercicio 6</h3>
                <img className="img-responsive" src={images.aula2[5].url} alt="sexto ejercicio" title="sexto ejercicios"/>
              </div>
              <div className="response">
                <p>Dtermine el perimetro del triángulo BDG</p>
                <p>Las rectas que estan dentro del triángulo son medianas por lo que un lado es el doble del otro</p>
                <p>BG es 2K y DE es k</p>
                <p>GD es W y DA es 2W</p>
                <p>BG es Z por que BC mide 2Z y AG lo divide en 2 lados congruentes</p>
                <p>Por lo tanto el perímetro es 2K + Z + W</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <h3>ejercicio 7</h3>
                <img className="img-responsive" src={images.aula2[6].url} alt="séptimo ejercicio" title="Séptimo ejercicios"/>
              </div>
              <div className="response">
                <p>Calcule DFE donde F es el ortocentro</p>
                <p>ángulo BAC es 58°</p>
                <p>ángulo BCA es 70°</p>
                <p>FDC es un triángulo rectángulo</p>
                <p>triángulo FDC DFC es 180 - 90 - 38 = 52</p>
                <p>por ser opuestos por el vértice EFA es 52</p>
                <p>Por lo que 360 = 52 + 52 + X + X</p>
                <p>2X = 256</p>
                <p>X = 128</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <h3>ejercicio 8</h3>
                <img className="img-responsive" src={images.aula2[7].url} alt="Noveno ejercicio" title="Noveno ejercicios"/>
              </div>
              <div className="response">
                <p>CD = K</p>
                <p>H = K</p>
                <p>K = 3r</p>
                <p>K / 3 = r</p>
                <p>R = 2r</p>
                <p>R = 2K/ 3</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <h3>ejercicio 10</h3>
                <img className="img-responsive" src={images.aula2[8].url} alt="Primer ejercicio" title="Decimo ejercicios"/>
              </div>
              <div className="response">
                <p>Hola Mundo</p>                
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <img className="img-responsive" src={images.aula2[9].url} alt="Primer ejercicio" title="primer ejercicios"/>
              </div>
              <div className="response">
                <p>Hola Mundo</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <img className="img-responsive" src={images.aula2[10].url} alt="Primer ejercicio" title="primer ejercicios"/>
              </div>
              <div className="response">
                <p>Si se busca la misma distancia entre lados hay que trazar una bisectriz por que se encuentran a las mismas distancias entre lados</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <h3>ejercicio 1</h3>
                <img className="img-responsive" src={images.aula2[11].url} alt="Primer ejercicio" title="primer ejercicios"/>
              </div>
              <div className="response">
                <p>h = &radic;3<i>l</i> / 2</p>
                <p>por lo tanto h = &radic;3<i>K</i> / 2</p>
                <p>r = h / 3</p>
                <p>r = &radic;3k / 6</p>
                <p>R = 2r</p>
                <p>R = &radic;3K /3</p>
                <p>Tiene Bisectriz, Incentro, Circuncentro, ortocentro BICO</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <h3>ejercicio 2</h3>
                <img className="img-responsive" src={images.aula2[12].url} alt="Primer ejercicio" title="primer ejercicios"/>
              </div>
              <div className="response">
                <p>R = 5, R = 2r</p>
                <p>5 = 2r, r = 5 / 2</p>
                <p>Si la altura es igual a la suma de los radios R + r</p>
                <p>h = 5 + 5 / 2</p>
                <p>h = 15 / 2</p>
                <p>Si h = &radic;3<i>l</i> / 2</p>
                <p><i>l</i> = 2h / &radic;3</p>
                <p><i>l</i> = 15 / &radic;3</p>
                <p>perímetro = 5 + 5 + 5, p = 15</p>
                <p>El punto O es Bisectriz, Incentro, Circuncentro, ortocentro BICO por que en un triángulo rectangulo sus puntos notables estan en una misma posición</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <h3>ejercicio 3</h3>
                <img className="img-responsive" src={images.aula2[13].url} alt="Primer ejercicio" title="primer ejercicios"/>
              </div>
              <div className="response">
                <p>a) D es incentro</p>
                <p>b)O es incentro</p>
                <p>c)R es incentro de algún triángulo</p>
                <p>d)S es incentro de algún triángulo</p>
                <p>e)Todas son falsas</p>
              </div>
            </div>
            <div className="card">
              <div className="thumb">
                <h3>ejercicio 4</h3>
                <img className="img-responsive" src={images.aula2[14].url} alt="Primer ejercicio" title="primer ejercicios"/>
              </div>
              <div className="response">
                <p>La relación es 2:1 entonces</p>
                <p>T<sub>1</sub> = 3R / 2</p>
                <p>T<sub>2</sub> = 3R</p>
                <p>T<sub>2</sub> / T<sub>1</sub>  = 3R</p>
              </div>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default Aula2;
