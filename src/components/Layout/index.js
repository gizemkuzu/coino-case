import React from "react";
import Menu from "../Menu";
import Style from './style.module.scss';

const Layout = ({children}) => {
    return (
        <div className={Style.layouts}>
            <div className={Style.sidebar}>
                <Menu />
            </div>
            <div className={Style.content}>
                {children}
            </div>
        </div>
    )
}

export default Layout;
