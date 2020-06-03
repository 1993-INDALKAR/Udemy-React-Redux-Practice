import React from "react";
import ReactDOM from "react-dom";



const modal = props => {
    return ReactDOM.createPortal(


        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                
                    <div class="header">{props.title}</div>
                    <div class="content">
                        <p>{props.description}</p>
                    </div>
                    <div class="actions">
                        {props.actions}
                    </div>
               
            </div>
        </div>,
        document.querySelector("#modal")
    )
};

export default modal;