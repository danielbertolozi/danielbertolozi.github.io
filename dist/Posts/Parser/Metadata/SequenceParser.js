"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceParser = void 0;
var FindNextNonSequenceLineRegExp = /\n[A-Z]/;
var SequenceParser = /** @class */ (function () {
    function SequenceParser() {
    }
    SequenceParser.extractEntries = function (content, nodeName) {
        var start = this.findWhereSequenceItemsBegins(content, nodeName);
        var end = SequenceParser.findWhereSequenceItemsEnds(content, nodeName);
        var entries = content
            .substring(start, end)
            .split("\n");
        var cleanEntries = this.trimAndRemoveBulletPoints(entries);
        return this.removeEmptyValues(cleanEntries);
    };
    SequenceParser.findWhereSequenceItemsBegins = function (content, nodeName) {
        var nodePosition = content.indexOf(nodeName);
        var labelLineBreakIndex = content.substring(nodePosition).indexOf("\n");
        return labelLineBreakIndex + nodePosition + "\n".length;
    };
    SequenceParser.findWhereSequenceItemsEnds = function (content, nodeName) {
        var _a;
        var nodePosition = content.indexOf(nodeName);
        var labelLineBreakIndex = content.substring(nodePosition).indexOf("\n");
        var endOfLineIndex = labelLineBreakIndex + nodePosition;
        var sequenceEnd = (_a = FindNextNonSequenceLineRegExp.exec(content.substring(endOfLineIndex))) === null || _a === void 0 ? void 0 : _a.index;
        if (sequenceEnd) {
            return sequenceEnd + labelLineBreakIndex + nodePosition;
        }
        return undefined;
    };
    SequenceParser.removeEmptyValues = function (array) {
        return array.filter(function (e) { return !!e; });
    };
    SequenceParser.trimAndRemoveBulletPoints = function (array) {
        return array.map(function (e) { return e.trim().substring(2); });
    };
    return SequenceParser;
}());
exports.SequenceParser = SequenceParser;
