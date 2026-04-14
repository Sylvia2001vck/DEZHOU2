"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceUpdateData = void 0;
/**
 * Opsgenie service for an update request.
 */
class OpsgenieServiceUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceUpdateData.attributeTypeMap;
    }
}
exports.OpsgenieServiceUpdateData = OpsgenieServiceUpdateData;
/**
 * @ignore
 */
OpsgenieServiceUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OpsgenieServiceUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OpsgenieServiceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServiceUpdateData.js.map