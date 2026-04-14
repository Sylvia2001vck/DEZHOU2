"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatcherArray = void 0;
class WatcherArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WatcherArray.attributeTypeMap;
    }
}
exports.WatcherArray = WatcherArray;
/**
 * @ignore
 */
WatcherArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<WatcherData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WatcherArray.js.map