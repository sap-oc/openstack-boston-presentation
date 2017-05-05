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

*   SUSE engineer (Adam) on hand <!-- .element: class="fragment" -->
*   no console access, only screensharing <!-- .element: class="fragment" -->
*   applied package updates and re-ran config. management <!-- .element: class="fragment" -->
*   many VMs lost connectivity! <!-- .element: class="fragment" -->

### Maintenance window extended <!-- .element: class="fragment" -->

*   several hours spent stabilising cloud <!-- .element: class="fragment" -->
*   limited visibility to ops debugging <!-- .element: class="fragment" -->

Note:

Adam had no established working relationship with any of the cloud ops
who were stabilising the cloud and investigating the outage, so
combined with lack of remote access it was difficult to provide
assistance.


<!-- .slide: data-state="normal" id="timeline" data-menu-title="Timeline" data-timing="120" -->
## Timeline of analysis

*   Day 0 (Sat): maintenance window and outage
*   Day 2 (Mon): SUSE support collected debug <!-- .element: class="fragment" -->
*   Day 3: initial analysis with OVS experts <!-- .element: class="fragment" -->
*   Day 4: call with SAP to share initial findings <!-- .element: class="fragment" -->
*   Day 5: more analysis <!-- .element: class="fragment" -->
*   Day 6: SUSE-only sync call <!-- .element: class="fragment" -->
*   ... more analysis ... <!-- .element: class="fragment" -->
*   Day 12: SUSE / SAP sync call <!-- .element: class="fragment" -->
*   Day 20: final RCA delivered <!-- .element: class="fragment" -->


<!-- .slide: data-state="normal" id="RCA" data-menu-title="RCA" data-timing="120" -->
## Root Cause Analysis

*   Someone from dev team wanted to test a new feature <!-- .element: class="fragment" -->
*   New feature relied on L2 population <!-- .element: class="fragment" -->
*   Code change accidentally got into PTF <!-- .element: class="fragment" -->
*   Neutron L2 population accidentally enabled on (some)
    updated nodes <!-- .element: class="fragment" -->


<!-- .slide: data-state="normal" id="RCA-harad" data-menu-title="Why was it hard?" data-timing="120" -->
## Why was the Root Cause Analysis so hard?

### Neutron L2 with OpenvSwitch very complex <!-- .element: class="fragment" -->

*   Cryptic log messages <!-- .element: class="fragment" -->
*   Inconsistent config not caught by validation <!-- .element: class="fragment" -->
*   Resulting behaviour undefined and undocumented <!-- .element: class="fragment" -->
    *    so hard to explain

### SAP not involved enough in RCA <!-- .element: class="fragment" -->


<!-- .slide: data-state="normal" id="lessons-learnt" data-menu-title="Lessons learnt" data-timing="120" -->
## Lessons learnt

*   Organisational structure not set up for success <!-- .element: class="fragment" -->
*   Communication too chaotic <!-- .element: class="fragment" -->
*   Time wasted collecting logs <!-- .element: class="fragment" -->
*   Remote access critical <!-- .element: class="fragment" -->
*   Pair debugging tools <!-- .element: class="fragment" -->
*   PTF building process not good enough <!-- .element: class="fragment" -->
*   (Reminder) OpenStack is complex <!-- .element: class="fragment fg-red" -->

