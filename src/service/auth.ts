import axios from 'axios';

export const login = async () => {
  try {
    const { data } = await axios.post('');

    return data;
  } catch (err) {}
};
