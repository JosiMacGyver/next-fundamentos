export default function Jsx() {
    const a = 4
    const b = 3

    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    //para adicionar trechos js em jsx, é necessário um par de {}
    return(
        <div>
            {titulo}
            {subtitulo()}
            {a*b}
        </div>
    )
}