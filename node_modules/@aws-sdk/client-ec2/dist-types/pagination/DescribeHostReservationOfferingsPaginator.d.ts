import type { Paginator } from "@smithy/types";
import { DescribeHostReservationOfferingsCommandInput, DescribeHostReservationOfferingsCommandOutput } from "../commands/DescribeHostReservationOfferingsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeHostReservationOfferings: (config: EC2PaginationConfiguration, input: DescribeHostReservationOfferingsCommandInput, ...rest: any[]) => Paginator<DescribeHostReservationOfferingsCommandOutput>;
