# CrawlKit sample

A very simple usage sample for CrawlKit that runs a few runners against a given webpage:

[Alistair Duggin](https://twitter.com/dugboticus), [16th February 2016 on twitter](https://twitter.com/dugboticus/status/699738090986958848):
> Created a page with 100 accessibility fails to test & compare automated accessibility tools http://goo.gl/7w6iBb  Loads more fails to add!

This sample runs against Alistair's sample site and prints the found accessibility defects to the console.

Please note: this sample only runs against a single webpage. [CrawlKit](https://github.com/crawlkit/crawlkit) is actually tailored to crawl a whole network of pages and run against all of them. As such, the returned result for a single webpage is seemingly a bit complex. To run against multiple webpages, have a look at the examples in the CrawlKit main repository.

## How to
* Clone this repository
* Run `npm install`
* Run `npm start`

## ...but I just want to see the output before installing something!
The results are in `result/`, use [json2table.com](http://json2table.com/) for easier browsing.
