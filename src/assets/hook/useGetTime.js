import moment from "moment";

const getCurrentDateTime = () => {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
};
export default getCurrentDateTime;
