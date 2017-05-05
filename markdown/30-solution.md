<!-- .slide: data-state="section-break" id="solution" data-timing="5" -->
# Our solution


<!-- .slide: data-state="normal" id="solution-overview" data-menu-title="Overview" data-timing="120" -->
# Solution overview

### Outcome from 2-day joint meeting in Walldorf:

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

TODO: replace with 4 large icons

*   All new activity tracked in GitHub
*   Cc'ing SAP on relevant historical bugs in bugzilla
*   Shared Slack channel
*   Joint daily standups with all engineers

Note:

Previous SAP standups were only with support organisation, so any
progress on engineering was either invisible or suffered from latency
of reporting.  Now progress is always immediately visible.

SUSE engineers now have much better understanding of SAP pain:

- get immediate, accurate visibility of day-to-day operational issues,
  first-hand from the people who suffer the pain


<!-- .slide: data-state="normal" id="partner-access" data-menu-title="Partner access" data-timing="120" -->
# SAP accounts for partners

Access to SAP network including production cloud

FIXME: replace with large access icon, e.g. key

Note:

Benefits:

-   SUSE engineers can examine production cloud directly
-   No need to waste time collecting logs
-   More in-depth examination possible
-   Efficient console-sharing via `screen(1)`


<!-- .slide: data-state="normal" id="CI-goals" data-timing="120" -->
# CI goals

Facilitate faster change with minimised risk

*   Test everything before deployment to production
*   Test upgrade path too


<!-- .slide: data-state="normal" id="CI-approach" data-timing="120" -->
# CI approach

*   Partially duplicate SUSE internal CI at SAP
*   Focus on SAP stack

FIXME: find icons for daily and gating

*   Run full CI on SAP hardware:
    *   Daily
    *   Gating every PR


<!-- .slide: data-state="normal" id="CI-components" data-timing="120" -->
# CI components

FIXME: replace with OBS / Jenkins / NFS / GitHub icons

SAP has:

*   Open Build Service instance
*   Jenkins instance
*   NFS servers serving SUSE OpenStack Cloud repositories
*   separate NFS server (FIXME: what for?)

Note:

SUSE helped SAP with the initial setup, now all components are being
integrated into SAP workflows.

benefits
*   we can run PR tests on both infrastructures with different setups (in parallel) and get more results faster
*   improve our tools (SUSE)
    *   we (SUSE) change our tools to be agnostic about where they run
    *   we change them to be configurable
    *   remove hardcoded assumptions
    *   better maintainable code due to less custom workarounds
    *   more users and contributors of the tools (faster development, more PRs to the automation repo)
*   reuse existing tools and get new features/changes in (SAP)
