import { useAppSelector } from 'src/store';
import { useFormik } from 'formik';

const useChangeStatus = () => {
  const { entities } = useAppSelector((state) => state.domain.changeStatus);

  const defaultValue = {
    barcode: '1',
    serial_number: '',
  };

  const formik = useFormik({
    initialValues: {
      ...defaultValue,
    },
    onSubmit(value) {
      console.log(value);
    },
    enableReinitialize: true,
  });

  return { entities, formik };
};

export default useChangeStatus;
