import { useAppDispatch, useAppSelector } from 'src/store';
import { searchAreas } from 'src/useCase/area';

const useForm = ({ t }) => {
  const { areas, status } = useAppSelector((state) => state.domain.area);
  const dispatch = useAppDispatch();

  const handleSearch = async (val) => {
    dispatch(searchAreas({ keyword: val, limit: 10 }));
  };

  const areas_list: App.OptionsFnc = (t) =>
    areas.map((item) => {
      return { label: item.name, value: item.id };
    });

  return { handleSearch, areas_list, status };
};

export default useForm;
