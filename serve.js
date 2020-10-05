const Koa = require("koa");
const KoaStatic = require("koa-static");
const server = new Koa();
const fs = require("fs");
const env = require("./dist/env").default;

const PORT = 9080;
const CONTENT_PATH = "/content"; // TODO: Should be at .env

server.use(KoaStatic("."));

server.use(async context => {
  if (context.path === CONTENT_PATH) {
    context.body = await mockGithubResponse();
  }
});

server.listen(PORT);
console.log(`✨ listening on localhost:${PORT}`);

function mockGithubResponse() {
  return new Promise((resolve, reject) => {
    fs.readdir(removeLeadingSlash(CONTENT_PATH), (err, files) => {
      if (err) {
        reject("Failed to read directory");
      }
      const result = files.map((f) => ({
        name: f,
        path: removeLeadingSlash(CONTENT_PATH + "/" + f),
        download_url: `http://localhost:${PORT}${env.contentsFolder}/${f}`,
        // Link below is hard-coded to my Github. Change if needed.
        html_url: `https://github.com/danielbertolozi/danielbertolozi.github.io/blob/main/content/${f}`
      }));
      resolve(result);
    });
  });
}

function removeLeadingSlash(str = "") {
  if (str.startsWith("/")) {
    return str.substring(1);
  }
  return str;
}
