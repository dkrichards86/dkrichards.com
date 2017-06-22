var express = require('express');
var router = express.Router();

var articles = [
  {
    "slug": "nvm",
    "header": "Installing NVM",
    "subheader": "Because I always forget...",
    "postdate": "2017-06-24"
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
      title: "Keith Richards - " + article.header,
      description: article.subheader,
      header: article.header,
      subheader: article.subheader,
      postdate: article.postdate
    });
  });
});

module.exports = router;