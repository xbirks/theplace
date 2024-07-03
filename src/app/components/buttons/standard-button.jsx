import React from 'react';




function StandardButton({link, title, style}) {
   
    return(
   
   <div className="master_button">
        <a href={link}>
            <div className={`button ${style}`}>
                <p>{title}</p>
            </div>
        </a>
  </div>

);
}

export default StandardButton;




