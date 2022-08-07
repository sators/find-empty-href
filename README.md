# find-empty-hrefs

A node script to traverse a folder (and it's subfolders) for (x)html files and return a list of files that have an `<a>` tag with an empty `href` attribute.

## Installation

```sh
$ npm i -g find-empty-hrefs
```

## Usage

```sh
$ cd my/folder/with/html/files
$ find-empty-hrefs
```

## Example Output

```
$ find-empty-hrefs
**** Searching 1 file for Empty href Values in <a> Tags ****
Reading sample.xhtml...
**** Search Complete.  Found 1 bad file ****
Empty HREFs found in sample.xhtml
```
