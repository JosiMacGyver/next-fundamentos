// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//http://localhost:3000/api/hello?nome=Josi&idade=33

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'John Doe', 
    metodo: req.method,
    paramns: JSON.stringify(req.query),
    nome: req.query.nome,
    idade: + req.query.idade
  })
}
