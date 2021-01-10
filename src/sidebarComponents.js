import React from 'react'
import "./sidebarComponents.css";

function sidebarComponents({Icon,title,number}) {
    return (
        <div className="sidebarComponents">
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>

        </div>
    )
}

export default sidebarComponents
