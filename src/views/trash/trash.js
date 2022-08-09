import React from "react";
import Style from './style.module.scss';
import Types from "../../utils/constant/types";
import {useSelector} from "react-redux";
import ListItem from "../../components/ListItem";

const Trash = () => {
    const emailLists = useSelector(state => state.inbox.emails);

    return (
        <div>
            <h1>Trash</h1>
            <div className={Style.emailList}>
                <ul>
                    {
                        emailLists.filter(e => e.type === Types.TRASH).length > 0 ?
                            emailLists.map((email, index) => {
                                if (email.type === Types.TRASH)
                                    return (
                                        <ListItem key={index} item={email}/>
                                    )
                            })
                            :
                        <li>
                            <p>No emails in trash</p>
                        </li>
                    }
                </ul>
            </div>

        </div>
    );
}
export default Trash;
