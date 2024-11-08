class ErrorHandler extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.statusCode = status;
  }
}

export default ErrorHandler;
