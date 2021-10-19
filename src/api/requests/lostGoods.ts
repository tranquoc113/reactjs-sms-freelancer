import HTTPRequest from 'src/api/index';

const apiPath = '/lost';

export interface GetList extends App.RequestParams {}

class LostGoodsRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new LostGoodsRequest();
