module.exports = function makeHttpError({ statusCode, errorMessage }){
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode,
    data: JSON.stringify({
      sucess: false,
      error: errorMessage
    })
  };
}