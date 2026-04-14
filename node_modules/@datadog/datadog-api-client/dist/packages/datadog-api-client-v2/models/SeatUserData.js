"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatUserData = void 0;
class SeatUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SeatUserData.attributeTypeMap;
    }
}
exports.SeatUserData = SeatUserData;
/**
 * @ignore
 */
SeatUserData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SeatUserDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SeatUserDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SeatUserData.js.map