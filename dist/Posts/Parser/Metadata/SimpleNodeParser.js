"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleNodeParser = void 0;
var SimpleNodeParser = /** @class */ (function () {
    function SimpleNodeParser() {
    }
    SimpleNodeParser.extractNodeValue = function (content, nodeName) {
        var start = this.findWhereContentBegins(content, nodeName);
        var end = this.findWhereContentEnds(content, nodeName);
        return content.substring(start, end).trim();
    };
    SimpleNodeParser.findWhereContentBegins = function (content, nodeName) {
        var nodePosition = content.indexOf(nodeName);
        var nodeLabelLength = nodeName.length;
        return nodePosition + nodeLabelLength;
    };
    SimpleNodeParser.findWhereContentEnds = function (content, nodeName) {
        var nodePosition = content.indexOf(nodeName);
        var nodeLineBreakIndex = content.substring(nodePosition).indexOf("\n");
        if (nodeLineBreakIndex > 0) {
            return nodeLineBreakIndex + nodePosition;
        }
        return undefined;
    };
    return SimpleNodeParser;
}());
exports.SimpleNodeParser = SimpleNodeParser;
