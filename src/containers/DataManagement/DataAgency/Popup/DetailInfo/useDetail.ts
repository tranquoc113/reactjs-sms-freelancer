import { useAppSelector } from 'src/store';
import {
  BUSINESS_TYPE,
  BUSINESS_TYPE_DEPTH2,
} from 'src/constants/options/agency';

const useDetail = ({ t }) => {
  const { entity } = useAppSelector((state) => state.domain.agency);
  const business_type = BUSINESS_TYPE(t).map((item) => {
    return { value: item.value, label: item.label };
  });

  const business_type_depth = BUSINESS_TYPE_DEPTH2(t).map((item) => {
    return { value: item.value, label: item.label };
  });

  const getBusinessType = (val) => {
    return business_type.find((item) => item.value == val);
  };

  const getBusinessTypeDepth = (val) => {
    return business_type_depth.find((item) => item.value == val);
  };

  return { entity, getBusinessType, getBusinessTypeDepth };
};

export default useDetail;
