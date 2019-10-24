const requiredParam = require('../util/required-param');
const { InvalidPropertyError } = require('../util/errors');
const { normalizeCep, normalizeCpf } = require('../util/normalize');
const { isValidCep, isValidCpf } = require('../util/validate');

module.exports = function makeClient(clientInfo = requiredParam('clientInfo')){
  
  const normalClient = normalize(clientInfo);
  const validClient = validate(normalClient);

  return Object.freeze(validClient);

  function validate({
    cpf = requiredParam('cpf'),
    name = requiredParam('name'),
    cep = requiredParam('cep'),
    ...otherInfo
  } = {}){
    validateCpf(cpf);
    validateName(name);
    validateCep(cep);
    return { cpf, name, cep, ...otherInfo };
  }

  function validateCpf(cpf){

    if(!isValidCpf(cpf)){
      throw new InvalidPropertyError(`CPF Invalid`);
    }
  }

  function validateName(name){
    if(name.length < 2){
      throw new InvalidPropertyError('Client Name Invalid');
    }
  }

  function validateCep(cep){
    if(!isValidCep(cep)){
      throw new InvalidPropertyError('CEP Invalid');
    }
  }

  function normalize({ cpf, cep, ...otherInfo }){
    return {
      cpf: normalizeCpf(cpf),
      cep: normalizeCep(cep),
      ...otherInfo
    }
  }
}