import React from "react";
import styles1 from './Header.module.css'
class Header extends React.Component{
    render() {
        return(
            <div className={styles1.header}>
                <a href="#" className={styles1.logo}>HABR</a>
                <div className={styles1.headerRight}>
                    <a className={styles1.active} href="#home">Все</a>
                    <a href="#">Новости</a>
                    <a href="#">Статьи</a>
                </div>
            </div>
        )
    }
}
export default Header;