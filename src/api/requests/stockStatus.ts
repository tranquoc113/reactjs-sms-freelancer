import HTTPRequest from 'src/api/index';

const apiPath = '/stock-status';

export interface GetList extends App.RequestParams {}

class StockStatusRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new StockStatusRequest();
