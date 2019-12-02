export default function makeValidate () {
  return Object.freeze({
    validateCpf
  })

  function validateCpf (cpf = '') {
    if (cpf.length === 11) {
      return true
    } else {
      return false
    }
  }
}
