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
        var fileName = document.createElement('a');
        fileName.innerHTML = post.getFileName();
        fileName.href = post.getFileUrl();
        var time = document.createElement("span");
        time.innerHTML = post.getMetadata().Time;
        var upperPart = document.createElement("div");
        upperPart.className = "post-filename-and-time";
        upperPart.appendChild(fileName);
        upperPart.appendChild(time);
        var title = document.createElement('h2');
        title.innerHTML = post.getMetadata().Title;
        var postCorpus = document.createElement("p");
        postCorpus.innerHTML = post.getContent();
        postCorpus.className = "post-corpus";
        var tags = document.createElement("span");
        tags.innerHTML = post.getMetadata().Tags.join(" | ");
        tags.className = "tags";
        postContainer.appendChild(upperPart);
        postContainer.appendChild(title);
        postContainer.appendChild(postCorpus);
        postContainer.appendChild(tags);
        return postContainer;
    };
    return PostToPageAdapter;
}());
exports.PostToPageAdapter = PostToPageAdapter;
