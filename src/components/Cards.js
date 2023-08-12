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
              text='Academias próximas mantenha a persistência e saúde juntos aonde estiver'
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
              text='Deliciosos pratos tipicos mineiros na sua comodidade'
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