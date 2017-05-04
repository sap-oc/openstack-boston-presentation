<!-- .slide: data-state="section-break" id="results" data-timing="5" -->
# Results so far


<!-- .slide: data-state="normal" id="recent-outage-1" data-menu-title="Example 1" data-timing="120" -->
# Example 1: recent outage

Tuesday April 25

*   07:05 Packet loss on network nodes
*   10:35 Reported in daily standup
*   10:35 SUSE engineer immediately recognises failure
    as ongoing OpenvSwitch issue and provides workaround


<!-- .slide: data-state="normal" id="recent-outage-2" data-menu-title="Example 2" data-timing="120" -->
# Example 2: recent outage

Thursday April 27 evening

*   Unexpected RabbitMQ restart

Friday April 28 morning

*   4 SUSE engineers simultaneously logged in to production
    cloud


<!-- .slide: data-state="blank-slide" class="full-screen" id="recent-outage-2-graph" data-menu-title="Load average graphs" data-timing="120" -->
<img data-src="images/outage-load-avg.png"
     alt="Load average during outage" />


<!-- .slide: data-state="blank-slide" class="full-screen" id="recent-outage-2-graph-2" data-menu-title="Load average graphs" data-timing="120" -->
<img data-src="images/outage-UDPv6.png"
     alt="UDPv6 traffic spike during outage" />


<!-- .slide: data-state="normal" id="recent-outage-2-rca" data-menu-title="RCA" data-timing="120" -->
# Example 2: recent outage

*   Identified unusual peaks in NFS traffic
*   Traced back to issue with NFS servers

