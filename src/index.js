import React from 'react'
import ReactDom from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import CompA, { CompB as B } from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'

const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <FamiliaSilva />
        <MultiElementos />
        <PrimeiroComponente valor="Bom Dia!" />
        <CompA valor="Olá Eu sou o A" />
        <B valor="B na Área!" />
    </div>
    , elemento)


// const jsx = <h1>Olá React!</h1>
// ReactDom.render(jsx, elemento)
