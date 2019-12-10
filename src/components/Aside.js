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
                    <a href="/" className="footer__link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="/" className="footer__link">
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
