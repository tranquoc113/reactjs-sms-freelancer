import HTTPRequest from 'src/api/index';

const apiPath = '/unit-price-list';

export interface GetList extends App.RequestParams {}

class UniPriceListRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new UniPriceListRequest();
