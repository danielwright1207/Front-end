import * as yup from 'yup';

export default yup.object().shape({
  username: yup.string().required('Username is required.').min(5,'Username must have at least 5 characters.'),
  password: yup.string().required('Password is required.').min(8,'Password must have at least 8 characters.'),
  role: yup.string().required('Role is required.').oneOf(['instructor','client'], 'Role must be either instructor or client.')
})