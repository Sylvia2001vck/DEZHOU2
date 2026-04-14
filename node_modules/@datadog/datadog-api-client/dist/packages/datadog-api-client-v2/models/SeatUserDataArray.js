"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatUserDataArray = void 0;
class SeatUserDataArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SeatUserDataArray.attributeTypeMap;
    }
}
exports.SeatUserDataArray = SeatUserDataArray;
/**
 * @ignore
 */
SeatUserDataArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SeatUserData>",
    },
    meta: {
        baseName: "meta",
        type: "SeatUserMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SeatUserDataArray.js.map