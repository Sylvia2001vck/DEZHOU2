"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeResponseData = void 0;
/**
 * Downtime data.
 */
class DowntimeResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeResponseData.attributeTypeMap;
    }
}
exports.DowntimeResponseData = DowntimeResponseData;
/**
 * @ignore
 */
DowntimeResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DowntimeResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "DowntimeRelationships",
    },
    type: {
        baseName: "type",
        type: "DowntimeResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeResponseData.js.map