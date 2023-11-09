function login() {
  return {
    code: 0,
    message: "",
    data: {
      username: "陈磊",
      token: "O5XTTaRFHAu70mmXcX0EYLE7WrSKk5T2q030ed4KxgPgDKGiyvhxtyV8YQ1xSbD3"
    }
  };
}

const mockData = {
  "/login": login
};

export default mockData;
