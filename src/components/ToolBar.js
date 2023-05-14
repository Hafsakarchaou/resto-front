import React from 'react'

const ToolBar = ({openSidenav}) => {
    return (
      <div className="tool-bar">
        <div  onClick={openSidenav}>
          <i className="ri-menu-line"></i>
              <div>
                  hafsa's code
              </div>
        </div>
      </div>
    );
  }

export default ToolBar