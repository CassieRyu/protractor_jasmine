A framework for UI Testing
---------------

### Framework setup steps
Update npm

    $ npm install -g npm

Install

    $ cd protractor_jasmine
    $ npm install
    $ npm install --save protractor
    $ webdriver-manager update
    $ webdriver-manager start
    $ node_modules/protractor/bin/webdriver-manager update

    $ npm install --save-dev jasmine
    $ npm install --save-dev jshint
    $ npm install --save jasmine-fail-fast
    $ npm install --save jasmine-spec-reporter
    $ npm install --save-dev protractor-beautiful-reporter


##### Run test

* "directConnect: true" which communicates directly Chrome Driver or Firefox Driver, bypassing any Selenium Server.
* The advantage of directly connecting to browser drivers is that your test scripts may start up and run faster.
* To use it, we need to install drivers under protractor first, as above
```
$ node_modules/protractor/bin/webdriver-manager update
$ npm run local
```
* Using selenium standalone, we need to specify selenium address
```
$ webdriver-manager start
$ npm run local
```
##### Test Report
* Refer to src/report/report.html

#### Selenium grid
* Run test parallel
* selenium grid configs in `./grid` folder
* Start selenium hub
```
$ java -jar selenium-server-standalone-3.13.0.jar -role hub  
```
* Register nodes
```
$ java -Dwebdriver.chrome.driver="chromedriver" -Dwebdriver.gecko.driver="geckodriver" -Dwebdriver.safari.driver="SafariDriver.safariextz" -jar selenium-server-standalone-3.13.0.jar -role node -nodeConfig Node-2.json
```
* Run test
```
$ npm run ci
or
$ npm run ci-multi //TODO: why safari error, firefox not working
```
