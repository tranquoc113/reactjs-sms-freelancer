import HTTPRequest from 'src/api/index';

const apiPath = '/register-shipment';

export interface GetList extends App.RequestParams {}

class RegisterShipmentRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new RegisterShipmentRequest();
