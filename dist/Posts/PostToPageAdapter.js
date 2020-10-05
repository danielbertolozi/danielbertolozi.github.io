"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostToPageAdapter = void 0;
var PostToPageAdapter = /** @class */ (function () {
    function PostToPageAdapter() {
    }
    PostToPageAdapter.prototype.addToPage = function (post, divId) {
        var _a;
        var elementToAdd = this.buildPost(post);
        (_a = document.getElementById(divId)) === null || _a === void 0 ? void 0 : _a.appendChild(elementToAdd);
    };
    PostToPageAdapter.prototype.buildPost = function (post) {
        // TODO: Markdown formatting here. Should check first character to determine element type, or look for **/__/~~
        var postContainer = document.createElement("div");
        postContainer.className = "post";
        var fileName = document.createElement('h5');
        fileName.innerHTML = post.getFileName();
        var postCorpus = document.createElement("p");
        postCorpus.innerHTML = post.getContent();
        ;
        postContainer.appendChild(fileName);
        postContainer.appendChild(postCorpus);
        return postContainer;
    };
    return PostToPageAdapter;
}());
exports.PostToPageAdapter = PostToPageAdapter;
