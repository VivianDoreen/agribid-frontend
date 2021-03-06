export const getUser = ({ loginReducer }) => loginReducer.user;
export const getError = ({ loginReducer }) => loginReducer.error;
export const getToken = ({ loginReducer }) => loginReducer.token;
export const getIsLoading = ({ loginReducer }) => loginReducer.isLoading;
