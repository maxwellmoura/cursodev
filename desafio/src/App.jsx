import './App.css';

import Principal from './assets/components/principal';
import ManageDate from './assets/components/ManageDate';
import ListRender from './assets/components/ListRender';
import CondicionalRender from './assets/components/CondicionalRender';
import ShowUserName from './assets/components/ShowUserName';
import Fragment  from './assets/components/Fragment';
import CarDetails from './assets/components/CarDetails';
import Container from './assets/components/Container';
import ExecuteFunction from './assets/components/ExecuteFunction';
import { useState } from 'react';
import Message from './assets/components/Menssage';
import ChangeMessageState from './assets/components/ChangeMessageState';

function App() {
  const name = "Gracy"

  const cars = [
    {id: 1, band: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, band: "Reneult", color: "Preto", newCar: false, km: 1000},
    {id: 3, band: "BMW", color: "Prata", newCar: true, km: 0},
    {id: 4, band: "Mecedes", color: "Branco", newCar: false, km: 50000}
  ]

  function showMessage(){
    console.log("Evento do componente Pai")
  }
  const [message, setMesage] = useState("");
  const handleMessage = (msg) =>{
    setMesage(msg);
  }


  return (
    <>
      <div>
        <Principal />
        <ManageDate />
        <ListRender/>
        <CondicionalRender />
        {/* props */}
        <ShowUserName name={name}/>
        {/* destructuring */}
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
        {/* reaproveitando */}
        <CarDetails brand="Ford" km={0} color="Preto" newCar={true} />
        <CarDetails brand="Fiat" km={50000} color="Prata" newCar={false} />
        {/* Loop em array de objetos */}
        {cars.map((car) =>(
          <CarDetails 
          key={car.id}
          brand={car.band}
          color={car.color}
          km={car.km}
          newCar={car.newCar} />
        ))}
        {/* fragments */}
        <Fragment />
        {/* Children */}
        <Container>
          <p>Esse é o conteúdo</p>
        </Container>
        {/* Executar função */}
        <ExecuteFunction myFunction={showMessage}/>
         {/* State Lift */}
         <Message msg={message}/>
         <ChangeMessageState handleMessage={handleMessage}/>
      </div>
      
    </>
  )
}

export default App
