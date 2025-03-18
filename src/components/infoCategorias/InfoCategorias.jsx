const  InfoCategorias =  ({ info, onClick }) => {
    return(
        <div onClick={() => onClick(info)}
        className="cursor-pointer p-5 m-2 bg-green-500 hover:bg-cyan-600 rounded-lg">
            ✔️ {info.categoria}
        </div>
    )
}

export default InfoCategorias