/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimelineCellAuthor } from "./TimelineCellAuthor";
import { TimelineCellContent } from "./TimelineCellContent";
import { TimelineCellType } from "./TimelineCellType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * timeline cell
 */
export declare class TimelineCell {
    /**
     * author of the timeline cell
     */
    "author"?: TimelineCellAuthor;
    /**
     * timeline cell content
     */
    "cellContent"?: TimelineCellContent;
    /**
     * Timestamp of when the cell was created
     */
    "createdAt"?: Date;
    /**
     * Timestamp of when the cell was deleted
     */
    "deletedAt"?: Date;
    /**
     * Timestamp of when the cell was last modified
     */
    "modifiedAt"?: Date;
    /**
     * Timeline cell content type
     */
    "type"?: TimelineCellType;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
