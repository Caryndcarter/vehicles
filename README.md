# Vehicle Builder
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This command line application was created to show off the Inquirer package's functionality along with showcasing Object Oriented Programming principles. It provides a series of prompts that allow you to create a dataset of vehicles of different types (Car, Motorbike or Truck).  These vehicles have different attributes to them like make, model, year, weight, etc.  The trucks can tow other vehicles as long as they weigh less.  The motorbikes can perform wheelies.  All the vehicles can be stopped, started, and driven at different acceleration and deceleration rates.  The command line menu allows you to move through the options. 

### Video Demonstration
[Click here to watch the video demonstration]()

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

After downloading or cloning this repo, make sure you have Node installed and run ``node init -y`` to instantiate your application as a Node app.  Make sure your package.json file has a "type" "module" listed in it.  Install the fs and inquirer packages with ``npm install inquirer`` and ``npm install typescript``.  Run the application in the develop folder with ``npm run build`` or ``npm run start``, depending.  

## Usage

Begin by running ``npm run start`` in the command line. Once you are prompted by Inquirer to answer the necessary questions, be ready to submit your answers. 

 The Inquirer prompt begins with "Create a new vehicle or select an existing vehicle." If you create new vehicle you choose between Car, Truck or Motorbike. From there you have options like this: 
 Select or create another vehicle 
 Exit 
  Print details 
  Start vehicle 
❯ Accelerate 5 MPH 
  Decelerate 5 MPH 
  Stop vehicle 
  Turn right
  Turn left 
  Reverse 
  Tow a vehicle 
  Do a wheelie 

You select or create a vehicle and from there the actions you choose are being performed with that vehicle.  

![Demo](./dev/assets/readme-generator-screenshot.png)


## License

MIT License

The license for this application is MIT License.

https://opensource.org/license/MIT

## Contributing

Contributors: 

Caryn Carter https://github.com/Caryndcarter 

To contribute, contact carter.caryn@gmail.com.

## Tests

Tests for this application have not been written at this time.  When they are written, they will be added in this section.  


## Questions

For questions visit https://github.com/caryndcarter or write to carter.caryn@gmail.com.

