"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionIdData = void 0;
class SessionIdData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SessionIdData.attributeTypeMap;
    }
}
exports.SessionIdData = SessionIdData;
/**
 * @ignore
 */
SessionIdData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ViewershipHistorySessionDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SessionIdData.js.map