import React from 'react';
import './carList.css';

const CarList = ({cars, onEdit, onDelete}) => {
    console.log("carList", cars);
    
    return (
        <div className="car-list-container">
            <h1 className="car-list-title">Available Cars</h1>
            <div className="car-list">
                {cars.length === 0 ? (
                    <p className="no-cars">No cars available at the moment.</p>
                ) : (
                    cars.map((car) => (
                        <div key={car.id} className="car-item">
                            <div className="car-header">
                                <h2>{car.brand}</h2>
                            </div>
                            <div className="car-details">
                                <p><span>Model:</span> {car.model}</p>
                                <p><span>Price:</span> ${Number(car.price).toLocaleString()}</p>
                            </div>
                            <div className="car-actions">
                                <button className="edit-btn" onClick={() => onEdit(car)}>Edit</button>
                                <button className="delete-btn" onClick={() => onDelete(car.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CarList;