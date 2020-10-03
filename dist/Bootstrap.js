var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import env from "./env";
import { GithubContentFetcher } from "./Posts/GithubContentFetcher";
import { PostToPageAdapter } from "./Posts/PostToPageAdapter";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const fetcher = new GithubContentFetcher();
    const posts = yield fetcher.importFrom(env.contentsFolder);
    const adapter = new PostToPageAdapter();
    posts.forEach((p) => adapter.addToPage(p, env.postsDivId));
}))();
