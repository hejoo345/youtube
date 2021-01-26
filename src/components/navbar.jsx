import React, { Component } from 'react';
import styles from './navbar.module.css';
import Search from './search';

class Navbar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <div>
                <span className={styles.logo} onClick={this.props.onHome}><button className="fab fa-youtube" ></button></span>
                <span className="title">Youtube</span>
                </div>
                <Search onSearch={this.props.onSearch}/>
                <span><i className="fas fa-user-circle"></i></span>            
            </nav>
        );
    }
}

export default Navbar;