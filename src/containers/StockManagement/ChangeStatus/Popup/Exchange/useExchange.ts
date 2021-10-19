import { useFormik } from 'formik';

const useExchange = () => {
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

  return { formik };
};

export default useExchange;
