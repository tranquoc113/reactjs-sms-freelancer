import HTTPRequest from 'src/api/index';

const apiPath = '/data-member';

export interface GetList extends App.RequestParams {}

class DataMemberRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new DataMemberRequest();
