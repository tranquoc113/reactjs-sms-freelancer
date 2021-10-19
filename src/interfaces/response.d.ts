declare namespace Response {
  export type ActivityStatus = 'active' | 'blocked';

  export interface User {
    id: string;
    name: string;
    nickname: string;
    avatar: string;
    region: string;
    phone: string;
    level: string;
    ttutaProfile: string;
    loginTimes: string;
    lastVisit: string;
    signupDate: string;
    withdrawDate: string;
    activityStatus: ActivityStatus;
  }

  export interface StockStatus {
    id: string;
    type: string;
    deliveryDate: string;
    agency: string;
    releaseDate: string;
    store: string;
    groupStore: string;
    deviceName: string;
    serialNumber: string;
    shippingUnitPrice: string;
    color: string;
    status: string;
    detailType: string;
    updateUser: string;
    updateTime: string;
    uniqueNumber: string;
  }

  export interface RegisterShipment {
    id: string;
    deliveryDate: string;
    deliveryGroup: string;
    agent: string;
    deviceName: string;
    unitPrice: string;
    serialNumber: string;
    uniqueNumber: string;
  }

  export interface DataStore {
    id: string;
    area: string;
    name: string;
    manager_name: string;
    business_number: string;
    business_type_level_1: string;
    business_type_level_2: string;
    tax_bill: string;
    email: string;
    contacts: string;
    unit_price_id: string;
    salesperson_id: string;
    address: string;
    bank_name: string;
    depositor_name: string;
    account_number: string;
    url: string;
    insured_date_from: string;
  }

  export interface DataStoreConnectionApproval {
    id: string;
    member_id: string;
    member_name: string;
    business_name: string;
    business_number: string;
    ceo_name: string;
    phone_number: string;
    memo: string;
    management: string;
    connect: string;
    status: string;
    updateUser: string;
    updateTime: string;
  }

  export interface Agency {
    id: string;
    name?: string;
    company_name?: string;
    manager_name?: string;
    business_number?: string;
    manager_phone?: string;
    email?: string;
    fax?: string;
    address?: string;
    bank_name?: string;
    depositor?: string;
    account_number?: string;
    area_id?: string;
    business_type_level_1?: string;
    business_type_level_2?: string;
    headquarters_id?: string;
    tax_bill?: string;
    depositor_name?: string;
  }

  export interface DeliveryCheck {
    id: string;
    deliveryDate: string;
    deliveryGroup: string;
    shipmentStore: string;
    deviceName: string;
    unitPrice: string;
    serialNumber: string;
    uniqueNumber: string;
    holding: string;
    division: string;
    actualPrice: string;
    color: string;
    handler: string;
    lastUpdated: string;
  }

  export interface ShipmentCheck {
    id: string;
    releaseDate: string;
    warehousingAgency: string;
    outletStore: string;
    deliveryDate: string;
    storeGroup: string;
    terminalName: string;
    serialNumber: string;
    shippingUnitPrice: string;
    colorName: string;
    currentStatus: string;
    manager: string;
    lastUpdated: string;
    uniqueNumber: string;
  }

  export interface LostGoods {
    id: string;
    stateClassification: string;
    processingDate: string;
    deliveryDate: string;
    receiverName: string;
    wear: string;
    releaseDate: string;
    shipmentName: string;
    memo: string;
    serialNumber: string;
    uniqueNumber: string;
  }

  export interface ChangeStatus {
    id: string;
    status: string;
    processDate: string;
    nameHolder: string;
    deviceName: string;
    color: string;
    note: string;
    processor: string;
    serialNumber: string;
    uniqueNumber: string;
  }

  export interface DataMember {
    id: string;
    memberGroup: string;
    memberId: string;
    memberName: string;
    storeAgency: string;
    ceoName: string;
    phoneNumber: string;
    memo: string;
    management: string;
    status: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
  }

  export interface MemberGroup {
    id: string;
    no: number;
    memberGroup: string;
    category: string;
    menuName: string;
    function: string;
    management: number;
    lastModifiedBy: string;
    lastModifiedDate: string;
  }

  export interface UnitPriceList {
    id: string;
    name_model: string;
    new: number;
    number_movement: string;
    change: string;
  }

  export interface Area {
    id: string;
    name?: string;
  }

  export interface CostList {
    id: string;
    name_model: string;
    new: number;
    number_movement: string;
    change: string;
  }
}
