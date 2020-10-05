"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWrapper = void 0;
var PostParser_1 = require("./Parser/PostParser");
var PostWrapper = /** @class */ (function () {
    function PostWrapper(rawPost) {
        this.rawPost = rawPost;
        this.metadata = { Time: "", Title: "", Tags: [] };
        this.content = "";
        this.SEPARATOR = "--/--/--";
        this.parse(rawPost);
    }
    PostWrapper.prototype.parse = function (source) {
        var metadata = PostParser_1.PostParser.extractMetadata(source.content, this.SEPARATOR);
        this.content = PostParser_1.PostParser.extractPostContent(source.content, this.SEPARATOR);
        if (metadata) {
            this.metadata = {
                Time: PostParser_1.PostParser.extractTimeFromMetadata(metadata),
                Title: PostParser_1.PostParser.extractTitleFromMetadata(metadata),
                Tags: PostParser_1.PostParser.extractTagsFromMetadata(metadata),
            };
        }
    };
    PostWrapper.prototype.getRawFile = function () {
        return this.rawPost.content;
    };
    PostWrapper.prototype.getFileName = function () {
        return this.rawPost.fileName;
    };
    PostWrapper.prototype.getFileUrl = function () {
        return this.rawPost.downloadUrl;
    };
    PostWrapper.prototype.getMetadata = function () {
        return this.metadata;
    };
    PostWrapper.prototype.getContent = function () {
        return this.content;
    };
    return PostWrapper;
}());
exports.PostWrapper = PostWrapper;
