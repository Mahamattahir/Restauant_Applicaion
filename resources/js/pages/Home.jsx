import React from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

const Home= ()=> {
    const { menu } = usePage().props;

    const handleOrder = (dishId) => {
        const tableNumber = prompt("Veuillez entrer votre numéro de table :");
        if (tableNumber) {
            // Logique pour passer la commande (via Inertia POST ou autre).
            console.log(`Commande passée pour le plat ${dishId}, Table ${tableNumber}`);
        }
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
             <Link href="/qrcode" className="gap btn px-0 ml-2 pt-3" style={{ border: 'none' }}>
                    QRcode
            </Link>
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1>Bienvenue dans notre Restaurant</h1>
                <p>Sélectionnez votre plat et commandez en ligne !</p>
            </header>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {menu.map((dish) => (
                    <div key={dish.id} style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center', width: '250px' }}>
                        <img src={dish.image} alt={dish.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                        <h3>{dish.name}</h3>
                        <p>{dish.price.toFixed(2)} €</p>
                        <button
                            onClick={() => handleOrder(dish.id)}
                            style={{ padding: '0.5rem 1rem', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}
                        >
                            Commander
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;