import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChuckNorrisImage from '../assets/images/chuck.jpg';
import { getRandomQuote } from '../redux/actions/index';
import Aside from './Aside';
import { BASE_API_URL } from '../helpers/constants';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplay: "random", // random, search, category
            searchResults: {},
            categoryResult: {}
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getRandomQuote();
    }

    handleFormSubmit = (keyword) => {
        fetch(`${BASE_API_URL}/search?query=${keyword}`)
            .then(res => res.json())
            .then(res => {
                if (res.total > 0) {
                    this.setState({ searchResults: res });
                    this.setState({ currentDisplay: "search" })
                }

            })
    }

    handleSearchCategory = (category) => {
        fetch(`${BASE_API_URL}/random?category=${category}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ categoryResult: data });
                this.setState({ currentDisplay: "category" });
            })
            .catch(err => console.error(err))

    }

    toggleSidebar = e => {
        e.preventDefault();
        let aside = document.getElementsByClassName("aside")[0];
        aside.style.display = "grid";
        let main = document.getElementsByClassName("main")[0];
        main.style.marginLeft = "330px";
        main.style.opacity = .38;

    }

    render() {
        let radomSearchQuote = "";
        this.state.searchResults && this.state.searchResults.total > 0 ?
            radomSearchQuote = this.state.searchResults.result[Math.floor(Math.random() * this.state.searchResults.total)]
            : radomSearchQuote = ""

        return (
            <section>
                <Aside onFormSubmit={this.handleFormSubmit} handleSearchCategory={this.handleSearchCategory} />

                <main className="main">
                    <div className="img-container">
                        <img src={ChuckNorrisImage} alt="Chuck Norris" className="img" />
                    </div>
                    {
                        this.state.currentDisplay === "random" ?
                            <div className="main__quotes">

                                <p className="quotes__quote">"{this.props.randomQuote.value}"</p>

                                <a href={`https://twitter.com/intent/tweet?text=${this.props.randomQuote.value}`} className="btn" target="_blank" rel="noopener noreferrer">Share on twitter</a>
                            </div>
                            :
                            this.state.currentDisplay === "search" ?
                                <div className="main__quotes">
                                    <p className="quotes__quote">"{radomSearchQuote.value}"</p>

                                    <a href={`https://twitter.com/intent/tweet?text=${radomSearchQuote.value}`} className="btn" target="_blank" rel="noopener noreferrer">Share on twitter</a>
                                </div>
                                : this.state.currentDisplay === "category" ?
                                    <div className="main__quotes">
                                        <p className="quotes__quote">"{this.state.categoryResult.value}"</p>

                                        <a href={`https://twitter.com/intent/tweet?text=${this.state.categoryResult.value}`} className="btn" target="_blank" rel="noopener noreferrer">Share on twitter</a>
                                    </div>
                                    : null
                    }
                </main>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        randomQuote: state.randomQuote,
        categories: state.categories
    }
}

export default connect(
    mapStateToProps,
    { getRandomQuote }
)(Main);
