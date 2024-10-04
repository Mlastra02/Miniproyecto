// components/Galeria.js
import { useState } from 'react';

export default function Galeria() {
    const [expandedImage, setExpandedImage] = useState(null);
    const [showImages, setShowImages] = useState(true);

    const toggleImage = (index) => {
        setExpandedImage(expandedImage === index ? null : index);
    };

    const toggleShowImages = () => {
        setShowImages(!showImages);
        setExpandedImage(null);
    };

    const images = [
        "https://www.deporteazul.cl/main_wp/wp-content/uploads/2017/06/19055886_1546968008712006_3508284613243486271_o-300x200.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iH7Cer4yFfdqUTZIXgzVcmRaS9rBoHESzQ&s",
        "https://www.deporteazul.cl/main_wp/wp-content/uploads/2024/09/JOE-2-300x200.png",
        "https://www.davidnoticias.cl/wp-content/uploads/2024/07/Brujas-gana-a-Valdivia-300x200.jpg"
    ];

    return (
        <section id="seccion2" className="text-center py-4 mx-4 mt-8 text-soft-dark">
            <h2 className="text-4xl font-extrabold mb-6 text-teal-700 font-sans text-soft-dark">
                Galería
            </h2>
            <div>
                <button
                    onClick={toggleShowImages}
                    className="mb-6 px-4 py-3 bg-gradient-custom text-soft-light font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                    {showImages ? 'Ocultar Imágenes' : 'Mostrar Imágenes'}
                </button>
            </div>
            {showImages && (
                <sub className="text-lg font-semibold mb-4">Haz clic en una imagen para ampliarla</sub>
            )}
            <div className={`flex justify-center py-5 space-x-4 transition-opacity duration-300 ${showImages ? 'opacity-100' : 'opacity-0'}`}>
                {images.map((src, index) => (
                    <div key={index} onClick={() => toggleImage(index)} className="cursor-pointer">
                        {showImages && (
                            <img
                                src={src}
                                alt={`Imagen ${index + 1}`}
                                className={`rounded-lg shadow-lg transition-transform duration-300 ${expandedImage === index ? 'transform scale-150' : ''}`}
                                style={{ width: expandedImage === index ? '400px' : '300px', height: expandedImage === index ? '267px' : '200px' }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
