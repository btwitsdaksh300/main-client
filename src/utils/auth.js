const dummyCredentials = {
    userId: 'dummyUser',
    password: 'password'
  };
  
  export const login = async (userId, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === dummyCredentials.userId && password === dummyCredentials.password) {
          resolve({ success: true, message: "Login successful!" });
        } else {
          reject({ success: false, message: "Invalid credentials" });
        }
      }, 1000); 
    });
  };
  
  export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return !!user;
  };
  
  export const logout = () => {
    localStorage.removeItem('user');
  };
  