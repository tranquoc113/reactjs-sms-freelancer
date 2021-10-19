import HTTPRequest from '../index';

const apiPath = '/user';

export interface GetList extends App.RequestParams {}

export interface PutUser {
  id: number;
  payload: {
    name?: string;
    question?: string;
  };
}

class UserRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }

  updateUser({ payload, id }: PutUser) {
    return this.put(`${apiPath}/${id}`, { ...payload });
  }
}

export default new UserRequest();
