<!-- .slide: data-state="section-break" id="solution" data-timing="5" -->
# Our solution


<!-- .slide: data-state="normal" id="solution overview" data-menu-title="Overview" data-timing="120" -->
# Solution overview

*   Joint engineering team
    *   Dedicated people from both sides
*   Based on agile methodologies
    *   Standups
    *   Backlog
    *   Testing and CI
*   Everything gets fed back into normal
    SUSE OpenStack Cloud product


<!-- .slide: data-state="normal" id="github-org" data-timing="120" -->
## Shared GitHub organization

*   [Organization](https://github.com/orgs/sap-oc/)
    hosts forks of product repositories
*   Dedicated branches to queue changes for next deployment
    to each prod/test cloud
*   Tag per deployment per cloud
    (typically one per maintenance window)
*   Issue trackers in each repository
*   [Project board](https://github.com/orgs/sap-oc/projects/1)


<!-- .slide: data-state="normal" id="communication" data-timing="120" -->
# Improved communication

* Cc'ing SAP on relevant bugs (only partial fix)
* Shared Slack channel
* Joint daily standups


<!-- .slide: data-state="normal" id="communication" data-timing="120" -->
# CI + CD

Approach: duplicate SUSE internal CI at SAP

*   Minimise risk of fast change
    *   Test everything before deployment
    *   Test upgrade path too
