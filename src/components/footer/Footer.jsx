import React from "react";
import './Footer.css'
import logo from '../../image/logo.jpg'

const FooterBlock = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_block">
                    <a href="#"><img className="footer_block_logo" src={logo} alt="logo" /></a>
                    <div className="footer_blok_links">
                        <a className="footer_blok_links_item" href="#">Победители</a>
                        <a className="footer_blok_links_item" href="#">Политика Cookie</a>
                        <a className="footer_blok_links_item" href="#">Ответственная игра</a>
                        <a className="footer_blok_links_item" href="#">Мобильная версия</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBlock