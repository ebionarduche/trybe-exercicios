
const emailListInData = [
  'ebionarduche77@gmail.com',
  'beatrizmediatto@gmail.com',
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];





const enviarEmail = (email) => {
  console.log(`O ${email} está cadastrado no nosso banco de dados!`)
}

emailListInData.forEach((item, posicao, array) => {
  enviarEmail(item);
  console.log(`sua na prova do bb foi de ${posicao + 1}`);
  console.log(`em meio de ${array.length} processo seletivo`);
})







// const enviarEmail = (email) => {
//   console.log(`Email para ${email} foi enviado com sucesso!`)
// };

// emailListInData.forEach((item, posicao, array) => {
//   enviarEmail(item);
//   console.log(`Sua posição é: ${posicao + 1}`);
//   console.log((`quantidade de pessoas no processo seletivo é: ${array.length}`));

// })















