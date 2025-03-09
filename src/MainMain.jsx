export const MainMain = () => {
    return (
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src="src/Img/levantamientoPesasjpg.jpg"
          alt="Imagen Principal"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center p-5">
          <h1 className="text-5xl text-white font-bold mb-4">Black Rack</h1>
          <p className="text-5xl text-white mb-6">Gym y Entrenamiento Especializado</p>
          <button className="bg-white text-black py-2 px-6 rounded-lg hover:bg-gray-300 transition">
            Ver más
          </button>
        </div>
      </div>
    );
  };
  
  export default MainMain;
  
  