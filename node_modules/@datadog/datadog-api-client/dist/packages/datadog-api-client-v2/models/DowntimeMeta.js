"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeMeta = void 0;
/**
 * Pagination metadata returned by the API.
 */
class DowntimeMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeMeta.attributeTypeMap;
    }
}
exports.DowntimeMeta = DowntimeMeta;
/**
 * @ignore
 */
DowntimeMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "DowntimeMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeMeta.js.map