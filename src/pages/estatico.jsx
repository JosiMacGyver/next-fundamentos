import Layout from "../components/Layout";

//esse número é estático
export function getStaticProps() {
    return{
        props:{
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return(
        <Layout titulo="Pré-renderização estática">
            <div>{props.numero}</div>
        </Layout>
    )
}