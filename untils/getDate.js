function get_date(pTimestamp, pMark) {
  const date = new Date(pTimestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  const lDate = year + pMark + month + pMark + day;
  const lTime = hour + ":" + minute + ":" + second;
  const obj = {
    "date": lDate,
    "time": lTime,
    "datetime": lDate + " " + lTime,
  };

  return obj;
}

export default get_date