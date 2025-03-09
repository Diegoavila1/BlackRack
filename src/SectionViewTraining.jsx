export const SectionViewTraining = () => { 
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-10">
            <h1 className="text-center text-6xl font-bold mb-10">Plan de Entrenamiento</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-10/12 min-h-[700px]">
                {/* Bloque 1 */}
                <div className="flex flex-col items-center h-5/6">
                    <img 
                        src="src/Img/entrenamiento1.jpg" 
                        alt="Entrenamiento 1" 
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xl text-center mt-4 font-semibold">Entrenamiento de Fuerza</p>
                </div>

                {/* Bloque 2 */}
                <div className="flex flex-col items-center  h-5/6">
                    <img 
                        src="src/Img/entrenamiento2.jpg" 
                        alt="Entrenamiento 2" 
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xl text-center mt-4 font-semibold">Entrenamiento Funcional</p>
                </div>

                {/* Bloque 3 */}
                <div className="flex flex-col items-center  h-5/6">
                    <img 
                        src="src/Img/entrenamiento3.jpg" 
                        alt="Entrenamiento 3" 
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-xl text-center mt-4 font-semibold">Entrenamiento de Resistencia</p>
                </div>
            </div>
        </section>
    );
};

export default SectionViewTraining;
