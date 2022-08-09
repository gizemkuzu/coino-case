import React from "react";
import {NavLink} from "react-router-dom";
import Style from './style.module.scss';
import {HiInbox} from 'react-icons/hi';
import {GrFavorite} from 'react-icons/gr';
import {BsTrash} from 'react-icons/bs';
import {useSelector} from "react-redux";
import Types from "../../utils/constant/types";

const Menu = () => {
    const emails = useSelector(state => state.inbox.emails);
    return (
        <>
            <h1 className={Style.title}>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r4.png" alt=""/>
            </h1>
            <ul className={Style.categories}>
                <li>
                    <NavLink to="/">Inbox ({emails.filter(e => e.type === Types.INBOX).length})</NavLink>
                    <HiInbox/>
                </li>
                <li>
                    <NavLink to="/favorite">Favorite ({emails.filter(e => e.type === Types.FAVORITE).length})</NavLink>
                    <GrFavorite />
                </li>
                <li>
                    <NavLink to="/trash">Trash ({emails.filter(e => e.type === Types.TRASH).length})</NavLink>
                    <BsTrash />
                </li>
            </ul>
        </>
    )
}
export default Menu;
