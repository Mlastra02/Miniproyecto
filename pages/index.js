import Seccion1 from '../components/Seccion1';
import Galeria from '../components/Galeria';
import Contacto from '../components/Contacto';
import SeccionInscripcion from '../components/SeccionInscripcion';


export default function Home() {
    return (
        <div className="bg-soft-custom text-soft-dark min-h-screen">
            <header className="bg-gradient-custom text-soft-light text-center py-6 rounded-b-md shadow-md mb-0">
                <h1 className="text-4xl font-bold">AMJ Innovation</h1>
            </header>

            <nav className="bg-gradient-custom text-soft-light text-center py-2 rounded-b-full shadow-lg mt-0 mb-0">
                <ul className="nav-list flex justify-center space-x-4 list-none p-0 m-0">
                    <li><a href="#seccion1" className="text-soft-light font-bold hover:text-teal-200">Inicio</a></li>
                    <li><a href="#seccion2" className="text-soft-light font-bold hover:text-teal-200">Galería</a></li>
                    <li><a href="#SeccionInscripcion" className="text-soft-light font-bold hover:text-teal-200">Inscripción</a></li>
                </ul>
            </nav>

            <main>
                <Seccion1 />
                <Galeria />
                <SeccionInscripcion />


            </main>

            <footer className="bg-gradient-custom text-center py-4">
                <p className="text-teal-100">&copy; 2024 Ejemplo de Sitio Web. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
