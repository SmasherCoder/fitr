import decode from 'jwt-decode';

class Auth {
  //Gets token from local storage
  getToken() {
    return localStorage.getItem('id_token')
  }

  //Returns decoded token
  getProfile() {
    return decode(this.getToken());
  }

  //Checks if toen is still valid
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if(decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  //Checks to see if a user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  //Saves token to local storage
  login(idToken) {
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  // Deleted token from local storage
  logout() {
    localStorage.removeItem('id_token');

    window.location.assign('/');
  }

}

export default new Auth();