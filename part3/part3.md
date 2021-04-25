1) The bug was that `num1` and `num2` were both being read in as strings, so adding the two together resulted in a string concatentation operation being performed instead of a addition operation as intended.
2) I would fix it converting both `num1` and `num2` to the `Number` datatype by using the `Number()` function on both `num1` and `num2` as they are being added and stored in `result`.
3) The name of the json file is citylots.json.
4) The file part2.js initiated the file download.
5) The size of the json file is 11.7 MB.
6) It took 2.11 seconds to download.
7) The User-Agent for the browser was Chrome, but because I was using a Macbook, it also had a Safari part included. The browser portion that I received was `Chrome/89.0.4389.128 Safari/537.36`. The whoe User-Agent I received was : `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36`.
8) The type of server the file came from was an Apache server.
9) In the response headers for `Last-Modified`, it says the file was last modified on `Tue, 26 Jan 2021 22:14:13 GMT`.
10) The Content-Type of the file was application/json.
11) The method that made made the request was `fetchData` in part2.js.