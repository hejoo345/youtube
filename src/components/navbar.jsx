import React, { Component } from 'react';
import styles from './navbar.module.css';

class Navbar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <span><i className=" fab fa-youtube"></i></span>
                <span className="title">Youtube</span>
                <form>
                    <input className="search" type="text" placeholder="Search.."/>
                    <button className="serch-btn"><i className="fas fa-search"></i></button>
                </form>
                
            </nav>
        );
    }
}

export default Navbar;