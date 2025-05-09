import React , {useState} from 'react'
import PopUpContent from './PopUpContent';

export default function CopyInput() {
    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);


const handleCoppy=()=>{
    navigator.clipboard.writeText(inputValue).then(()=>{
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        },2000)
    })
}

  return (
    <div>

        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='border-2 border-gray-300 p-2 rounded-md' />    
      <button onClick={handleCoppy}>copy</button>
      <PopUpContent copied={copied} />
    </div>
  )
}
