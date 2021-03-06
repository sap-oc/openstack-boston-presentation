<!-- .slide: data-state="section-break" id="results" data-timing="10" -->
# Results since start (February)

Note:
It's early days, so we're still working on setting up the CI,
but we've already had some benefits from the organisational changes.


<!-- .slide: data-state="normal" id="recent-outage-1" data-menu-title="Example 1" data-timing="60" -->
# Example 1: recent outage

*   <!-- .element: class="fragment fg-bright-red" -->
    07:05 Packet loss on network nodes
*   <!-- .element: class="fragment" -->
    (soon after) reported in Slack channel
*   <!-- .element: class="fragment" -->
    10:35 Reported in daily standup
*   <!-- .element: class="fragment" -->
    10:35 SUSE automation engineer immediately recognises
    failure as ongoing OpenvSwitch issue
    and provides workaround

Note:

This engineer would not previously have had any regular contact with
SAP.


<!-- .slide: data-state="normal" id="recent-outage-2" data-menu-title="Example 2" data-timing="30" -->
# Example 2: recent outage

### Tuesday evening

*   Unexpected RabbitMQ restart

### Wednesday morning

*   4 SUSE engineers simultaneously logged in to production
    cloud

Note:

Direct access to production cloud => No latency caused by collecting
logs


<!-- .slide: data-state="blank-slide" class="full-screen" id="recent-outage-2-graph" data-menu-title="Load average graphs" data-timing="20" -->
<img data-src="images/outage-load-avg.png"
     alt="Load average during outage" />


<!-- .slide: data-state="blank-slide" class="full-screen" id="recent-outage-2-graph-2" data-menu-title="Load average graphs" data-timing="20" -->
<img data-src="images/outage-UDPv6.png"
     alt="UDPv6 traffic spike during outage" />


<!-- .slide: data-state="normal" id="recent-outage-2-rca" data-menu-title="RCA" data-timing="10" -->
# Example 2: recent outage

*   Identified unusual peaks in NFS traffic
*   Traced back to issue with NFS servers


<!-- .slide: data-state="normal" id="other-benefits" data-menu-title="RCA" data-timing="40" -->
# Other benefits

*   <!-- .element: class="fragment" -->
    More collaborative approach to design, e.g. API rate limiting
*   <!-- .element: class="fragment" -->
    Direct communication with stakeholders vs.
    *   filing service requests (short-term)
    *   filing feature requests (long-term)

Note:
Adam was able to discuss requirements with stakeholders
in real-time during design phase.
