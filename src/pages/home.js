// Dependencies
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import API from '../component/index.json'

class Index extends React.Component {
    
    darkMode(e) {
        console.log(e.target)
    }

    // API = APIS()

    render() {
        return <Fragment>
                {/* <Sidenav section="geo" /> */}
                <main className="main-index">
                    <section className="section-article">
                        <h1>Aula 1</h1>
                        <div className="aula-2">
                            {API.aula1.map(e => (
                            <article key={e.id} className="elements">
                                <div key={e.id + 100}>
                                <img loading="lazy" key={e.id+200} src={e.url} alt="error" />
                                </div>
                                <p key={e.id+300}>{e.description}</p>
                            </article>
                            ))}
                        </div>
                    </section>
                    <section className="section-article">
                        <h1>Aula 2</h1>
                        <div className="aula-2">
                            <Link to="/respuestas-aula2">
                            {API.aula2.map(e => (
                            <article key={e.id} className="elements">
                                <div key={e.id+500}>
                                <img loading="lazy" key={e.id + 600} src={e.url} alt="error" />
                                </div>
                            <p key={e.id+700}>{e.description}</p>
                            </article>
                            ))}
                            </Link>
                        </div>
                    </section>
                </main>
        </Fragment>
    }
}

export default Index;