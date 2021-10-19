import HTTPRequest from 'src/api/index';

const apiPath = '/stores';

export interface GetList extends App.RequestParams {}
export interface GetListStoreGroup extends App.RequestParams {}
export interface GetDetail {
  id: string;
}
export interface PostStoreRegistration {
  payload: {
    store_group_id?: number;
    salesperson_id?: number;
    name?: string;
    manager_name?: string;
    business_number?: number;
    business_type_level_1?: number;
    business_type_level_2?: number;
    tax_bill?: string;
    email?: string;
    fax?: string;
    area_id?: string;
    address?: string;
    bank_name?: string;
    depositor_name?: string;
    account_number?: string;
    url?: string;
    insured_date_from?: string;
    insured_date_to?: string;
    unit_price_id?: string;
    contacts?: string[];
  };
}

export interface PutStoreRegistration {
  id?: string;
  payload: {
    store_group_id?: number;
    salesperson_id?: number;
    name?: string;
    manager_name?: string;
    business_number?: number;
    business_type_level_1?: number;
    business_type_level_2?: number;
    tax_bill?: string;
    email?: string;
    fax?: string;
    area_id?: string;
    address?: string;
    bank_name?: string;
    depositor_name?: string;
    account_number?: string;
    url?: string;
    insured_date_from?: string;
    insured_date_to?: string;
    unit_price_id?: string;
    contacts?: string[];
  };
}

class DataStoreRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }

  getDetail({ id }: GetDetail) {
    return this.get(`${apiPath}/${id}`);
  }

  updateStoreRegistration({ payload, id }: PutStoreRegistration) {
    return this.put(`${apiPath}/${id}`, { ...payload });
  }

  createStoreRegistration(payload: PostStoreRegistration) {
    return this.post(apiPath, { ...payload });
  }

  getListStoreGroup(params: GetListStoreGroup) {
    return this.get(`${apiPath}/groups`, { params });
  }
}

export default new DataStoreRequest();
