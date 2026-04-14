"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentsResponseData = void 0;
/**
 * The response data containing status and agents array.
 */
class FleetAgentsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentsResponseData.attributeTypeMap;
    }
}
exports.FleetAgentsResponseData = FleetAgentsResponseData;
/**
 * @ignore
 */
FleetAgentsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetAgentsResponseDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentsResponseData.js.map