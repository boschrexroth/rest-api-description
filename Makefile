.PHONY: all
all: prepare build

.PHONY: dep
dep:
	nject reset

.PHONY: prepare
prepare: dep
	./private/scripts/merge_cdf.py
	nject reset -cdf merged.cdf.xml
	pip3 install wheel
	pip3 install jinja2 packaging
	pip3 install mkdocs mkdocs-material
	rm -rf ./public/rest-api-description/ctrlx-automation/

.PHONY: build
build: generate copy
	python3 -m mkdocs build

.PHONY: copy
copy:
	rsync -am --include='app/***' --delete --exclude='*' ./public/rest-api-description/ ./private/docs
	rsync -am --include='README.md' --delete --include='ctrlx-automation/***' --exclude='*' ./public/rest-api-description/ ./private/docs

.PHONY: generate
generate:
	./private/scripts/generate.py

.PHONY: prerchive
prerchive:
	rm -rf build
	mkdir -p build
	cp -ar public build/
	cp -ar merged.cdf.xml build/cdf.used.xml