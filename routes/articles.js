var express = require('express');
var router = express.Router();

var articles = [
  {
    "slug": "nvm",
    "header": "Installing NVM",
    "subheader": "Because I always forget...",
    "postdate": "2017-06-22"
  },
  {
    "slug": "redux",
    "header": "Redux",
    "subheader": "What exactly is Redux?",
    "postdate": "2017-06-22"
  },
  {
    "slug": "props-and-state",
    "header": "React Props and State",
    "subheader": "A guide to React's dynamic duo.",
    "postdate": "2017-06-22"
  },
  {
    "slug": "lifecycle",
    "header": "React's Component Lifecycle",
    "subheader": "DOM reconciliation at its finest",
    "postdate": "2017-06-22"
  }
];

router.get('/', function(req, res, next) {
  res.render('articles', {
    title: "Keith Richards - Articles",
    description: "Various articles and musings from Keith Richards, a software developer from Durham, NC.",
    articles: articles
  });
});

articles.forEach( function(article) {
  router.get('/' + article.slug, function(req, res, next) {
    res.render('articles/' + article.slug, {
      title: article.header + " - Keith Richards",
      description: article.subheader,
      header: article.header,
      subheader: article.subheader,
      postdate: article.postdate
    });
  });
});

module.exports = router;