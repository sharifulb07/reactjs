import React from "react";


export default class Emoji extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    

    addEmoji=(text, emoji)=>`${emoji} ${text} ${emoji} `;

    render(override){
        let text='I am the emoji text here';
        if(override) text=override;
        return <div>{text}</div>
    }
}