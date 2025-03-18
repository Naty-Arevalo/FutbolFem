const InfoModal = ({ info, onClose}) =>{
    if(!info) return null;

    return(
        <div className="relative ">
            <div className="absolute left-0  bottom-0 bg-yellow-300 p-5 rounded-md align-center border-4 border-indigo-600 hover:border-orange-300">
                <h1>Entrenamientos:</h1>
                <h2>Dias: {info.dias}</h2>
                <h3>Horario: {info.horarios}</h3>
                <button onClick={onClose} className="border-solid border-4 p-1 mt-6">Cerrar</button>
            </div>
        </div>
    )
}

export default InfoModal