// components/Contacto.js
import { useState } from 'react';

export default function Contacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('Todos los campos son obligatorios');
            setSuccess('');  
        } else {
            setError('');
            setTimeout(() => {
                setSuccess('¡Mensaje enviado exitosamente!');
                setName('');
                setEmail('');
                setMessage('');
            }, 1000); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg bg-card-custom text-soft-dark ">
            <h2 className="text-4xl font-extrabold mb-6 text-teal-700 font-sans">Contáctanos</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-teal-700 mb-2">Nombre</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Nombre" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="max-w-md mx-auto w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-teal-700 mb-2">Email</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="max-w-md mx-auto w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-teal-700 mb-2">Mensaje</label>
                <textarea 
                    id="message"
                    placeholder="Mensaje" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    className="max-w-md mx-auto w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                    rows="4"
                />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <button 
                type="submit" 
                className="max-w-md mx-auto w-full py-2 bg-gradient-custom text-white font-semibold rounded hover:bg-pink-600"
            >
                Enviar
            </button>
        </form>
    );
}
