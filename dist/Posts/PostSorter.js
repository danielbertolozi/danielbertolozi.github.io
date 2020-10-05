"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSorter = void 0;
var PostSorter = /** @class */ (function () {
    function PostSorter() {
    }
    PostSorter.newToOld = function (posts) {
        var _this = this;
        posts.sort(function (p1, p2) { return _this.getPostTime(p2) - _this.getPostTime(p1); });
    };
    PostSorter.getPostTime = function (post) {
        return new Date(post.getMetadata().Time).getTime();
    };
    return PostSorter;
}());
exports.PostSorter = PostSorter;
