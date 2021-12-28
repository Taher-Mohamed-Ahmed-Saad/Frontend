/* eslint-disable no-restricted-syntax */
import api from '../../../api/api';

const submitPost = async function (blogId, fd) {
  if (!blogId) return false;
  try {
    console.log(Array.from(fd));
    await api.post(`api/blog/${blogId}/posts`, fd);
  } catch (err) {
    if (err.response) {
      console.log(err.response);
    } else {
      console.log(err);
    }
    return false;
  }
  return true;
};
export default submitPost;
