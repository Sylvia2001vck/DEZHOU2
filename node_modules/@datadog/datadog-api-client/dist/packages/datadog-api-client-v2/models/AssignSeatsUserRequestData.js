"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignSeatsUserRequestData = void 0;
class AssignSeatsUserRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AssignSeatsUserRequestData.attributeTypeMap;
    }
}
exports.AssignSeatsUserRequestData = AssignSeatsUserRequestData;
/**
 * @ignore
 */
AssignSeatsUserRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AssignSeatsUserRequestDataAttributes",
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
//# sourceMappingURL=AssignSeatsUserRequestData.js.map