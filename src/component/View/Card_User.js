import React from 'react'
// import "./Card.css"
import StorageIcon from '@material-ui/icons/Storage';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import doc_image from "./../../image/party_invite.png"
import { useHistory } from "react-router-dom";


function Card_User({name}) {
    const history = useHistory();
    console.log("name",name)
    function navigate_to(docname){
        history.push("/report/" + docname)

    }
    return (
        <div className="doc_card" onClick={(e)=>{
            navigate_to(name.id)
        }}>
             <img src={doc_image} className="doc_card_image"></img>
             <div className="doc_card_content">
                <h5 style={{overFlow:"ellipsis"}}>{name ? name.document_name : " Tài liệu không có tiêu đề" }</h5>
                <div className="doc_content">
                    <div className="content_left" style={{fontSize:"12px",color:"grey"}}>
                    <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>   Opened 6 Jan 2021
                    </div>
                    
                     <MoreVertIcon style={{color:"grey",fontSize:"16px"}} />
                </div>
             </div>
        </div>
       
    )
}

export default Card_User
