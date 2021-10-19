import HTTPRequest from 'src/api/index';

const apiPath = '/agencies';

export interface GetList extends App.RequestParams {}

export interface GetDetail {
  id: string;
}

export interface PostAgency {
  payload: {
    code_num?: string;
    name?: string;
    company_name?: string;
    manager_name?: string;
    manager_phone?: string;
    business_number?: number;
    business_type_level_1?: number;
    business_type_level_2?: number;
    tax_bill?: string;
    email?: string;
    fax?: string;
    area_id?: string;
    bank_name?: string;
    depositor_name?: string;
    account_number?: string;
    phone_contacts?: string[];
  };
}

export interface PutAgency {
  id: string;
  payload: {
    code_num?: string;
    name?: string;
    company_name?: string;
    manager_name?: string;
    manager_phone?: string;
    business_number?: number;
    business_type_level_1?: number;
    business_type_level_2?: number;
    tax_bill?: string;
    email?: string;
    fax?: string;
    area_id?: string;
    bank_name?: string;
    depositor_name?: string;
    account_number?: string;
    phone_contacts?: string[];
  };
}

class AgencyRequest extends HTTPRequest {
  getList(params: GetList) {
    return this.get(apiPath, { params });
  }

  getDetail({ id }: GetDetail) {
    return this.get(`${apiPath}/${id}`);
  }

  createAgency(payload: PostAgency) {
    return this.post(apiPath, { ...payload });
  }

  updateAgency({ payload, id }: PutAgency) {
    return this.post(`${apiPath}/${id}`, { ...payload });
  }
}

export default new AgencyRequest();
