var express = require('express');
var router = express.Router();

var projects = [
  {
    "slug": "portfolio",
    "header": "My Portfolio",
    "subheader": "Learn more about my portfolio"
  },{
    "slug": "sentiment",
    "header": "Twitter Sentiment Platform",
    "subheader": "A suite of tools to perform sentiment analysis on Twitter."
  },
  {
    "slug": "polarity",
    "header": "Presidential Polarity",
    "subheader": "A near realtime visualzation of Twitter's sentiment toward Preident Trump."
  },
  {
    "slug": "metamanager",
    "header": "MetaManager",
    "subheader": "A JavaScript tool for managing a page's metadata"
  },
  {
    "slug": "react-metamanager",
    "header": "React-MetaManager",
    "subheader": "A React implementation of MetaManager"
  }
];

router.get('/', function(req, res, next) {
  res.render('projects', {
    title: "Keith Richards - Projects",
    description: "Take a look at some of the projects by Keith Richards, a software developer from Durham, NC.",
    projects: projects
  });
});

projects.forEach( function(project) {
  router.get('/' + project.slug, function(req, res, next) {
    res.render('projects/' + project.slug, {
      title: "Keith Richards - " + project.header,
      description: project.subheader,
      header: project.header,
      subheader: project.subheader
    });
  });
});

module.exports = router;