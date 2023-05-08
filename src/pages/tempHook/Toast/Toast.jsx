import toast, { Toaster } from 'react-hot-toast';

export const notifyOk = ok => toast(`Here are your ${ok}.`);

export const notifyError = error => toast(`${error} happend`);

export const Toast = () => (
  <Toaster
    position="bottom-center"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: '',
      duration: 3000,
      style: {
        background: 'tomato',
        color: '#fff',
        fontSize: '26px',
      },

      // Default options for specific types
      success: {
        duration: 3000,
        theme: {
          primary: 'green',
          secondary: 'black',
        },
      },
    }}
  />
);
