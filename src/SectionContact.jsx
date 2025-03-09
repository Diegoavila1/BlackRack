export const SectionContact = () => { 
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
        style={{ 
            backgroundImage: "url('src/Img/contactanos.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
        }}>

            <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
            <div className="w-full max-w-2xl space-y-6">
                <div>
                    <legend className="text-xl font-semibold">Email</legend>
                    <p className="text-gray-700">hello@tyler.com</p>
                </div>
                <div>
                    <legend className="text-xl font-semibold">Número de Teléfono</legend>
                    <p className="text-gray-700">299-xxx-xxxx</p>
                </div>
                <div>  
                    <legend className="text-xl font-semibold">Ubicación</legend>
                    <p className="text-gray-700">Av. Principal 123, Ciudad</p>
                </div>
            </div>

            {/* Icono de Instagram */}
            <div className="mt-8">
                <a href="#" target="_blank">
                    <img src="src/Img/instagram-icon.png" alt="Instagram" className="w-12 h-12" />
                </a>
            </div>
        </section>
    );
};

export default SectionContact;

