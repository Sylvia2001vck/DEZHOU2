"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SloStatusData = void 0;
/**
 * The data portion of the SLO status response.
 */
class SloStatusData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SloStatusData.attributeTypeMap;
    }
}
exports.SloStatusData = SloStatusData;
/**
 * @ignore
 */
SloStatusData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SloStatusDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SloStatusType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SloStatusData.js.map