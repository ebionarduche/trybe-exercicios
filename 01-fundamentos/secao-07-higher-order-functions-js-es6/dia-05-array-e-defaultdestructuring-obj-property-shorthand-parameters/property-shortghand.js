const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }


const multiply = (number, value = 1) => {
  return (number * value)  
};

console.log(multiply(8));