module.exports = function normalizeCep(cep){
  return cep.replace('.', '').replace('.', '').replace('-', '');
}

module.exports = function normalizeCpf(cpf){
  return cpf.replace('.', '').replace('.', '').replace('-', '');
}