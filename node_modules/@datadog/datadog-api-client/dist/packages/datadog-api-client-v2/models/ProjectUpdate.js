"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdate = void 0;
/**
 * Project update
 */
class ProjectUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectUpdate.attributeTypeMap;
    }
}
exports.ProjectUpdate = ProjectUpdate;
/**
 * @ignore
 */
ProjectUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ProjectUpdateAttributes",
    },
    type: {
        baseName: "type",
        type: "ProjectResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectUpdate.js.map