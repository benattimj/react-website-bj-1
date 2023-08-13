import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Card, Modal, Button } from 'react-bootstrap';



function Cards() {
  return (
    <div className='cards'>
      <h1>Veja agora destinos incríveis durante sua estádia</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            
            <CardItem
              src='images/img-9.jpg'
              text='Desfrute em nosso hotel próximo ao vibrante Parque do Sabiá e ao emocionante Estádio de Uberlândia.
                            '
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Um dos maiores e mais completos Shopping da região. Com cinema e restaurantes renomados. EM FRENTE'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Academias próximas, utilize seu GYMPASS e mantenha sua disciplina mesmo em viagens.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Universidade Federal de Uberlândia (UFU) próximo.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Deliciosos pratos tipicos mineiros direto das melhores cozinhas da região.'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Vertical Escalada / Localização com ótimas musicas e uma boa aventura'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;