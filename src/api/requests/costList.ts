import HTTPRequest from 'src/api/index';

const apiPath = '/cost-list';

export interface GetList extends App.RequestParams {}

class CostListRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new CostListRequest();
