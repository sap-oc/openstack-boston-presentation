Reveal.addEventListener( 'ready', function( event ) {
  var myTemplateConfig = {
    colors: [ "#02d35f", "#00b2e2", "#02a49c" ], // branches colors, 1 per column
    branch: {
      lineWidth: 10,
      spacingX: 90,
      showLabel: true,                  // display branch names on graph
      labelFont: "normal 14pt Arial"
    },
    commit: {
      spacingY: -100,
      dot: {
        size: 12
      },
      message: {
        displayAuthor: true,
        displayBranch: false,
        displayHash: false,
      },
      tag: {
        font: "normal 12pt Arial"
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
    mode: "extended",
  });

  var soc = gitgraph.branch("SUSE OpenStack Cloud");
  var branchpoint = "fa553a9";
  soc.commit().commit().commit({sha1: branchpoint});

  document.gitgraph = { soc, branchpoint };
});

Reveal.addEventListener( 'fragmentshown', function( event ) {
  var gg = document.gitgraph;
  var soc = gg.soc;

  if (event.fragment.id === "git-branches") {
    soc.checkout();

    var prod = soc.branch("production");
    gg.prod = prod;
    // var prod = new GitGraph.Branch({
    //   name: "prod",
    //   parent: gg,
    //   parentBranch: soc,
    //   parentCommit: gg.branchpoint,
    //   commitDefaultOptions: soc.commitDefaultOptions,
    // });
    // prod.template = soc.template;

    soc.checkout(prod);
    prod.commit().commit();
    soc.commit();
  }
  else if (event.fragment.id === "git-tag-1") {
    var prod = gg.prod;
    prod.tag("prod-2017-02-27-001");
    prod.commit();
  }
  else if (event.fragment.id === "git-merge") {
    var prod = gg.prod;
    prod.merge(soc);
  }
  else if (event.fragment.id === "git-tag-2") {
    var prod = gg.prod;
    prod.tag("prod-2017-03-12-001");
    prod.commit();
  }
});
