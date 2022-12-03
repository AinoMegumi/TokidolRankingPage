﻿import React from 'react';
import './css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import menuRaw from './resources/menu_links.json';
import logo from './resources/pic/logo1.gif';

export default class PageHeaderItem extends React.Component {
    constructor(props) {
        super(props);
    }
    __pcHeader() {
        const item = menuRaw.menu.map(m => {
            return location.pathname === m.href ? (
                <li className="current" key={m.text}>
                    <a href={m.href}>{m.text}</a>
                </li>
            ) : (
                <li key={m.text}>
                    <a href={m.href}>{m.text}</a>
                </li>
            );
        });
        return (
            <header>
                <section id="logo">
                    <img src={logo} alt="ときめきアイドル　ランキングサイト"></img>
                </section>
                <nav className="pc">
                    <ul>{item}</ul>
                </nav>
            </header>
        );
    }
    __spHeader() {
        const item = menuRaw.menu.map(m => {
            return (
                <li className="nav-item" key={m.text}>
                    <a className="nav-link text-dark" href={m.href}>
                        {m.text}
                    </a>
                </li>
            );
        });
        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div className="container">
                        <img src={logo} alt="ときめきアイドル　ランキングサイト"></img>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                            <ul className="navbar-nav flex-grow-1">{item}</ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    render() {
        return window.innerWidth < 800 ? this.__spHeader() : this.__pcHeader();
    }
}
