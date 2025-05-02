import { useState } from "react";
import { useEffect } from "react";
import "./carForm.css";

export default function CarForm({selectedCar,onSave}){
    const [car, setCar] = useState({brand: "", model: "", year: 0});

    useEffect(() => {
        if (selectedCar) {
            setCar(selectedCar);
        }
    }, [selectedCar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(car);
    };

    return (
        <div className="car-form-container">
            <div className="car-form-card">
                <h2 className="form-title">{car.id ? "Update Car" : "Add New Car"}</h2>
                <form onSubmit={handleSubmit} className="car-form">
                    <div className="form-group">
                        <label htmlFor="brand">Brand</label>
                        <input 
                            type="text" 
                            id="brand"
                            name="brand" 
                            value={car.brand} 
                            onChange={handleChange} 
                            placeholder="Enter car brand" 
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input 
                            type="text" 
                            id="model"
                            name="model" 
                            value={car.model} 
                            onChange={handleChange} 
                            placeholder="Enter car model" 
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" 
                            id="price"
                            name="price" 
                            value={car.price || ''} 
                            onChange={handleChange} 
                            placeholder="Enter car price" 
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="submit-button">
                        {car.id ? "Update Car" : "Add Car"}
                    </button>
                </form>
            </div>
        </div>
    );
}