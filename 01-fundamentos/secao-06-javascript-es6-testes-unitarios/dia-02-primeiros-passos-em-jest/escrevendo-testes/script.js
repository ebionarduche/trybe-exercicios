const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta`;
};

const loginErrorMessage = (user) => {
  return `Pessoa usuária ${user} não encontrada, tente novamente!`;
};

const user = {
  userName: 'Joana',
  password: 123456,
};

//Verifica usuário & senha e retorna messagem caso for true ou false;

const verifyCredentials = (userInfo) => {
  const userName = userInfo.userName;
  const password = userInfo.password;
  if (password === 123456 && userName === 'Joana') {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  };
};

//exporta funções para (script.test.js)

module.exports = {greetingMessage, loginErrorMessage, verifyCredentials};

