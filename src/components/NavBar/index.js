import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navBar.css';
import actions from '../../helpers/actions';
import { connect } from 'react-redux';

// ------------------------ REDUX ------------------------
const mapStateToProps = state => ({
    shop : state.shop.session,
    cart : state.cart,
    i18n : state.i18n
});

const mapDispatchToProps = dispatch => ({
    setLocale : (locale) => dispatch({
        type    : actions.SET_LOCALE,
        payload : locale
    })
});
// ------------------------ /REDUX ------------------------


function NarBar(props){

    // get window href
    let location = useLocation();
    // navBar style override state
    let [hasShadow, setHasShadow] = useState(false);
    // expand status
    let [navBarExpanded, setNavBarExpanded] = useState(false);
    // local menu expanded
    let [localeMenuExpanded, setLocaleMenuExpanded] = useState(false);
    // get shop
    const { shop, cart } = props;
    // get translation helpers
    const { locale, __, locales } = props.i18n;
    
    // ---------------- LIFECYCLE ----------------
    useEffect(() => {
        // scroll listener
        window.onscroll = function() {
            setHasShadow(window.pageYOffset > 69);
        };
        // remove listener
        return () => { window.onscroll = null; };
    }, []);
    // ---------------- /LIFECYCLE ----------------

    return (
        <div className="navBar" style={{ 
            boxShadow : hasShadow ? "0px 1px 8px #dddddd" : "none",
            border : "0.5px solid #dddddd"
        }}>

            {/* ------------------ Desktop Nav Bar -----------------*/}
            <div className="navBar-wrapper">
                <div className="navBar-item title">
                    <Link to='/'>
                        {shop.logo.length > 0 ? <img className="logo" src={shop.logo} /> : null}
                        <h2>{shop.name}</h2>
                    </Link>
                </div>
                <div className="navBar-item">
                    <Link to='/' style={{fontWeight:location.pathname === "/" ? 500 : 300}}>
                        {__("Home")}
                    </Link>
                </div>
                <div className="navBar-item">
                    <Link to='/blogs' style={{fontWeight:location.pathname.startsWith("/blogs") ? 500 : 300}}>
                        {__("Blog")}
                    </Link>
                </div>
                <div className="navBar-item">
                    <Link to='/products' style={{fontWeight:location.pathname.startsWith("/products") ? 500 : 300}}>
                        {__("Shop")}
                    </Link>
                </div>
                <div className="navBar-item">
                    <button onClick={() => setLocaleMenuExpanded(!localeMenuExpanded)}>
                        <i className="fas fa-globe-asia"></i>
                    </button>
                    <div className={`locale-menu ${localeMenuExpanded ? "expanded" : ""}`}>
                        {locales.map(l => (
                            <button className="locale-btn" onClick={() => {
                                // set locale
                                props.setLocale(l.code);
                                // close menu
                                setLocaleMenuExpanded(false);
                            }}>
                                {locale == l.code ? <b>{l.name}</b> : l.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="navBar-item">
                    <Link to='/cart'>
                        {
                            cart.items.length > 0 ?
                            <span className="count">
                                {cart.items.length}
                            </span> : null
                        }
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </div>
                <div className="navBar-item">
                    <Link to='/users'>
                        <i className="fas fa-user"></i>
                    </Link>
                </div>
            </div>
            {/* ------------------ /Desktop Nav Bar -----------------*/}


            {/* ------------------ Mobile Nav Bar -----------------*/}
            <div className="navBar-wrapper-mobile">
                <div className="top-body">
                    <button className="expand-btn" onClick={() => setNavBarExpanded(!navBarExpanded)}>
                        {navBarExpanded ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                    </button>
                    <div className="navBar-item title">
                        {shop.logo.length > 0 ? <img className="logo" src={shop.logo} /> : null}
                        <h2>{shop.name}</h2>
                    </div>
                    <div className="fast-link">
                        <Link to='/cart' onClick={() => setNavBarExpanded(false)}>
                            {
                                cart.items.length > 0 ?
                                <span className="count">
                                    {cart.items.length}
                                </span> : null
                            }
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                    <div className="fast-link">
                        <Link to='/users' onClick={() => setNavBarExpanded(false)}>
                            <i className="fas fa-user"></i>
                        </Link>
                    </div>
                </div>
                {/* ------------ Expandable list ------------ */}
                <div className={`navBar-item-list ${navBarExpanded ? "expand" : ""}`}>
                    <div className="navBar-item">
                        <Link to='/' style={{fontWeight:location.pathname === "/" ? 500 : 300}} onClick={() => setNavBarExpanded(false)}>
                            {__("Home")}
                        </Link>
                    </div>
                    <div className="navBar-item">
                        <Link to='/blogs' style={{fontWeight:location.pathname.startsWith("/blogs") ? 500 : 300}} onClick={() => setNavBarExpanded(false)}>
                            {__("Blog")}
                        </Link>
                    </div>
                    <div className="navBar-item">
                        <Link to='/products' style={{fontWeight:location.pathname.startsWith("/products") ? 500 : 300}} onClick={() => setNavBarExpanded(false)}>
                            {__("Shop")}
                        </Link>
                    </div>
                </div>
                {/* ------------ Expandable list ------------ */}
            </div>
            {/* ------------------/ Mobile Nav Bar -----------------*/}

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NarBar);