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
    File Name: deny_local_area_network_access_middleware_metrics.ts
    Description: Metrics for the deny local area network access middleware.
    Written by: Nikita Petko
*/

import * as prometheus from 'prom-client';

/**
 * Number of hostnames that resolve to private IP addresses.
 */
export const hostnamesThatResolveToPrivateIpAddresses = new prometheus.Counter({
  name: 'hostnames_that_resolve_to_private_ip_addresses_total',
  help: 'Number of hostnames that resolve to private IP addresses.',
  labelNames: ['hostname', 'ip_address'],
});

/**
 * Number of requests that were denied.
 */
export const requestsThatWereDenied = new prometheus.Counter({
  name: 'lan_requests_that_were_denied_total',
  help: 'Total number of requests that were denied.',
  labelNames: ['method', 'hostname', 'endpoint', 'caller'],
});
