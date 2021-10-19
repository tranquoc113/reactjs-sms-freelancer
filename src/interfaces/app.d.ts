declare namespace App {
  import { OptionCoreData } from 'rc-select/lib/interface';
  import { TFunction } from 'i18next';
  import { ColumnsType } from 'antd/es/table';

  export interface Pagination {
    current: number;
    total: number;
  }

  export type Status = 'pending' | 'rejected' | 'fulfilled';

  export interface RequestParams {
    page?: number;
    limit?: number;
    include?: string;
  }

  export interface Error {}

  export type ColumnsFnc<T> = (t: TFunction) => ColumnsType<T>;

  export type OptionsFnc = (
    t: TFunction,
  ) => (OptionCoreData & { [prop: string]: any })[];
}
