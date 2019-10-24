
module.exports = function isValidCpf(cpf){
  // todo: 
  if(cpf.length !== 11){
    return false;
  }
  else{
    return true;
  }
}

module.exports = function isValidCep(cep){

  //todo: 
  if(cep.length !== 8){
    return false;
  }
  else{
    return true;
  }
}