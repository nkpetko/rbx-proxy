/*
   Copyright 2022 Nikita Petko <petko@vmminfra.net>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*
    File Name: crawler_check_middleware_metrics.ts
    Description: Metrics for the crawler check middleware.
    Written by: Nikita Petko
*/

import * as prometheus from 'prom-client';

/**
 * Total number of callers that are crawlers.
 */
export const callersThatAreCrawlers = new prometheus.Counter({
  name: 'callers_that_are_crawlers_total',
  help: 'Total number of callers that are crawlers',
  labelNames: ['caller', 'user_agent'],
});
