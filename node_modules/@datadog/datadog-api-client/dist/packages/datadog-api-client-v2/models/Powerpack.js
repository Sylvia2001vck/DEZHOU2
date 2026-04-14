"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Powerpack = void 0;
/**
 * Powerpacks are templated groups of dashboard widgets you can save from an existing dashboard and turn into reusable packs in the widget tray.
 */
class Powerpack {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Powerpack.attributeTypeMap;
    }
}
exports.Powerpack = Powerpack;
/**
 * @ignore
 */
Powerpack.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PowerpackData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Powerpack.js.map