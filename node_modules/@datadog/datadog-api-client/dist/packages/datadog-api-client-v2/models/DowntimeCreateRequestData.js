"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeCreateRequestData = void 0;
/**
 * Object to create a downtime.
 */
class DowntimeCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeCreateRequestData.attributeTypeMap;
    }
}
exports.DowntimeCreateRequestData = DowntimeCreateRequestData;
/**
 * @ignore
 */
DowntimeCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DowntimeCreateRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DowntimeResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeCreateRequestData.js.map