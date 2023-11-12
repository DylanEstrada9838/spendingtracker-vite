const logout = () => {
  // Remove the token from local storage
  localStorage.removeItem("token");
  // Optionally, perform any additional logout-related actions
  // For example, redirect the user to the login page or update the UI
};

export default logout;
