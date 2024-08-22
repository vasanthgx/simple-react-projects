import { useState } from 'react';
import QRcode from 'react-qr-code';
import './styles.css'

export default function QrGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
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

      </div>
      
    </div>
  )
}
