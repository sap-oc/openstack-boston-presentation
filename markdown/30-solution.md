<!-- .slide: data-state="normal" id="Walldorf" data-menu-title="Walldorf meeting" data-timing="15" -->
# 2-day joint meeting in Walldorf

<img data-src="images/SAP-Walldorf.jpg"
     style="margin-left: 10%;"
     alt="SAP Walldorf" />


<!-- .slide: data-state="section-break" id="solution" data-timing="5" -->
# Our solution


<!-- .slide: data-state="normal" id="SAP-SUSE-solution" class="diagram-only" data-timing="120" -->
## Dev/Ops model with SUSE

<div class="diagrams">
    <img class="services" data-src="images/suse_sap_devops.svg"
         style="margin-left: 10%;"
         alt="SAP / SUSE support pipeline" />
</div>


<!-- .slide: data-state="normal" id="dev-approach" data-menu-title="New dev approach" data-timing="40" -->
# New approach to development

*   <!-- .element: class="fragment" -->
    SAP-specific "friendly fork" of SUSE OpenStack Cloud
*   <!-- .element: class="fragment" -->
    All changes get ported back into SUSE OpenStack Cloud
*   <!-- .element: class="fragment" -->
    Adopt agile practices
    *   Standups
    *   Testing and CI
    *   Backlog

Note: We needed to avoid long-term divergence from the SOC
codebase to avoid doubling maintenance overheads.


<!-- .slide: data-state="normal" id="github-org" data-menu-title="New GitHub org" data-timing="15" -->
# New GitHub organisation

*   Hosts forks of product repositories
*   Issue trackers in each repository

<a href="https://github.com/sap-oc/">
    <img data-src="images/github-org.png" alt="GitHub sap-oc organisation" />
</a>


<!-- .slide: data-state="blank-screen" id="github-project" class="full-screen" data-menu-title="GitHub kanban project" data-timing="15" -->
<a href="https://github.com/orgs/sap-oc/projects/1">
    <img data-src="images/github-project.png" alt="GitHub sap-oc project board" />
</a>


<!-- .slide: data-state="normal" id="github-branches-tags" data-menu-title="Branches / tags" data-timing="70" -->
## GitHub repository branches / tags

<div style="margin-left: 10%; height: 40%;">
  <canvas id="gitGraph"></canvas>
</div>

*   <!-- .element: id="git-branches" class="fragment" -->
    Dedicated branches to queue changes for next deployment
    to each production / test cloud
*   <!-- .element: id="git-tag-1" class="fragment" -->
    Tag per deployment per cloud
*   <!-- .element: id="git-merge" class="fragment" -->
    Changes get merged back into product
*   <!-- .element: id="git-tag-2" class="fragment" -->
    Typically one tag per maintenance window

Note:

Actually, we'll probably cherry-pick back into SOC rather than
merge, but it's the same idea.


<!-- .slide: data-state="normal" id="communication" data-timing="60" -->
# Improved communication

<div class="container">
  <div class="item">
    <figure class="fragment">
        <img data-src="images/GitHub-logo.jpg" alt="GitHub logo" />
    </figure>
  </div>
  <div class="item">
    <figure class="fragment" style="margin-top: -1em">
        <img data-src="images/Bugzilla-logo.png" alt="Bugzilla logo" />
    </figure>
  </div>
  <div class="item">
    <figure class="fragment">
        <img data-src="images/Slack-logo.svg" alt="Slack logo"
             style="height: 90%;" />
    </figure>
  </div>
  <div class="item">
    <figure class="fragment">
        <img data-src="images/daily-standup.jpg" alt="daily standup"
             style="margin-top: -2em; max-height: 130%;" />
    </figure>
  </div>
</div>

Note:

*   All new activity tracked in GitHub
*   Cc'ing SAP on relevant historical bugs in bugzilla
*   Shared Slack channel
*   Joint daily standups with all engineers

Previous SAP standups were only with support organisation, so any
progress on engineering was either invisible or suffered from latency
of reporting.  Now progress is always immediately visible.

SUSE engineers now have much better understanding of SAP pain:

- get immediate, accurate visibility of day-to-day operational issues,
  first-hand from the people who suffer the pain


<!-- .slide: data-state="normal" id="partner-access" data-menu-title="Partner access" data-timing="25" -->
# SAP accounts for partners

<img data-src="images/RSA-token.png" alt="RSA token" />

Note:

Access to SAP network including production cloud

Benefits:
-   SUSE engineers can examine production cloud directly
-   No need to waste time collecting logs
-   More in-depth examination possible
-   Efficient console-sharing via `screen(1)`


<!-- .slide: data-state="normal" id="CI-goals" data-timing="40" -->
# CI goals

Facilitate faster change with minimised risk

*   <!-- .element: class="fragment" -->
    Test everything before deployment to production
*   <!-- .element: class="fragment" -->
    Test upgrade path too
    *   Know which services get restarted by upgrade

Note:

Knowing which services get restarted helps us understand the full
impact of the upgrade so we can plan maintenance windows better.


<!-- .slide: data-state="normal" id="CI-approach" data-timing="60" -->
# CI approach

*   <!-- .element: class="fragment" -->
    Partially duplicate SUSE internal CI at SAP
*   <!-- .element: class="fragment" -->
    Focus on SAP stack

<div class="container">
  <div class="item fragment">
      <img data-src="images/daily-clock.jpg" alt="daily clock" />
  </div>
  <div class="item fragment">
      <img data-src="images/car-gate.png" alt="entry barrier"
             style="height: 50%; margin-top: 12%;" />
  </div>
</div>

Note:

Run full CI on SAP hardware:
*   Daily
*   Gating every PR


<!-- .slide: data-state="normal" id="CI-components" data-timing="60" -->
# CI components

<div class="container">
  <div class="item">
    <figure class="fragment">
        <img data-src="images/GitHub-logo.jpg" alt="GitHub logo" />
    </figure>
  </div>
  <div class="item">
    <figure class="fragment">
        <img data-src="images/OBS-logo.png" alt="OBS logo"
             style="height: 50%; margin-top: 12%;" />
    </figure>
  </div>
  <div class="item">
    <figure class="fragment">
        <a title="By The Jenkins project (http://jenkins-ci.org/) (https://wiki.jenkins-ci.org/display/JENKINS/Logo) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3AJenkins_logo.svg">
            <img alt="Jenkins logo" src="images/Jenkins_logo.svg"/>
        </a>
    </figure>
  </div>
</div>

Note:

SAP has:

*   Open Build Service instance
*   Jenkins instance

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
