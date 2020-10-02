import { Fetcher } from "./Posts/Fetcher";

const fetcher = new Fetcher();
console.log("bootstrap")
fetcher.importFrom("../../content");
