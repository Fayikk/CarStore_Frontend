import './App.css';
import {useEffect, useState} from 'react';
import { createCar, deleteCar, getCars, updateCar } from './api';
import CarForm from './Form/carForm';
import CarList from './List/carList';
function App() {
  const [cars,setCars] = useState([]);

  const [selectedCar, setSelectedCar] = useState(null);

  const loadCars = async () => {
    const data = await getCars();
    console.log(data);
    setCars(data);//
  }

  useEffect(()=>{
    loadCars();
  },[])


  const handleSave = async (car) => {
    if (car.id) {
      await updateCar(car);
    } else {
      await createCar(car);
    }
    setSelectedCar(null);
    loadCars();
  }

  const handleDelete = async (id) => {
    await deleteCar(id);
    loadCars();
  }



  return (
    <div className="App">
     <h1>Cars Store / Last Video For This Section</h1>
    <CarForm selectedCar={selectedCar} onSave={handleSave} />
    <CarList cars={cars} onEdit={setSelectedCar} onDelete={handleDelete} />
    </div>
  );
}

export default App;
