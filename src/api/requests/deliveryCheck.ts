import HTTPRequest from 'src/api/index';

const apiPath = '/delivery-check';

export interface GetList extends App.RequestParams {}

class DeliveryCheckRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new DeliveryCheckRequest();
