import HTTPRequest from 'src/api/index';

const apiPath = '/member-group';

export interface GetList extends App.RequestParams {}

class MemberGroupRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }
}

export default new MemberGroupRequest();
