export default function Cabecalho(props) {

    //props são objetos somente leitura
    console.log(props.titulo)

    return (
        <header>
            <h1> {props.titulo} </h1>
        </header>
    )
}