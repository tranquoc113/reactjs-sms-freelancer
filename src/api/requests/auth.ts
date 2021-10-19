import HTTPRequest from 'src/api/index';

const apiPath = `/login`;

interface Credentials {
  email?: string;
  password?: string;
}

class AuthRequest extends HTTPRequest {
  postLogin(credentials: Credentials) {
    return this.post(`${apiPath}`, { ...credentials });
  }
}

export default new AuthRequest();
