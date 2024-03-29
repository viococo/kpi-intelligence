// Définitions des services
const sendApiErrorResponse = (
  response,
  errorMessage = "Une erreur est survenue",
  error = true
) => {
  return response.status(500).json({
    message: errorMessage,
    error,
    data: null
  });
};

const sendApiSuccessResponse = (response, successMessage, data) => {
  return response.status(200).send({
    message: successMessage,
    err: null,
    data: data
  });
};

// Exports
module.exports = { sendApiErrorResponse, sendApiSuccessResponse };
