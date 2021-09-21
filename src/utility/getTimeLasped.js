import moment from "moment";
const getTimeLapse = commentedAt => {
  console.log("commentedAt,", commentedAt);
  let currentTime = moment();
  if (currentTime.diff(commentedAt, "minutes") <= 0) return "a few second ago";
  if (currentTime.diff(commentedAt, "hours") <= 0)
    return `${currentTime.diff(commentedAt, "minutes")}m`;
  if (currentTime.diff(commentedAt, "days") <= 0)
    return `${currentTime.diff(commentedAt, "hours")}h`;
  if (currentTime.diff(commentedAt, "weeks") <= 0)
    return `${currentTime.diff(commentedAt, "days")}d`;
};

export default getTimeLapse;
