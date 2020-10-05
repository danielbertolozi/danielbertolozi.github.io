"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubContentToPostObjConverter = void 0;
var PostWrapper_1 = require("./PostWrapper");
var GithubContentToPostObjConverter = /** @class */ (function () {
    function GithubContentToPostObjConverter() {
    }
    GithubContentToPostObjConverter.prototype.convert = function (post) {
        return new PostWrapper_1.PostWrapper(post);
    };
    return GithubContentToPostObjConverter;
}());
exports.GithubContentToPostObjConverter = GithubContentToPostObjConverter;
