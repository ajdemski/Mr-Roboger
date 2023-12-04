#### _By Aaron Demski_

## Technologies Used

* _Html_
* _Css_
* _JavaScript_
* _TDD (Test-Driven-Development)_
* _VsCode_
* _GitHub_

## Description

_A Code Review Project from Aaron Demski, In this repository you'll find index.html, css/styles.css, js/scripts.js, and obviously the README.md. This repo is about Mr. Robogers Neighborhood, input numbers and see what you get returned back to you! Hope you enjoy._

## Setup/Installation Requirements

* _Clone my repository to your desktop using VsCode._
* In the terminal clone the repository with the command: git clone https://github.com/ajdemski/Mr-Roboger
* _Navigte to the top level of the directory._
* _Open index.html in the file you cloned._

## _Link To Site_

* https://ajdemski.github.io/Mr-Roboger/

## Known Bugs

* _No Known Bugs_

## License

_Copyright (c) <2023> <Aaron Demski>_

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _November 19th, 2023_ Aaron Demski

## Tests:

* Describe: generateRoboger(number)
* Test 1: "An empty array called 'result' will store the message for each number."
* Code: generateRoboger(number)
Expected Output: []

* Describe: generateRoboger(number)
* Test 2: "It will count from 0 to the 'number' that the user inputed"
* Code: generateRoboger(5)
Expected Output: [0, 1, 2, 3, 4, 5]

* Describe: generateRoboger(number)
* Test 3: "It will check if the current number ('i') contains a 1"
* Code: generateRoboger(5)
Expected Output: ["0, beep, 2, 3, 4, 5"]

* Describe: generateRoboger(number)
* Test 4: "It will check if the current number ('i') contains a 2"
* Code: generateRoboger(5)
Expected Output: ["0, beep, boop, 3, 4, 5"]

* Describe: generateRoboger(number)
* Test 5: "It will check if the current number ('i') contains a 3"
* Code: generateRoboger(5)
Expected Output: ["0, beep, boop, won't you be my neighbor?, 4, 5"]