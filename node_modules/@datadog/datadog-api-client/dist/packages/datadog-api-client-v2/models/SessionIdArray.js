"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionIdArray = void 0;
class SessionIdArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SessionIdArray.attributeTypeMap;
    }
}
exports.SessionIdArray = SessionIdArray;
/**
 * @ignore
 */
SessionIdArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SessionIdData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SessionIdArray.js.map