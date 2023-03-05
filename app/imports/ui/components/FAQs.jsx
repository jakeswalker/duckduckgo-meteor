import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { ChevronCompactDown } from 'react-bootstrap-icons';

const FAQs = () => (
  <Container fluid className="p-0">
    <Row className="justify-content-center mx-0">
      <Col xs={11} sm={8} md={6} className="text-center">
        <h2 className="mt-5 py-5"><strong>Frequently Asked Questions</strong></h2>
        <hr />
      </Col>
    </Row>
    <Row className="row justify-content-center mx-0">
      <Col xs={11} sm={8} md={6}>
        <Accordion flush defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="border-0">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>How does DuckDuckGo make money?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">We make our money from private ads on our search engine. On other search engines, ads are based on profiles compiled about you using your personal information like search, browsing, and purchase history. Since we don’t collect that information, search ads on DuckDuckGo are based on the search results page you are viewing, not on you as a person. For example, if you search for cars, we’ll show you ads about cars. <a className="learnMore text-decoration-none" href="/">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="1" className="border-0">
            <Accordion.Header><h5 className="text-white s-5"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>What does Google know about me?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless
              you stop them with DuckDuckGo!). And that’s just the tip of the iceberg. <a className="learnMore text-decoration-none" href="/">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="2" className="border-0">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>Why use DuckDuckGo instead of Google?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">Ever notice ads constantly following you around? That’s in part because Google tracks your searches and hides trackers on millions of websites. By contrast, our private search engine doesn’t track your searches and our <a className="learnMore text-decoration-none" href="/">DuckDuckGo browser extension and mobile app</a> block Google’s (and many other companies’) trackers across the Internet, helping to keep your browsing history more private, as it should be. And that’s just the beginning — by using DuckDuckGo you also escape the manipulation of the filter bubble and can use the Internet faster (after all that tracking code is disabled). <a className="learnMore text-decoration-none" href="/">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="3" className="border-0">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>How do DuckDuckGo search results compare to Google’s?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have everything you’ve come to expect in an online search experience, and a few <a className="learnMore text-decoration-none" href="/">bonus features</a> that make searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no search history on DuckDuckGo, you escape the filter bubble of manipulated results. <a className="learnMore text-decoration-none" href="/">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="4" className="border-0">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>Is DuckDuckGo an “unfiltered” search engine?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">Unlike some other search engines, we don’t alter search results based on someone’s previous search history. In fact, since we don’t track our users we don’t have access to search histories at all! Those other search engines show you results based on a data profile about you and your online activity (including your search history), and so can be slanted towards what they think you will click on the most based on this profiling. This effect is commonly known as the <a className="learnMore text-decoration-none" href="/">search filter bubble</a>, but using DuckDuckGo can help you escape it. <br /><br /> This does not mean our search results are generally “unfiltered” because, for every search you make online, a search engine’s job is to filter millions of possible results down to a ranked order of just a handful. In other words, a search engine has to use algorithms programmed by people to determine what shows up first in the list of results, what shows up second, and so on. Otherwise, for every search you’d just get a completely random set of results, which of course wouldn’t be very useful.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="5" className="border-0">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>Is DuckDuckGo owned by Google?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">No, we are not and have never been owned by Google. We have been an independent company since our founding in 2008 and, unlike some other search engines, we don’t rely on Google’s results for any of our search results. You may notice that we offer a Google Chrome extension and a Google Android app, but these are also not in partnership with Google and actually aim to protect you from Google’s online trackers.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="6" className="border-0">
            <Accordion.Header><h5 className="text-white"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>What’s the difference between using DuckDuckGo and Incognito mode?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">It is a myth that you can’t be tracked while using so-called “Incognito” mode. In fact, Incognito mode mainly just deletes information on your computer and does nothing to stop Google from saving your searches, nor does it stop companies, Internet service providers, or governments from being able to track you across the Internet. By contrast, DuckDuckGo search is completely anonymous and if you add our app & extension on top, we help keep you private when browsing off of search results. <a className="learnMore text-decoration-none" href="/">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="7" className="border-0">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>How popular is DuckDuckGo?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">We don’t track our users, so it’s actually impossible for us to know how many users in total are using our products. However, we are able to make an estimate based on the number of searches we get per month. Our best guess — over 50 million people! <a className="learnMore text-decoration-none" href="/">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
          <Accordion.Item eventKey="8" className="border-0">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown /></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>How does the DuckDuckGo app & extension work?</strong></h5></Accordion.Header>
            {/* eslint-disable-next-line max-len */}
            <Accordion.Body className="bg-black text-white accordion-body">The DuckDuckGo Privacy Browser mobile app and Privacy Essentials desktop extension both come with our best-in-class tracker blocker, encryption enforcer, and private search engine – all in one simple package. This gives you all the key privacy protection tools to search and browse privately, curbing the constant monitoring of your Internet activity by companies like Google and Facebook. <a className="learnMore text-decoration-none" href="/">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr />
        </Accordion>
        <Container className="text-center mt-4 mb-5 pt-3 pb-5">
          <Button type="button" variant="primary" className="bg-primary border-0 text-white rounded-3 mt-2 py-2">Add DuckDuckGo to Chrome</Button>
        </Container>
      </Col>
    </Row>
  </Container>
);
export default FAQs;
