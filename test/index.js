const axios = require("axios");
const { promisify } = require("util");
const SocksProxyAgent = require("socks-proxy-agent");

const CancelToken = axios.CancelToken;
const proxyOptions = `socks5://127.0.0.1:1081`;
const httpsAgent = new SocksProxyAgent(proxyOptions);
const timeAsync = promisify(setTimeout);

const request = () => {
  const source = CancelToken.source();
  return Promise.race([
    (async () => {
      await timeAsync(3000);
      console.log("取消请求");
      source.cancle();
    })(),
    (async () => {
      axios
        .get("https://google.com", { httpsAgent })
        .then(() => {
          console.log(1);
        })
        .catch(() => {
          console.log(2);
        });
    })(),
  ]);
};

const request1 = async () => {
  await axios
    .get("https://google.com", { httpsAgent })
    .then((data) => {
      console.log(1);
    })
    .catch(() => {
      console.log(2);
    });
};

(async () => {
  for (let i = 0; i < 100; i++) {
    await request1();
  }
})();
