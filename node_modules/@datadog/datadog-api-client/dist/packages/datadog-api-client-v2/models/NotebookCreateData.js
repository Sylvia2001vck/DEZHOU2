"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookCreateData = void 0;
/**
 * Notebook creation data
 */
class NotebookCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookCreateData.attributeTypeMap;
    }
}
exports.NotebookCreateData = NotebookCreateData;
/**
 * @ignore
 */
NotebookCreateData.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "NotebookResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookCreateData.js.map