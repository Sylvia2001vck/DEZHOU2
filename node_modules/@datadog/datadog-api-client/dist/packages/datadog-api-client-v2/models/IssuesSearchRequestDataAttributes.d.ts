/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssuesSearchRequestDataAttributesOrderBy } from "./IssuesSearchRequestDataAttributesOrderBy";
import { IssuesSearchRequestDataAttributesPersona } from "./IssuesSearchRequestDataAttributesPersona";
import { IssuesSearchRequestDataAttributesTrack } from "./IssuesSearchRequestDataAttributesTrack";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object describing a search issue request.
 */
export declare class IssuesSearchRequestDataAttributes {
    /**
     * Start date (inclusive) of the query in milliseconds since the Unix epoch.
     */
    "from": number;
    /**
     * The attribute to sort the search results by.
     */
    "orderBy"?: IssuesSearchRequestDataAttributesOrderBy;
    /**
     * Persona for the search. Either track(s) or persona(s) must be specified.
     */
    "persona"?: IssuesSearchRequestDataAttributesPersona;
    /**
     * Search query following the event search syntax.
     */
    "query": string;
    /**
     * End date (exclusive) of the query in milliseconds since the Unix epoch.
     */
    "to": number;
    /**
     * Track of the events to query. Either track(s) or persona(s) must be specified.
     */
    "track"?: IssuesSearchRequestDataAttributesTrack;
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
