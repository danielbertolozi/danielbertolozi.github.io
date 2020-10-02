import { Fetcher } from "./Posts/Fetcher";
console.log("bootstrap");
var fetcher = new Fetcher();
fetcher.importFrom("../../content");
