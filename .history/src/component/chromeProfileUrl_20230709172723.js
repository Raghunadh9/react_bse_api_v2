const CDP = require("chrome-remote-interface");

export const getChromeProfileUrl = async () => {
  return new Promise((resolve, reject) => {
    CDP(async (client) => {
      try {
        const { Browser } = client;
        await Browser.enable();
        const { windowId } = await Browser.createTarget({ url: "about:blank" });
        const { tabs } = await Browser.getWindowForTarget({ windowId });
        const targetUrl = tabs[1].url;
        await client.close();
        resolve(targetUrl);
      } catch (err) {
        reject(err);
      }
    }).on("error", (err) => {
      reject(err);
    });
  });
};
