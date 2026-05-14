const car = {brand: "Toyota",model:"Camry", available:true};

function checkAvailability(car) {
    if(car.available){
        return"This car is available";
        }
        return"This car is not available";
        }
        console.log(checkAvailability(car));
