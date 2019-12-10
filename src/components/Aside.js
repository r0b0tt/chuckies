import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChuckNorrisIcon from '../assets/images/chuck-norris.png';
import { addCategories } from '../redux/actions/index';



class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        }
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        this.props.addCategories();
    }

    handleFormChange = (e) => {
        this.setState({ keyword: e.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.keyword)

    }

    handleSearchCategory = (e, category) => {
        e.preventDefault();
        let listItems = document.getElementsByClassName("list__item");
        for (let index = 0; index < listItems.length; index++) {
            const element = listItems[index];
            element.classList.remove("list__item--active");
        }

        e.target.classList.add("list__item--active");

        let aside = document.getElementsByClassName("aside")[0];
        let main = document.getElementsByClassName("main")[0];
        let windowWidth = window.innerWidth;
        if (windowWidth <= 768) {
            aside.style.display = "none";
            main.style.width = "100vw";
            main.style.marginLeft = 0;
        }
        this.props.handleSearchCategory(category);
    }

    render() {

        return (
            <aside className="aside">
                <div className="aside__header">
                    <div className="img-container">
                        <img src={ChuckNorrisIcon} alt="Chuck Logo" className="img" />
                    </div>
                    <p className="header__logo">Chuckies.</p>
                </div>

                <div className="aside__filters">
                    <form className="filters__form" onSubmit={this.handleFormSubmit}>
                        <div className="form__input">
                            <input className="input__field" type="text" name="keyword" id="keyword" placeholder="Search by keyword" value={this.state.keyword} onChange={this.handleFormChange} />
                            <FontAwesomeIcon icon={faSearch} className="input__icon" />
                        </div>
                    </form>

                    <div className="filters__list">
                        {
                            this.props.categories.map(category =>
                                <a href="/" key={category} className="list__item" onClick={e => this.handleSearchCategory(e, category)}>{category}</a>
                            )
                        }
                    </div>
                </div>

                <div className="aside__footer">
                    <a href="https://github.com/r0b0tt/chuckies" target="_blank" rel="noopener noreferrer" className="footer__link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/__r0b0t__" target="_blank" rel="noopener noreferrer" className="footer__link">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>

            </aside>
        )
    }
}

const mapStateToProps = state => {
    return { categories: state.categories }
}


export default connect(mapStateToProps, { addCategories })(Aside);
