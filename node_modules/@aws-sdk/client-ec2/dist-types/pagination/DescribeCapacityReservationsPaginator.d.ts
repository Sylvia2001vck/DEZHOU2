import type { Paginator } from "@smithy/types";
import { DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput } from "../commands/DescribeCapacityReservationsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeCapacityReservations: (config: EC2PaginationConfiguration, input: DescribeCapacityReservationsCommandInput, ...rest: any[]) => Paginator<DescribeCapacityReservationsCommandOutput>;
