var request = require('request');
var cheerio = require('cheerio');

var target = 'http://www.purpleyo.com/solr/';

request(target+'',function(err,res,body){
    if(!err && res.statusCode === 200){
        $ = cheerio.load(body);
        $('td.offer.onclick').each(function(index,res){
            var linkNode  = $(res).find('a.marginright5.link.linkWithHash.detailsLink');
            var link = $(linkNode).attr('href');
            var title = $(linkNode).text();
            console.log(link);
            console.log(title.trim());
        });
    }
});


//module.exports = app;
