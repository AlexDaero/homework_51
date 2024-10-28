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
                        <a className="header_block_link_item" href="https://www.stoloto.ru/5x36plus">Главное меню</a>
                        <a className="header_block_link_item" href="https://www.stoloto.ru/5x36plus/rules">Правила</a>
                        <a className="header_block_link_item" href="https://loxru.mirbb.com/">Призы</a>
                        <a className="header_block_link_item" href="https://www.stoloto.ru/5x36plus/rules">Условия розыгрыша</a>
                        <a className="header_block_link_item" href="https://www.stoloto.ru/5x36plus/game">Купить билет</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock