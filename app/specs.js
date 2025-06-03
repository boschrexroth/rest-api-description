/*
 * MIT License
 * 
 * Copyright (c) 2020-2022 Bosch Rexroth AG
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

let specs = [
  {
    "name": "ctrlX Firewall - Firewall API v1.2.3",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-firewall/firewall/firewall.v1.2.3.openapi.json"
  },
  {
    "name": "ctrlX OS - Apps Management API v1.14.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/packagemanager/packagemanager.v1.14.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Authorization and Authentication API v2.7.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/identitymanager/identitymanager.v2.7.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Backup API v1.3.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/backup/backup.v1.3.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Certificates API v2.6.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/certificatemanager/certificatemanager.v2.6.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Compliance API v1.1.3",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/compliance/compliance.v1.1.3.openapi.json"
  },
  {
    "name": "ctrlX OS - Connectivity API v1.12.2",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/networkmanager/networkmanager.v1.12.2.openapi.json"
  },
  {
    "name": "ctrlX OS - Data Layer API v2.1.4",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-automationcore/datalayer/datalayer.v2.1.4.openapi.json"
  },
  {
    "name": "ctrlX OS - Device Registration API v1.0.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/deviceregistration/deviceregistration.v1.0.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Licensing API v1.8.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/licensemanager/licensemanager.v1.8.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Logbook API v2.3.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/logbook/logbook.v2.3.0.openapi.json"
  },
  {
    "name": "ctrlX OS - SSH API v1.0.7",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/ssh/ssh.v1.0.7.openapi.json"
  },
  {
    "name": "ctrlX OS - Setup API v1.7.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-setup/setup/setup.v1.7.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Solutions API v1.11.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-solutions/solutions/solutions.v1.11.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Storage API v1.6.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/storage/storage.v1.6.0.openapi.json"
  },
  {
    "name": "ctrlX OS - System API v1.13.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/systeminfo/systeminfo.v1.13.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Themes API v1.0.3",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/themes/themes.v1.0.3.openapi.json"
  },
  {
    "name": "ctrlX OS Task Manager v1.4.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/taskmanager/taskmanager.v1.4.0.openapi.json"
  },
  {
    "name": "ctrlX OS VPN Client - VPN Client API v1.2.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-vpnmanager/vpnmanager/vpnmanager.v1.2.1.openapi.json"
  },
  {
    "name": "ctrlX WORKS - Devices API v1.3.0",
    "url": "../ctrlx-automation/ctrlx-works/ctrlx-works/ctrlx-works.v1.3.0.openapi.json"
  },
  {
    "name": "ctrlX WORKS - IO Engineering API v2.8.0",
    "url": "../ctrlx-automation/ctrlx-works/io-engineering/io-engineering.v2.8.0.openapi.json"
  },
  {
    "name": "ctrlX WORKS - PLC Engineering API v2.9.0",
    "url": "../ctrlx-automation/ctrlx-works/plc-engineering/plc-engineering.v2.9.0.openapi.json"
  },
]