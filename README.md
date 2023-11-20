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
* _In the terminal clone the repository with the command: git clone https://github.com/ajdemski/_
* _Navigte to the top level of the directory._
* _Open index.html in the file you cloned._

## _Link To Site_

* _https://github.com_

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
* Test 1: "An empty array called 'result' will store the message for each number."
* Code:
>function generateAnswer(number) {
  const result = [];
 }
Expected Output: []

 * Test 2: "It will count from 0 to the 'number' that the user inputed"
* Code: 
>for (let i = 0; i <= number; i++) {
  let message = "";
 }
Expected Output: [0, 1, 2, 3, 4, 5]

* Test 3: "It will check if the current number ('i') contains a 1"
* Code:
>for (let i = 0; i <= num; i++) {
  let message = "";
  if (i.toString().includes("1")) {
    message += "won't you be my neighbor?";
  }
}
Expected Output: ["0, won't you be my neighbor?, 2, 3, 4, 5"]

* Test 4: "It will check if the current number ('i') contains a 2"
* Code:
>if (i.toString().includes("2")) {
  message += "boop";
}
Expected Output: ["0, won't you be my neighbor?, boop, 3, 4, 5"]

* Test 5: "It will check if the current number ('i') contains a 3"
* Code:
>else if (i.toString().includes("3")) {
  message += "beep";
}
Expected Output: ["0, won't you be my neighbor?, boop, beep, 4, 5"]