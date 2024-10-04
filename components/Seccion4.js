// components/Seccion4.js
export default function Seccion4() {
    return (
        <div className="p-6 rounded-lg shadow-lg bg-card-custom">
            <h2 className="text-4xl font-extrabold mb-6 text-teal-700 font-sans">
                Testimonios
            </h2>
            <div className="space-y-8">
                <blockquote className="text-xl italic leading-relaxed">
                    <p className="mb-4 text-teal-600">“La mejor experiencia que hemos tenido con una empresa de tecnología. Altamente recomendados.”</p>
                    <footer className="text-right text-teal-700 font-semibold">- Juan Pérez, CEO de Empresa X</footer>
                </blockquote>
                <blockquote className="text-xl italic leading-relaxed">
                    <p className="mb-4 text-teal-600">“Su equipo es muy profesional y entregan resultados de alta calidad en poco tiempo.”</p>
                    <footer className="text-right text-teal-700 font-semibold">- María Gómez, Directora de Proyectos en Empresa Y</footer>
                </blockquote>
            </div>
        </div>
    );
}
