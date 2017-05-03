<!-- .slide: data-state="normal" id="issues" data-menu-title="Issues" data-timing="120" -->
## Issues with the standard support relationship

*   Lack of transparency
*   Latency of support channels
*   Not enough agility in short-term
*   Not enough influence over long-term roadmap

Note:

- Communication happening in multiple places:
  voice, email, IRC, phone, bugzilla, service request database


<!-- .slide: data-state="normal" id="catastrophe" data-menu-title="Real world example" data-timing="120" -->
## Real world <del>example</del>catastrophe

Tuesday December 6th

<blockquote class="fragment">

During the maint. window at SAP on [Saturday] Dec. 3rd there suddenly
occurred a massive networking disruption in OpenStack which made
communication between VMs on the same tenant network impossible.

<br />

The cause were vanished OVS flows which could be re-established only
after restarting nova and ovs on all compute nodes.

<br />

SAP requested an RCA until Wednesday as to why this has happened.

</blockquote>

Note:

[Why did OVS flows not get reestablished?](https://bugzilla.suse.com/show_bug.cgi?id=1013841)


<!-- .slide: data-state="normal" id="outage" data-menu-title="Outage details" data-timing="120" -->
## Details of maintenance and outage

### Sat Dec 3: morning maintenance window

*   SUSE engineer (Adam) on hand
*   no console access, only screensharing
*   applied package updates and re-ran config. management
*   many VMs lost connectivity!

### Maintenance window extended

*   several hours spent stabilising cloud
*   limited visibility to ops debugging

Note:

Adam had no established working relationship with any of the cloud ops
who were stabilising the cloud and investigating the outage, so
combined with lack of remote access it was difficult to provide
assistance.


<!-- .slide: data-state="normal" id="timeline" data-menu-title="Timeline" data-timing="120" -->
## Timeline of analysis

*   Sat Dec  3: maintenance window and outage
*   Mon Dec  5: SUSE support started collecting logs
*   Tue Dec  6: initial analysis with OVS experts
*   Wed Dec  7: call with SAP to share findings
*   Fri Dec  9: SUSE-only sync call
*   Mon Dec 12: Vincent assigned as escalation manager
*   Thu Dec 15: SUSE / SAP sync call
*   Thu Dec 21: final RCA delivered


<!-- .slide: data-state="normal" id="RCA" data-menu-title="RCA" data-timing="120" -->
## Root Cause Analysis

*   Someone from dev team wanted to test a new feature
*   Code change accidentally got into PTF
*   Neutron L2 population accidentally enabled on
    updated nodes
*   Neutron L2 with OpenvSwitch very complex
    *   Log messages cryptic
    *   Inconsistent config not caught by validation
    *   Resulting undefined behaviour hard to
        explain
*   SAP not involved enough in RCA


<!-- .slide: data-state="normal" id="lessons-learnt" data-menu-title="Lessons learnt" data-timing="120" -->
## Lessons learnt

*   Organisational structure not set up for success
*   Communication too chaotic
*   Time wasted collecting logs
*   Remote access
*   Pair debugging tools
*   PTF building process not good enough
*   (Reminder) OpenStack is complex

