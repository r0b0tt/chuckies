import React, { Component } from 'react';
import ChuckNorrisImage from '../assets/images/chuck.jpg';
import Aside from './Aside';


class Main extends Component {
    render() {
        return (
            <section>
                <Aside />

                <main className="main">
                    <div className="img-container">
                        <img src={ChuckNorrisImage} alt="Chuck Norris" className="img" />
                    </div>
                    <div className="main__quotes">

                        <p className="quotes__quote">"Ever wonder why Curly disappeared from the Three Stooges? Chuck Norris did not find him funny."</p>

                        <a href="/" className="btn">Share on twitter</a>
                    </div>
                </main>
            </section>
        )
    }
}

export default Main;
