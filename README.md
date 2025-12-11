# Bosch Rexroth's REST API Description

This repository contains [OpenAPI](https://www.openapis.org/) descriptions for REST APIs of Bosch Rexroth Devices and Services.

## What is OpenAPI?

From the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification):

> The OpenAPI Specification (OAS) defines a standard, programming language-agnostic interface description for HTTP APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OpenAPI Specification removes guesswork in calling a service.

## OpenAPI Conformance and Code Generation

The OpenAPI Specification (OAS) in this repository adheres to the official OpenAPI standards, ensuring a standardized and machine-readable description of our APIs. While we strive to maintain conformance with the OpenAPI Specification, it's important to note the following:

- We guarantee that our API descriptions are OpenAPI compliant and can be parsed by OpenAPI-compatible tools.
- However, we do __not guarantee__ that OpenAPI code generators will produce ready-to-compile code from these specifications.

Code generation from OpenAPI specifications can be complex, especially for APIs with advanced features. Many generators struggle with concepts like oneOf, anyOf, multiple requests/responses, multipart data, and complex component structures. As a result, generated code may require manual adjustments or custom templates to function correctly in your specific environment.

Given the vast array of programming languages, frameworks, and development environments available, it is not feasible for us to maintain or support generated code for every possible combination. Users of our OpenAPI specifications should be prepared to take ownership of any generated code and adapt it to their specific needs.

### General Recommendations

When working with OpenAPI code generators for client generation, consider the following advice:

- Choose the right generator: Select a generator that supports your target language and framework. The OpenAPI Eco System offers a wide range of options for various programming languages and platforms.
- Ensure that your generator is up-to-date.
- Utilize additional properties: When generating clients, use additional properties to fine-tune the output. For example, you can specify file naming conventions or include interfaces in many of the code generators available.
- Leverage community support: OpenAPI has an active community, so don't hesitate to seek help or contribute improvements.
- Test generated code: Always test the generated code to ensure it works as expected. Consider generating and running unit tests if supported by your chosen generator. 
- Be prepared for changes: When upgrading your OpenAPI Generator, it's important to expect and be prepared for changes in the generated code. Updates to the generator may involve changes to the templates used for code generation. This can result in differences in the generated code structure or style.

In conclusion, OpenAPI generators are powerful tools that can significantly accelerate API integration and maintain consistency across multiple platforms. However, their effective use requires careful consideration of code quality, versioning, and customization needs. By balancing the benefits of automation with thoughtful implementation and rigorous testing, developers can harness the full potential of these tools while mitigating associated risks.


## List of OpenAPI Descriptions

| Area | Description |
| ---- | ----------- |
| [ctrlX CORE](./ctrlx-automation/ctrlx-core/) | ctrlX CORE related rest api descriptions |
| [ctrlX WORKS](./ctrlx-automation/ctrlx-works/) | ctrlX WORKS related rest api descriptions |

__NOTE:__ Only REST API descriptions in this repository are considered stable and can be used by applications. Other APIs and http calls (e.g. reverse engineered) that are not official documented in this repository can not be considered in a stable state and might break in the future. They should not be used.

## Important directions for use

### Areas of use and application

The content (e.g. source code and related documents) of this repository is intended to be used for configuration, parameterization, programming or diagnostics in combination with selected Bosch Rexroth ctrlX AUTOMATION devices.
Additionally, the specifications given in the "Areas of Use and Application" for ctrlX AUTOMATION devices used with the content of this repository do also apply.

### Unintended use

Any use of the source code and related documents of this repository in applications other than those specified above or under operating conditions other than those described in the documentation and the technical specifications is considered as "unintended". Furthermore, this software must not be used in any application areas not expressly approved by Bosch Rexroth.

## About

Copyright © 2021-2022 Bosch Rexroth AG. All rights reserved.

<https://www.boschrexroth.com>

Bosch Rexroth AG  
Bgm.-Dr.-Nebel-Str. 2  
97816 Lohr am Main  
GERMANY  

## Licenses

MIT License

Copyright (c) 2021-2022 Bosch Rexroth AG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
