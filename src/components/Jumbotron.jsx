import React from 'react'
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';


export const JumbotroN = () => {
    return (
        <Jumbotron>
            <Display4>Encuentra todos para tu recuperación en el mismo lugar</Display4>
            <Lead>Llámanos hoy mismo para obtener más información sobre nuestros productos y servicios.</Lead>
            <hr className="my-4" />
            <p>La kinesiología y la rehabilitación son disciplinas que se ocupan de la prevención, diagnóstico y tratamiento de las lesiones y trastornos musculoesqueléticos. Los profesionales de estas áreas utilizan una amplia gama de productos y equipos para ayudar a sus pacientes a recuperarse y mejorar su función.</p>
            <Button primary lg>Learn more</Button>
        </Jumbotron>)
}
