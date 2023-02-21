const moment = require("moment");

const dateStr = "Feb-21-2023 02:03:36 PM +UTC";
const dt = moment.utc(dateStr, "MMM-DD-YYYY hh:mm:ss A Z");
const timestamp = dt.unix();

console.log(timestamp);
