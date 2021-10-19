import HTTPRequest from 'src/api/index';

const apiPath = '/areas/search';

export interface SearchArea {
  keyword: string;
  limit: number;
}

class AreaRequest extends HTTPRequest {
  searchArea(params: SearchArea) {
    return this.get(apiPath, { params });
  }
}

export default new AreaRequest();
