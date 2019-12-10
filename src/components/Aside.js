import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ChuckNorrisIcon from '../assets/images/chuck-norris.png';

const Aside = () => {
    return (
        <aside className="aside">
            <div className="aside__header">
                <div className="img-container">
                    <img src={ChuckNorrisIcon} alt="Chuck Logo" className="img" />
                </div>
                <p className="header__logo">Chuckies.</p>
            </div>

            <div className="aside__filters">
                <form className="filters__form">
                    <div className="form__input">
                        <input className="input__field" type="text" name="keyword" id="keyword" placeholder="Search by keyword" />
                        <FontAwesomeIcon icon={faSearch} className="input__icon" />
                    </div>
                </form>

                <div className="filters__list">
                    <a href="/" className="list__item">Animal</a>
                    <a href="/" className="list__item">Career</a>
                    <a href="/" className="list__item">Celebrity</a>
                    <a href="/" className="list__item">Dev</a>
                    <a href="/" className="list__item">Explicit</a>
                    <a href="/" className="list__item">Fashion</a>
                    <a href="/" className="list__item">Food</a>
                    <a href="/" className="list__item">History</a>
                    <a href="/" className="list__item">Money</a>
                    <a href="/" className="list__item">Movie</a>
                    <a href="/" className="list__item">Music</a>
                    <a href="/" className="list__item">Political</a>
                    <a href="/" className="list__item">Religion</a>
                    <a href="/" className="list__item">Science</a>
                    <a href="/" className="list__item">Sport</a>
                    <a href="/" className="list__item">Travel</a>
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

export default Aside;
