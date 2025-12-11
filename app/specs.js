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
    "name": "Bosch Rexroth Assertion Manager Service v1.1.1",
    "url": "../ctrlx-automation/ctrlx-core/Assertion Manager ASM/assertionmanager/assertionmanager.v1.1.1.openapi.json"
  },
  {
    "name": "ctrlX CORE - Security Scanner API v1.3.1",
    "url": "../ctrlx-automation/ctrlx-core/Security Scanner SSC/securityscanner/securityscanner.v1.3.1.openapi.json"
  },
  {
    "name": "ctrlX Device Portal Agent - Device Portal Agent API v1.5.0",
    "url": "../ctrlx-automation/ctrlx-core/Remote Agent RMA/remoteagent/remoteagent.v1.5.0.openapi.json"
  },
  {
    "name": "ctrlX Device Portal Agent - Proxy API v1.0.3",
    "url": "../ctrlx-automation/ctrlx-core/Remote Agent RMA/remoteagent.proxy/remoteagent.proxy.v1.0.3.openapi.json"
  },
  {
    "name": "ctrlX Firewall - Firewall API v2.0.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-firewall/firewall/firewall.v2.0.0.openapi.json"
  },
  {
    "name": "ctrlX Firewall - Firewall API v1.2.3",
    "url": "../ctrlx-automation/ctrlx-core/Firewall FRW/firewall/firewall.v1.2.3.openapi.json"
  },
  {
    "name": "ctrlX Modbus TCP API v1.1.0",
    "url": "../ctrlx-automation/ctrlx-core/Modbus TCP MBT/modbustcp/modbustcp.v1.1.0.openapi.json"
  },
  {
    "name": "ctrlX Model Connect API v2.4.1",
    "url": "../ctrlx-automation/ctrlx-core/Model Connect MOC/modelconnect/modelconnect.v2.4.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Apps Management API v1.15.0",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/packagemanager/packagemanager.v1.15.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Apps Management API v1.15.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/packagemanager/packagemanager.v1.15.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Authorization and Authentication API v2.9.2",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/identitymanager/identitymanager.v2.9.2.openapi.json"
  },
  {
    "name": "ctrlX OS - Authorization and Authentication API v2.9.2",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/identitymanager/identitymanager.v2.9.2.openapi.json"
  },
  {
    "name": "ctrlX OS - Backup API v1.3.1",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/backup/backup.v1.3.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Backup API v1.3.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/backup/backup.v1.3.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Certificates API v2.7.1",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/certificatemanager/certificatemanager.v2.7.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Certificates API v2.7.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/certificatemanager/certificatemanager.v2.7.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Compliance API v1.1.3",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/compliance/compliance.v1.1.3.openapi.json"
  },
  {
    "name": "ctrlX OS - Compliance API v1.1.3",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/compliance/compliance.v1.1.3.openapi.json"
  },
  {
    "name": "ctrlX OS - Connectivity API v1.13.0",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/networkmanager/networkmanager.v1.13.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Connectivity API v1.13.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/networkmanager/networkmanager.v1.13.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Data Layer API v2.1.4",
    "url": "../ctrlx-automation/ctrlx-core/Automation Core XCR/datalayer/datalayer.v2.1.4.openapi.json"
  },
  {
    "name": "ctrlX OS - Data Layer API v2.1.4",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-automationcore/datalayer/datalayer.v2.1.4.openapi.json"
  },
  {
    "name": "ctrlX OS - Device Registration API v1.2.0",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/deviceregistration/deviceregistration.v1.2.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Device Registration API v1.2.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/deviceregistration/deviceregistration.v1.2.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Licensing API v1.9.1",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/licensemanager/licensemanager.v1.9.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Licensing API v1.9.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/licensemanager/licensemanager.v1.9.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Logbook API v2.4.0",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/logbook/logbook.v2.4.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Logbook API v2.4.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/logbook/logbook.v2.4.0.openapi.json"
  },
  {
    "name": "ctrlX OS - PLC API v1.6.0",
    "url": "../ctrlx-automation/ctrlx-core/PLC PLC/plc/plc.v1.6.0.openapi.json"
  },
  {
    "name": "ctrlX OS - SSH API v1.0.7",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/ssh/ssh.v1.0.7.openapi.json"
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
    "name": "ctrlX OS - Setup API v1.7.0",
    "url": "../ctrlx-automation/ctrlx-core/Setup XCR/setup/setup.v1.7.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Solutions API v1.12.0",
    "url": "../ctrlx-automation/ctrlx-core/Solutions XCR/solutions/solutions.v1.12.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Solutions API v1.12.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-solutions/solutions/solutions.v1.12.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Storage API v1.9.1",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/storage/storage.v1.9.1.openapi.json"
  },
  {
    "name": "ctrlX OS - Storage API v1.9.1",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/storage/storage.v1.9.1.openapi.json"
  },
  {
    "name": "ctrlX OS - System API v1.15.2",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/systeminfo/systeminfo.v1.15.2.openapi.json"
  },
  {
    "name": "ctrlX OS - System API v1.15.2",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/systeminfo/systeminfo.v1.15.2.openapi.json"
  },
  {
    "name": "ctrlX OS - Telegraf Configuration API v2.1.0",
    "url": "../ctrlx-automation/ctrlx-core/Telegraf Server Agent TSA/telegraf/telegraf.v2.1.0.openapi.json"
  },
  {
    "name": "ctrlX OS - Themes API v1.0.3",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/themes/themes.v1.0.3.openapi.json"
  },
  {
    "name": "ctrlX OS - Themes API v1.0.3",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/themes/themes.v1.0.3.openapi.json"
  },
  {
    "name": "ctrlX OS Task Manager v1.4.0",
    "url": "../ctrlx-automation/ctrlx-core/Device Admin XCR/taskmanager/taskmanager.v1.4.0.openapi.json"
  },
  {
    "name": "ctrlX OS Task Manager v1.4.0",
    "url": "../ctrlx-automation/ctrlx-core/rexroth-deviceadmin/taskmanager/taskmanager.v1.4.0.openapi.json"
  },
  {
    "name": "ctrlX OS VPN Client - VPN Client API v1.2.1",
    "url": "../ctrlx-automation/ctrlx-core/VPN Client VPN/vpnmanager/vpnmanager.v1.2.1.openapi.json"
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
    "name": "ctrlX WORKS - IO Engineering API v2.9.0",
    "url": "../ctrlx-automation/ctrlx-works/io-engineering/io-engineering.v2.9.0.openapi.json"
  },
  {
    "name": "ctrlX WORKS - PLC Engineering API v2.10.0",
    "url": "../ctrlx-automation/ctrlx-works/plc-engineering/plc-engineering.v2.10.0.openapi.json"
  },
]