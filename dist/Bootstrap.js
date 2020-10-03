import { Fetcher } from "./Posts/Fetcher";
var fetcher = new Fetcher();
console.log("bootstrap");
fetcher.importFrom("/content");
