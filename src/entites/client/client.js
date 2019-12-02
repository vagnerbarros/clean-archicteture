export default function buildMakeClient ({ sanitize, validate }) {
  return function makeClient ({ cpf, name, age, createdOn = Date.now(), deleted = false } = {}) {
    if (!cpf) {
      throw new Error('CPF is required')
    }
    if (!validate.isValidCpf(cpf)) {
      throw new Error('CPF Invalid')
    }

    let sanitizeName = sanitize(name).trim()
    if (sanitizeName.length < 1) {
      throw new Error('Name contains no usable text')
    }

    if (sanitizeName.length > 100) {
      throw new Error('Name must be not longer then 100')
    }

    return Object.freeze({
      getCpf: () => cpf,
      getName: () => sanitizeName,
      getAge: () => age,
      getCreatedOn: () => createdOn,
      isDeleted: () => deleted,
      markDeleted: () => {
        deleted = true
      }
    })
  }
}
