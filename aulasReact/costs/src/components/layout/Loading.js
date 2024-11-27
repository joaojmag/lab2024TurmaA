import loading from "../../img/loading.gif"

import style from "./Loading.module.css"


export default function Loading() {
    return (
        <div className={style.loader_container} >
            <img  className={style.loader} src={loading} alt="Loading"  width={80} />
        </div>
    )
}