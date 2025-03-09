
export const Footer = () => { 
    return (
        <>
            <footer 
                className="w-full h-40 bg-gray-900 text-white flex flex-col justify-center items-center relative bg-cover bg-center"
            >
                {/* Capa de oscurecimiento */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Contenido del footer */}
                <div className="relative z-10 text-center">
                    <p className="text-lg font-semibold">Black Rack - 2025</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;

