"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCellAuthorUser = void 0;
/**
 * timeline cell user author
 */
class TimelineCellAuthorUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimelineCellAuthorUser.attributeTypeMap;
    }
}
exports.TimelineCellAuthorUser = TimelineCellAuthorUser;
/**
 * @ignore
 */
TimelineCellAuthorUser.attributeTypeMap = {
    content: {
        baseName: "content",
        type: "TimelineCellAuthorUserContent",
    },
    type: {
        baseName: "type",
        type: "TimelineCellAuthorUserType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimelineCellAuthorUser.js.map