import HTTPRequest from 'src/api/index';

const apiPath = `/me`;

class MeRequest extends HTTPRequest {
  me(token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.get(`${apiPath}`, { headers });
  }
}

export default new MeRequest();
