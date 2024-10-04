// components/Micontacto.js
export default function Micontacto() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg bg-gradient-custom text-soft-light">
            <h2 className="text-2xl font-bold mb-4 text-soft-light">Contáctanos</h2>
            <div className="flex justify-center space-x-8">
                {/* Enlace de teléfono */}
                <a
                    href="tel:+123456789"
                    className="flex flex-col items-center text-soft-light hover:text-teal-200"
                    aria-label="Llamar"
                >
                    <img
                        src="https://img.icons8.com/ios-filled/50/000000/phone.png"
                        alt="Icono de teléfono"
                        className="w-12 h-12 mb-2"
                    />
                    <span className="text-lg">+56 9 1122 3344</span>
                </a>
                
                {/* Enlace de Instagram */}
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-soft-light hover:text-teal-200"
                    aria-label="Instagram"
                >
                    <img
                        src="https://cdn-icons-png.freepik.com/512/87/87390.png"
                        alt="Icono de Instagram"
                        className="w-12 h-12 mb-2"
                    />
                    <span className="text-lg">@Instagram</span>
                </a>
            </div>
        </div>
    );
}
