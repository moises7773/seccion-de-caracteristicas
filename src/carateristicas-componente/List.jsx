import style from "./List.module.css"
function List({titulo, parrafo, imagen, color}){

    const bordeColor = {
        borderTop: `var(--${color}) 4px solid`
    }
    return (<>
    <li style={bordeColor} className={style.li}>
        <div className={style.div}>
            <h2 className="text-preset-3 grey-500">{titulo}</h2>
            <p className="text-preset-5 grey-400">{parrafo}</p>
        </div>
        <img src={imagen} className={style.img}/>
    </li>
    </>)
}

export default List