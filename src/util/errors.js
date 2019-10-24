module.export = class RequiredParameterError extends Error{
  constructor(param){
    super(`${param} can not be null or undefined`);

    if(Error.captureStackTrace){
      Error.captureStackTrace(this, RequiredParameterError);
    }
  }
}

module.export = class InvalidPropertyError extends Error{
  constructor(msg){
    super(msg);
    if(Error.captureStackTrace){
      Error.captureStackTrace(this, InvalidPropertyError);
    }
  }
}