#!/usr/bin/python3
from jinja2 import Template
from packaging import version
import os, re, json, shutil

APIPATH="./private/api"
OUTPATH="./public/rest-api-description"
SPECS="./public/rest-api-description/app/specs.js"
TEMPLATES="./private/templates"# or whatever

def create_latest(apis):
  latest = []
  for api in apis:
    found = False
    print("#API: "+api["name"]+" "+api["version"]+" "+api["title"])
    for index, latest_api in enumerate(latest):
      if latest_api["area"] == api["area"] and latest_api["name"] == api["name"]:
        found = True
        if version.parse(api["version"]) > version.parse(latest_api["version"]):
            #Found newer version
            print("Replace api in latest with "+api["name"]+" "+api["version"]+" "+api["title"])
            # link = os.path.join(OUTPATH,api["area"], api["name"], api["name"]+".latest.openapi.json")
            # os.remove(link)
            # os.symlink(api["filename"], link)
            latest[index]=api
    if found == False:
      print("Add api to latest: "+api["name"]+" "+api["version"]+" "+api["title"])
      # os.symlink(api["filename"], os.path.join(OUTPATH,api["area"], api["name"], api["name"]+".latest.openapi.json"))
      latest.append(api)
  return latest

def write_templates(apis):
  for subdir, dirs, files in os.walk(TEMPLATES):
    for file in files:
      result = re.match("(.*)\.template$", file)
      if result:
        relativePath = os.path.relpath(subdir, TEMPLATES)
        print("Found template "+relativePath)
        with open(os.path.join(subdir, file)) as template_file:
            template = Template(template_file.read())
        target = os.path.join(relativePath, result.group(1))
        os.makedirs(os.path.join(relativePath), exist_ok = True)
        print("Rendering template "+target)
        with open(target, "w") as target_file:
          target_file.write(template.render(relativePath=relativePath, apis=apis))

apis = []
if os.path.exists("./public/rest-api-description/ctrlx-automation"):
    shutil.rmtree("./public/rest-api-description/ctrlx-automation")

for subdir, dirs, files in os.walk(APIPATH):
  for file in files:
    result = re.match("^api\.[\w\.]+\.json$", file)
    if result:
      print("Found "+file)
      relativePath = os.path.relpath(subdir, APIPATH)
      result = re.search("(.*)\/([^\/]*)\/[\d\.]+\/public$",relativePath)
      if result:
        apipath = os.path.join(subdir,file)
        with open(apipath, "r") as read_file:
          data = json.load(read_file)
          api = {
            "area": result.group(1),
            "name": result.group(2),
            "title": data["info"]["title"],
            "version": data["info"]["version"],
            #"version": re.search("(^[\d]+\.[\d]+).[\d]+$",data["info"]["version"]).group(1),
            "filename": "",
            "url": ""
          }
          filename = "{name}.v{version}.openapi.json".format(name=api["name"], version=api["version"])
          api_path = os.path.join(api["area"], api["name"])
          api["filename"] = filename
          api["url"] = os.path.join(api_path, filename)
          target_path = os.path.join(OUTPATH, api_path)
          target_file = os.path.join(OUTPATH,api["url"])
          apis.append(api)
          os.makedirs(target_path, exist_ok=True)
          shutil.copyfile(apipath, target_file)
          print("Copied to "+target_file)
latest = create_latest(apis)
latest.sort(key=lambda api: api.get("title"))

write_templates(latest)