import { useState } from 'react';

export default function SeccionInscripcion() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [event, setEvent] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || email === '' || event === '' || date === '' || time === '') {
            setMessage('Todos los campos son obligatorios');
        } else {
            // Enviar datos al backend
            const res = await fetch('/api/inscribir', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, event, date, time }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
            } else {
                setMessage('Hubo un error al inscribirse');
            }

            // Reiniciar formulario
            setName('');
            setEmail('');
            setEvent('');
            setDate('');
            setTime('');
        }
    };

    // Deportes con fechas y horarios específicos
    const sportsEvents = {
        'Tenis': ['2024-10-05', '2024-10-06', '2024-10-07', '2024-10-08'],
        'Fútbol': ['2024-10-12', '2024-10-13', '2024-10-19', '2024-10-20'],
        'Atletismo': ['2024-11-01', '2024-11-02', '2024-11-03', '2024-11-04'],
        'Baloncesto': ['2024-11-15', '2024-11-16', '2024-11-17', '2024-11-18'],
    };

    // Horarios predefinidos para inscripción
    const availableTimes = ['09:00', '11:00', '13:00', '15:00', '17:00'];

    return (
        <section id="SeccionInscripcion" className="bg-soft-custom py-12">
            <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg bg-card-custom">
                <h2 className="text-4xl font-extrabold mb-6 text-soft-dark font-sans text-center">
                    Inscripción para Eventos Deportivos
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-soft-dark mb-2">Nombre completo</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 input-border-custom rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="Escribe tu nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-soft-dark mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 input-border-custom rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="Escribe tu email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="event" className="block text-soft-dark mb-2">Selecciona un evento deportivo</label>
                        <select
                            id="event"
                            value={event}
                            onChange={(e) => setEvent(e.target.value)}
                            className="w-full p-3 input-border-custom rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            <option value="">Selecciona un evento</option>
                            {Object.keys(sportsEvents).map((sportEvent, index) => (
                                <option key={index} value={sportEvent}>
                                    {sportEvent}
                                </option>
                            ))}
                        </select>
                    </div>
                    {event && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="date" className="block text-soft-dark mb-2">Selecciona la fecha</label>
                                <select
                                    id="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full p-3 input-border-custom rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                                >
                                    <option value="">Selecciona una fecha</option>
                                    {sportsEvents[event].map((eventDate, index) => (
                                        <option key={index} value={eventDate}>
                                            {eventDate}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="time" className="block text-soft-dark mb-2">Selecciona la hora</label>
                                <select
                                    id="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="w-full p-3 input-border-custom rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                                >
                                    <option value="">Selecciona un horario</option>
                                    {availableTimes.map((timeOption, index) => (
                                        <option key={index} value={timeOption}>
                                            {timeOption}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </>
                    )}
                    {message && <p className="mb-4 text-center text-red-500">{message}</p>}
                    <button type="submit" className="w-full bg-gradient-custom text-white font-semibold py-3 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
                        Inscribirse
                    </button>
                </form>
            </div>
        </section>
    );
}
