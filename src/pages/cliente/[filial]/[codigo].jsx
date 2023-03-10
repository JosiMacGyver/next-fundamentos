import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

//aula 98, router de código capiroto
export default function ClienteProCodigo(){
    
    const router = useRouter()

    useEffect(() => {
        console.log(router.query.codigo)
    }, [])

    return( 
        <Layout titulo="Navegação Dinâmica">
            <div>Código={router.query.codigo}</div>
            <div>Filial={router.query.filial} </div>
        </Layout>
    )     
}