import React from "react";
import '../css/modal.css';

const AddModalWin = ({activ, setActive, children}) => {
    return(
        <div className={activ ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className={activ ? "modalContent active": "modalContent"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default AddModalWin;