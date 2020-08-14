import React from 'react';
import './SidebarOption.css';

/* Avec && et active true alors la classe dans la condition s'applique,
pour l'élement. Avec || c'est l'inverse, s'applique à tous les élèments
sauf élèment en question */
export default function SidebarOption({active,text,Icon}) {
    return (
       
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon /><h2>{text}</h2>
        </div>
    )
}
    