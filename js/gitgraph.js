Reveal.addEventListener( 'ready', function( event ) {
var myTemplateConfig = {
  colors: [ "#F00", "#0F0", "#00F" ], // branches colors, 1 per column
  branch: {
    lineWidth: 10,
    spacingX: 50,
    showLabel: true,                  // display branch names on graph
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: true,
      displayBranch: false,
      displayHash: false,
      font: "normal 24pt Arial"
    },
    shouldDisplayTooltipsInCompactMode: false, // default = true
    tooltipHTMLFormatter: function ( commit ) {
      return "" + commit.sha1 + "" + ": " + commit.message;
    }
  }
};
var myTemplate = new GitGraph.Template( myTemplateConfig );

  var gitgraph = new GitGraph({
    orientation: "horizontal",
    template: myTemplate,
  });

  var soc = gitgraph.branch("SUSE-OpenStack-Cloud");
  soc.commit().commit();

  var prod = soc.branch("prod");
  prod.commit().commit();

  soc.commit().commit().commit();
});
