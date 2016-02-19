const CrawlKit = require('crawlkit');

// Runners for Crawlkit
const AxeRunner = require('crawlkit-runner-axe');
const HtmlcsRunner = require('crawlkit-runner-htmlcs');
const A11yDeveloperToolsRunner = require('crawlkit-runner-accessibility-developer-tools');

const url = 'http://aduggin.github.io/accessibility-fails/';
const crawler = new CrawlKit(url);

crawler.addRunner('a11y-dev-tools', new A11yDeveloperToolsRunner());
crawler.addRunner('axe', new AxeRunner());
crawler.addRunner('htmlcs', new HtmlcsRunner());

crawler.crawl()
    .then((results) => {
        console.log(JSON.stringify(results, true, 2));
    }, (err) => console.error(err));
