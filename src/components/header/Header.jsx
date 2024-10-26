import React from "react";
import './Header.css'
import logo from '../../image/logo.jpg'

const HeaderBlock = (props) => {
    return(
        <div className="header">
            <div className="container">
                <div className="header_block">
                    <a href="#">
                        <img className="header_block_image" src={logo} alt="logo" />
                    </a>
                    <div className="header_block_link">
                        <a className="header_block_link_item" href="#">Главное меню</a>
                        <a className="header_block_link_item" href="#">Правила</a>
                        <a className="header_block_link_item" href="#">Призы</a>
                        <a className="header_block_link_item" href="#">Условия розыгрыша</a>
                        <a className="header_block_link_item" href="#">Личный кабинет</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock