import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/occurrences">Occurrences</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">About</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Features</Link></li>
            </ul>
            <ul className="languageSelector">
                <li><a href="/" className="button small">English</a></li>
                <li><a href="/da/" className="button special small">Danish</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
