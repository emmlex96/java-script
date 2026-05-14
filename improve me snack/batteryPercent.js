function getBattery(phone) {
  return phone.battery;
}

const phone = { brand: "Samsung", battery: 75 };
console.log(getBattery(phone)); 
