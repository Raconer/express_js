let setStatus = (status) => {
  return {
    code: status.code,
    message: status.message,
  };
};

export let defRes = (status) => {
  return setStatus(status);
};

export let defDataRes = (status, data) => {
  let dataJson = setStatus(status);
  dataJson.data = data;
  return dataJson;
};
