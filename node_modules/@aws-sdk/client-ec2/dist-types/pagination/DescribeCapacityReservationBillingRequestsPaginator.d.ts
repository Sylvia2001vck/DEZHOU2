import type { Paginator } from "@smithy/types";
import { DescribeCapacityReservationBillingRequestsCommandInput, DescribeCapacityReservationBillingRequestsCommandOutput } from "../commands/DescribeCapacityReservationBillingRequestsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeCapacityReservationBillingRequests: (config: EC2PaginationConfiguration, input: DescribeCapacityReservationBillingRequestsCommandInput, ...rest: any[]) => Paginator<DescribeCapacityReservationBillingRequestsCommandOutput>;
