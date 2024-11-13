import Item from "./Item"

function List (){
 return(
    <>
        <h2>Lista Itens</h2>
        <ul>
            <li>Item 1</li>
            <Item marca="BMW" lancamento={1985}/>
            <Item marca="Jeep" lancamento={2006}/>
        </ul>
    </>
 )   
}

export default List