class CustomErrorApi extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}
const createCustomError = (message, statusCode) => {
  return new CustomErrorApi(message, statusCode)
}

module.exports = { CustomErrorApi, createCustomError }
