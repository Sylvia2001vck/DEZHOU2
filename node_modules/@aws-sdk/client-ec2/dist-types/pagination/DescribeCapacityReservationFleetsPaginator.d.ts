import type { Paginator } from "@smithy/types";
import { DescribeCapacityReservationFleetsCommandInput, DescribeCapacityReservationFleetsCommandOutput } from "../commands/DescribeCapacityReservationFleetsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeCapacityReservationFleets: (config: EC2PaginationConfiguration, input: DescribeCapacityReservationFleetsCommandInput, ...rest: any[]) => Paginator<DescribeCapacityReservationFleetsCommandOutput>;
