import moment from "moment";

export const getCurrentDateTime = () => {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
};
export const getDifTime = (dateStart) => {
  return moment(dateStart, "MMMM Do YYYY, h:mm:ss a").fromNow();
};
