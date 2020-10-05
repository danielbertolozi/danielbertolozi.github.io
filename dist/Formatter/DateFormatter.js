"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    DateFormatter.formatPostDate = function (date) {
        return date.toLocaleString();
    };
    return DateFormatter;
}());
exports.DateFormatter = DateFormatter;
