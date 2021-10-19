declare namespace SearchParams {
  export interface User {
    search_type?: string; //omit
    search_text?: string;

    has_ttuta_profile?: string;
    activity_status?: string;
    battery?: number | string;

    period_search?: string; //omit
    from_date?: string;
    to_date?: string;

    quick_period_search?: string; //omit
  }

  export interface StockStatus {
    store_nm?: string;
    store?: string;
    type?: string;
    group_store?: string;
    processor_nm?: string;
    serial_number?: string;
    modified_from_date?: string;
    modified_to_date?: string;
    from_date?: string;
    to_date?: string;
    quick_period_search?: string;
    device_status?: string;
  }

  export interface DataAgency {
    name?: string;
    company_name?: string;
    business_type_level_1?: string;
    business_type_level_2?: string;
  }

  export interface RegisterShipment {
    release_date?: string;
    store_stock?: string;
    shipment_unit_price?: string;
    memo?: string;
    shipment_type?: string;
  }

  export interface RegisterShipmentSearch {
    agency?: string;
    serial_number?: string;
    device_name?: string;
    group_store?: string;
    processor_nm?: string;
    serial_no?: string;
    modified_from_date?: string;
    modified_to_date?: string;
    from_date?: string;
    to_date?: string;
    quick_period_search?: string;
    device_status?: string;
  }

  export interface DataStore {
    region?: string;
    store_group?: string;
    business_number?: string;
    email?: string;
    store_name?: string;
    ceo_name?: string;
    to_date?: string;
    from_date?: string;
  }

  export interface DataStoreConnectionApproval {
    business_name?: string;
    business_number?: string;
    to_date?: string;
    from_date?: string;
  }

  export interface ShipmentCheck {
    region?: string;
    store_group?: string;
    business_number?: string;
    email?: string;
    store_name?: string;
    ceo_name?: string;
    to_date?: string;
    from_date?: string;
  }

  export interface DeliveryCheck {
    shipment_store: string;
    device_name: string;
    search_device: string;
    device_name_list: string;
    processor_nm: string;
    serial_number: string;
    modified_from_date: string;
    modified_to_date: string;
    from_date: string;
    to_date: string;
    quick_period_search: string;
    device_status: string;
    state_cls: string;
  }

  export interface LostGoods {
    processing_date: string;
    memo: string;
  }

  export interface LostGoodsSearch {
    serial_no: string;
    serial_number: string;
    name_of_holder: string;
    processor: string;
    modified_from_date: string;
    modified_to_date: string;
    lost_type: string;
  }

  export interface ChangeStatus {
    barcode?: string;
    serial_number?: string;
    shipment_store?: string;
    processor?: string;
    process_from_date?: string;
    process_to_date?: string;
    process_type?: string;
  }

  export interface DataMemberSearch {
    member_group?: string;
    member_name?: string;
    store_name?: string;
  }

  export interface DataMember {
    memberId?: string;
    name?: string;
    businessName?: string;
    phoneNumber?: string;
    memo?: string;
    email?: string;
    memberGroup?: string;
  }

  export interface MemberGroup {
    member_group: string;
  }
}
