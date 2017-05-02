<!-- .slide: data-state="section-break" id="solution" data-timing="5" -->
# Our solution


<!-- .slide: data-state="normal" id="SAP-SUSE-solution" class="diagram-only" data-timing="120" -->
## Dev/Ops model with SUSE

<div class="diagrams">
    <img class="services" data-src="images/suse_sap_devops.svg"
         alt="SAP / SUSE support pipeline" />
</div>


<!-- .slide: data-state="normal" id="solution-detail" data-timing="120" -->
## How we fixed it

* shared github org
    * dedicated branches to queue changes for next deployment to each prod/test cloud
    * a tag per deployment per cloud (typically one per maintenance window)
* cc'ing SAP on relevant bugs (only partial fix)
* CI + CD concept
* Slack
* agile development
    * joint daily standups
* dedicated engineering team in SUSE
* everything gets fed back into normal SUSE OpenStack Cloud product
