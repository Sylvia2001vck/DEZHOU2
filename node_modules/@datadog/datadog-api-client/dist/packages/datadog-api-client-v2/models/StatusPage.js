"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPage = void 0;
class StatusPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPage.attributeTypeMap;
    }
}
exports.StatusPage = StatusPage;
/**
 * @ignore
 */
StatusPage.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "StatusPageData",
    },
    included: {
        baseName: "included",
        type: "Array<StatusPageArrayIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPage.js.map