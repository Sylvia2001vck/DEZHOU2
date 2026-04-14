"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watch = void 0;
class Watch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Watch.attributeTypeMap;
    }
}
exports.Watch = Watch;
/**
 * @ignore
 */
Watch.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "WatchData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Watch.js.map