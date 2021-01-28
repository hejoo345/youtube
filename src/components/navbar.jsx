import React, { Component } from 'react';
import styles from './navbar.module.css';
import Search from './search';

class Navbar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <div className={styles.home} onClick={this.props.onHome}>
                    <img className={styles.logo} src='./images/logo.png' alt="logo"/>
                    <span className="title">Youtube</span>
                </div>
                <Search onSearch={this.props.onSearch}/>
                <span className={styles.user}><i className="fas fa-user-circle"></i></span>            
            </nav>
        );
    }
}

export default Navbar;