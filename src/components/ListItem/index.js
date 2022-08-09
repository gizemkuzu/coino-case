import React from "react";
import Style from './style.module.scss';
import {AiOutlineDelete, AiOutlineStar} from "react-icons/ai";
import {ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_INBOX} from "../../store/slices/inbox";
import {useDispatch} from "react-redux";
import {useAlert} from "react-alert";
import Types from "../../utils/constant/types";
import {
    useLocation
} from "react-router-dom";

const ListItem = ({item}) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const pageId = useLocation();

    const handleFavorite = (id) => {
        dispatch(ADD_FAVORITE({
            id: id,
        }));
        alert.show('Email favorilere eklendi.', {type: 'success', position: 'bottom right'});
    }

    const handleDeleteFavorite = (id) => {
        dispatch(REMOVE_FAVORITE({
            id: id,
        }));
        alert.show('Email favorilerden çıkarıldı.', {type: 'info', position: 'bottom right'});
    }

    const handleDelete = (id) => {
        dispatch(REMOVE_INBOX({
            id: id,
        }));
        alert.show('Email silindi.', {type: 'success', position: 'bottom right'});
    }

    return (
        <li className={Style.listItem}>
            <span>
                {<AiOutlineStar className={item.type !== Types.FAVORITE ? null : Style.favorite}
                                onClick={() => pageId.pathname === '/favorite' ? handleDeleteFavorite(item.id) : handleFavorite(item.id)}/>}
                {<AiOutlineDelete className={item.type !== Types.TRASH ? null : Style.trash}
                                  onClick={() => handleDelete(item.id)}/>}
            </span>
            <span>{item.date}</span>
            <span>{item.from}</span>
            <span>{item.subject}</span>
        </li>
    );
}

export default ListItem;
