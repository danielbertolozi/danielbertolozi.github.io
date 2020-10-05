"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostParser = void 0;
var SequenceParser_1 = require("./Metadata/SequenceParser");
var SimpleNodeParser_1 = require("./Metadata/SimpleNodeParser");
var PostParser = /** @class */ (function () {
    function PostParser() {
    }
    PostParser.extractMetadata = function (content, separator) {
        var separatorIndex = this.findSeparator(content, separator);
        return content.substring(0, separatorIndex).trim();
    };
    PostParser.extractPostContent = function (content, separator) {
        var separatorIndex = this.findSeparator(content, separator);
        if (separatorIndex < 0) {
            return content.trim();
        }
        return content
            .substring(separatorIndex + separator.length)
            .trim();
    };
    PostParser.findSeparator = function (content, separator) {
        return content.indexOf(separator);
    };
    PostParser.extractTitleFromMetadata = function (metadata) {
        return SimpleNodeParser_1.SimpleNodeParser.extractNodeValue(metadata, "Title: ");
    };
    PostParser.extractTimeFromMetadata = function (metadata) {
        return SimpleNodeParser_1.SimpleNodeParser.extractNodeValue(metadata, "Time: ");
    };
    PostParser.extractTagsFromMetadata = function (metadata) {
        return SequenceParser_1.SequenceParser.extractEntries(metadata, "Tags:");
    };
    return PostParser;
}());
exports.PostParser = PostParser;
