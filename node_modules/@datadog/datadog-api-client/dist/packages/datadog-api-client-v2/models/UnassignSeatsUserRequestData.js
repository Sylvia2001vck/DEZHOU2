"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnassignSeatsUserRequestData = void 0;
class UnassignSeatsUserRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UnassignSeatsUserRequestData.attributeTypeMap;
    }
}
exports.UnassignSeatsUserRequestData = UnassignSeatsUserRequestData;
/**
 * @ignore
 */
UnassignSeatsUserRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UnassignSeatsUserRequestDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SeatAssignmentsDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UnassignSeatsUserRequestData.js.map