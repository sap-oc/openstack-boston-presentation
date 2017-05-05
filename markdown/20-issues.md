<!-- .slide: data-state="normal" id="issues" data-menu-title="Issues" data-timing="120" -->
## Issues with the standard support relationship

<div class="container">
  <div class="item">
    <figure class="fragment">
        <img data-src="images/on-hold.jpg" alt="Fed up of being on hold" />
        <figcaption>Latency</figcaption>
    </figure>
  </div>
  <div class="item">
    <figure class="fragment">
        <img data-src="images/black-box.png" alt="Black box" />
        <figcaption>Visibility</figcaption>
    </figure>
  </div>
  <div class="item">
    <figure class="fragment">
        <img data-src="images/agile-dog.jpg" alt="Show-jumping dog fail" />
        <figcaption>Agility</figcaption>
    </figure>
  </div>
  <div class="item">
    <figure class="fragment">
        <img data-src="images/influence.jpg" alt="Influence" />
        <figcaption>Roadmap</figcaption>
    </figure>
  </div>
</div>

Note:

*   Communication happening in multiple places:
    voice, email, IRC, phone, bugzilla, service request database
*   Lack of transparency
*   Latency of support channels
*   Not enough agility in short-term
*   Not enough influence over long-term roadmap


<!-- .slide: data-state="normal" id="catastrophe" data-menu-title="Real world example" data-timing="120" -->
## Real world <del>example</del>catastrophe

<blockquote class="fragment">
<p>

During the maintenance window at SAP on Saturday there suddenly
occurred a massive networking disruption in OpenStack which made
communication between VMs on the same tenant network impossible.

</p><p>

The cause were vanished OVS flows which could be re-established only
after restarting nova and ovs on all compute nodes.

</p><p>

SAP requested an RCA until Wednesday as to why this has happened.

</blockquote>

Note:

[Why did OVS flows not get reestablished?](https://bugzilla.suse.com/show_bug.cgi?id=1013841)


<!-- .slide: data-state="normal" id="outage" data-menu-title="Outage details" data-timing="120" -->
## Details of maintenance and outage

### Saturday morning maintenance window

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

*   Day 0: maintenance window and outage
*   Day 2: SUSE support started collecting logs
*   Day 3: initial analysis with OVS experts
*   Day 4: call with SAP to share findings
*   Day 6: SUSE-only sync call
*   Day 9: Vincent assigned as escalation manager
*   Day 12: SUSE / SAP sync call
*   Day 20: final RCA delivered


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

