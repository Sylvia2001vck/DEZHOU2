"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentObject = void 0;
/**
 * A DORA deployment event.
 */
class DORADeploymentObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentObject.attributeTypeMap;
    }
}
exports.DORADeploymentObject = DORADeploymentObject;
/**
 * @ignore
 */
DORADeploymentObject.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DORADeploymentObjectAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DORADeploymentType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentObject.js.map