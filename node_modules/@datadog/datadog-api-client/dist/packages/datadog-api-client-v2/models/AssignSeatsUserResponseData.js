"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignSeatsUserResponseData = void 0;
class AssignSeatsUserResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AssignSeatsUserResponseData.attributeTypeMap;
    }
}
exports.AssignSeatsUserResponseData = AssignSeatsUserResponseData;
/**
 * @ignore
 */
AssignSeatsUserResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AssignSeatsUserResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SeatAssignmentsDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AssignSeatsUserResponseData.js.map