import HTTPRequest from 'src/api/index';

const apiPath = '/stock/change-status';

export interface GetList extends App.RequestParams {}

class ChangeStatusRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new ChangeStatusRequest();
