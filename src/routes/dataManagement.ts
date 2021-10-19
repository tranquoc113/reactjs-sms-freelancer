import { DatabaseOutlined } from '@ant-design/icons';
import { TFunction } from 'i18next';

import { IRouter } from 'src/interfaces/route';
import DataManagement, { PATH } from 'src/pages/dataManagement';

const PARENT_PART = '/data';
const CHILDREN_PART = '/sub-example';
const CHILDREN_PART_AUTHORITY_MANAGEMENT = '/authority-management';
const CHILDREN_PART_DATA_STORE = '/data-store';

export default (t: TFunction): IRouter[] => [
  {
    path: PARENT_PART,
    icon: DatabaseOutlined,
    exact: true,
    title: t('title.data_management'),
    redirect: true,
    redirectPath: PATH.DATA_STORE_PATH.DATA_STORE_REGISTER_MODIFY,
  },
  {
    path: CHILDREN_PART_DATA_STORE,
    parent: PARENT_PART,
    isSubmenu: true,
    exact: true,
    title: t('title.data_management.data_store'),
    component: DataManagement.DataStore.StoreRegisterModify,
    requiredAuth: true,
  },
  {
    path: PATH.DATA_STORE_PATH.DATA_STORE_REGISTER_MODIFY,
    subMenu: CHILDREN_PART_DATA_STORE,
    exact: true,
    title: t('data_management.data_store.sub_register_modify'),
    component: DataManagement.DataStore.StoreRegisterModify,
    requiredAuth: true,
  },
  {
    path: PATH.DATA_STORE_PATH.DATA_STORE_APPROVAL,
    subMenu: CHILDREN_PART_DATA_STORE,
    exact: true,
    title: t('data_management.data_store.sub_connection_admission'),
    component: DataManagement.DataStore.StoreConnectionApproval,
    requiredAuth: true,
  },
  {
    path: PATH.DATA_AGENCY,
    parent: PARENT_PART,
    exact: true,
    title: t('title.data_agency'),
    component: DataManagement.DataAgency,
    requiredAuth: true,
  },
  {
    path: PATH.DATA_STORE_EXAMPLE,
    parent: PARENT_PART,
    exact: true,
    title: t('Example'),
    component: DataManagement.DataStoreExample,
    requiredAuth: true,
  },
  {
    path: CHILDREN_PART_AUTHORITY_MANAGEMENT,
    parent: PARENT_PART,
    isSubmenu: true,
    exact: true,
    title: t('title.data_management.authority_management'),
    redirect: true,
    redirectPath: PATH.MEMBER_GROUP,
  },
  {
    path: PATH.MEMBER_GROUP,
    parent: PARENT_PART,
    subMenu: CHILDREN_PART_AUTHORITY_MANAGEMENT,
    exact: true,
    title: t('title.data_management.authority_management.member_group'),
    component: DataManagement.MemberGroup,
    requiredAuth: true,
  },
  {
    path: PATH.DATA_MEMBER,
    parent: PARENT_PART,
    subMenu: CHILDREN_PART_AUTHORITY_MANAGEMENT,
    exact: true,
    title: t('title.data_member'),
    component: DataManagement.DataMember,
    requiredAuth: true,
  },
  {
    path: CHILDREN_PART,
    parent: PARENT_PART,
    isSubmenu: true,
    exact: true,
    title: t('Sub Example'),
    redirect: true,
    redirectPath: PATH.DATA_SUB_EXAMPLE,
  },
  {
    path: PATH.DATA_SUB_EXAMPLE,
    parent: PARENT_PART,
    subMenu: CHILDREN_PART,
    exact: true,
    title: t('Sub Sub Example'),
    component: DataManagement.DataSubExample,
    requiredAuth: true,
  },
];
