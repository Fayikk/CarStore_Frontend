const API_URL = process.env.REACT_APP_BASE_URL 


export const getCars = () => fetch(API_URL).then(res => res.json());


export const getCar = (id) => fetch(`${API_URL}/${id}`).then(res => res.json());

export const createCar = (car) => fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
}).then(res => res.json());


export const updateCar = (car) => fetch(`${API_URL}/${car.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
}).then(res => console.log(res));

export const deleteCar = (id) => fetch(`${API_URL}/${id}`, {
    method: "DELETE"
}).then(res => console.log(res));