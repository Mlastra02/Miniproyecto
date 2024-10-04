// components/Seccion3.js
export default function Seccion3() {
    return (
        <div className="p-6 rounded-lg shadow-lg bg-card-custom">
            <h2 className="text-4xl font-extrabold mb-6 text-teal-700 font-sans">
                Nuestros Servicios
            </h2>
            <div className="space-y-8 mx-4">
                <div className="p-6 rounded-lg shadow-lg bg-card-custom">
                    <h3 className="text-2xl font-bold mb-4 text-teal-700">
                        Desarrollo Web
                    </h3>
                    <p className="text-lg leading-relaxed">
                        Ofrecemos soluciones de desarrollo web a medida para <a className="underline decoration-teal-500">satisfacer las necesidades específicas</a> de cada cliente.
                    </p>
                </div>
                <div className="p-6 rounded-lg shadow-lg bg-card-custom">
                    <h3 className="text-2xl font-bold mb-4 text-teal-700">
                        Consultoría en TI
                    </h3>
                    <p className="text-lg leading-relaxed">
                        Brindamos consultoría estratégica en tecnología de la información para <a className="underline decoration-teal-500">ayudar a las empresas a alcanzar sus objetivos.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
