#!/usr/bin/python3
import os
import xml.dom.minidom
import xml.etree.ElementTree as ET
import xml
import functools

APP_PATH="./private/apps"

ET.register_namespace('',"http://schema.boschrexroth.com/nject/cdf.xsd")


cdf = ET.Element("cdf")
cdf.attrib["Version"] = "0.1"
Info = ET.SubElement(cdf, "Info")
Info.attrib["Org"] = "com.boschrexroth"
Info.attrib["Name"] = "apis"
Dependencies = ET.SubElement(cdf, "Dependencies")

def getapideps(path):
    doc = ET.parse(path)
    root = doc.getroot()
    depsInApp = root.findall(".//{http://schema.boschrexroth.com/nject/cdf.xsd}DependsOn")
    return filter(lambda dependency: dependency.attrib["Name"].startswith("api.") , depsInApp)

def find(f, seq):
  for item in seq:
    if f(item): 
      return item

# Walk apps
for subdir, dirs, files in os.walk(APP_PATH):
    for file in files:
        if file == "cdf.xml":
            print("Found cdf in "+subdir)
            dependencies = getapideps(subdir+"/cdf.xml")
            for dependency in dependencies :
                dependency: ET.Element = dependency
                # Remove from cdf path
                cdfpath = os.path.relpath(os.path.normpath(os.path.join(subdir, "..")), "private/apps")
                name = dependency.attrib["Name"]
                if name.startswith("api."):
                    name = name[len("api."):]
                dependency.attrib["Destination"] = os.path.normpath(os.path.join("./private/api", cdfpath, name, dependency.attrib["Version"]))
                print(dependency.attrib["Destination"])
                Dependencies.append(dependency)

Dependencies.extend(getapideps("cdf.xml"))


mydata = ET.tostring(cdf, encoding='unicode', method='xml')
file = open("merged.cdf.xml", "w")
file.write(mydata)