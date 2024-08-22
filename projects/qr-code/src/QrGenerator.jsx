import { useState } from 'react';
import QRcode from 'react-qr-code';


export default function QrGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }


  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input type="text"
         value={input} 
         onChange={(e) => setInput(e.target.value)} 
         placeholder="Enter text" 
         name='qr-code'
         />
         <button
         disabled={input && input.trim() === '' ? false : true}
         onClick={handleGenerateQrCode}
         >Generate QR Code</button>

      </div>
      <div>
        <QRcode id='qr-code-value' value={qrCode} size={400} bgColor='#fff' />
      </div>
      
    </div>
  )
}
