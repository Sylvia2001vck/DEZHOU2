"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFindingsMeta = void 0;
/**
 * Metadata for pagination.
 */
class ListFindingsMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListFindingsMeta.attributeTypeMap;
    }
}
exports.ListFindingsMeta = ListFindingsMeta;
/**
 * @ignore
 */
ListFindingsMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "ListFindingsPage",
    },
    snapshotTimestamp: {
        baseName: "snapshot_timestamp",
        type: "number",
        format: "int64",
    },
};
//# sourceMappingURL=ListFindingsMeta.js.map