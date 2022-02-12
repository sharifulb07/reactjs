export default function Text({addEmoji, addBracket}){
    let text= 'I am JavaScript Programing Language. ';

    if(addEmoji){
        text=addEmoji(text, '❤️')
    }
    if (addBracket){
        text=addBracket(text);
    }

    return <div> {text}</div>

}