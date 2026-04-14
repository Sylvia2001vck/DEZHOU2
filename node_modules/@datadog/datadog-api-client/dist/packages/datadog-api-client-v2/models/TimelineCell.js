"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCell = void 0;
/**
 * timeline cell
 */
class TimelineCell {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimelineCell.attributeTypeMap;
    }
}
exports.TimelineCell = TimelineCell;
/**
 * @ignore
 */
TimelineCell.attributeTypeMap = {
    author: {
        baseName: "author",
        type: "TimelineCellAuthor",
    },
    cellContent: {
        baseName: "cell_content",
        type: "TimelineCellContent",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    deletedAt: {
        baseName: "deleted_at",
        type: "Date",
        format: "date-time",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    type: {
        baseName: "type",
        type: "TimelineCellType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimelineCell.js.map