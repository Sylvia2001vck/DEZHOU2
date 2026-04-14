import type { Paginator } from "@smithy/types";
import { DescribeScheduledInstancesCommandInput, DescribeScheduledInstancesCommandOutput } from "../commands/DescribeScheduledInstancesCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeScheduledInstances: (config: EC2PaginationConfiguration, input: DescribeScheduledInstancesCommandInput, ...rest: any[]) => Paginator<DescribeScheduledInstancesCommandOutput>;
