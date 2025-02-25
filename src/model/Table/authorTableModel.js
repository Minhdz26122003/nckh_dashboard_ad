import PropTypes from "prop-types";

export const AuthorModel = {
  image: PropTypes.string.isRequired, // URL ảnh
  name: PropTypes.string.isRequired, // Tên tác giả
  email: PropTypes.string.isRequired, // Email tác giả
};
export const JobModel = {
  title: PropTypes.string.isRequired, // Tiêu đề
  description: PropTypes.string.isRequired, // Mô tả
};
