import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link'


const HomeHeader = () => {

    return (
        <>
        <div className="container">
            <div className="img-container"/>
            <div className="right__container">
            <div className="login__container">
                <div className="container__navigation">
                    <Link style={{textDecoration: "none", padding: "9px 10px" , color: "black"}} className="login" to='/LogIn'><a>Zaloguj</a></Link>
                    <Link style={{textDecoration: "none", padding: "9px 10px" , color: "black"}} className="register" to='/Register'><a>Załóż konto</a></Link>
                </div>
                <div className="nav__container">
                    <Link style={{textDecoration: "none", padding: "9px 10px" , color: "black"}}><a className="start">Start</a></Link>
                    <HashLink style={{textDecoration: "none", padding: "9px 10px" , color: "black"}} smooth to="/#four__steps" scroll={(el) => el.scrollIntoView({behavior: "smooth"})}><a>O co chodzi?</a></HashLink>
                    <HashLink style={{textDecoration: "none", padding: "9px 10px" , color: "black"}} smooth to="/#about__Us" scroll={(el) => el.scrollIntoView({behavior: "smooth"})}><a>O nas</a></HashLink>
                    <HashLink style={{textDecoration: "none", padding: "9px 10px" , color: "black"}} smooth to="/#foundations" scroll={(el) => el.scrollIntoView({behavior: "smooth"})}><a>Fundacje i organizacje</a></HashLink>
                    <HashLink style={{textDecoration: "none", padding: "9px 10px" , color: "black"}} smooth to="/#contact" scroll={(el) => el.scrollIntoView({behavior: "smooth"})}><a>Kontakt</a></HashLink>
                </div>
            </div>
            <div className="help__us">
                <h1>Zacznij Pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręcę</h1>
                <div className="img__description"/>
                <div className="buttons">
                    <Link className="button1">Oddaj<br/>rzeczy</Link>
                    <Link className="button2">Zorganizuj<br/>zbiórkę</Link>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default HomeHeader;