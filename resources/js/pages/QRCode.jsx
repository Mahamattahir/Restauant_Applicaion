import React from 'react';
import {QRCodeSVG} from 'qrcode.react'; // Assurez-vous d'utiliser la bonne importation

const QRCodePage = () => {
    const HomeUrl = 'http://10.60.1.211:8000/';  // Assurez-vous que l'URL est correcte
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Scanner le code QR pour voir le menu</h1>
            <QRCodeSVG  value={HomeUrl} size={256} />
        </div>
    );
};

export default QRCodePage;
