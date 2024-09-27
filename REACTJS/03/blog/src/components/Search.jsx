import { useState } from "react"

export default function Search(props)
{
    const [search, setSearch] = useState("");

    const onSearchHandler = event => {
        console.log("Search Component: " +event.target.value);
        setSearch(event.target.value);
        props.onSearchChange(event.target.value);
    }

    

    return(
        <>
        <div>
            Cari Artikel : <input onChange={onSearchHandler}></input>
        </div>
        <small>Ditemukan {props.postLen} data dengan pencarian kata "{search}"</small>
        </>
    )
}