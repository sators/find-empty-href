#!/user/bin/env node

const glob = require("glob")
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const fs = require("fs")
const { exit } = require("process")
const htmlFiles = glob.sync("**/*html")

console.log(
	`**** Searching ${htmlFiles.length} file${
		htmlFiles.length !== 1 ? "s" : ""
	} for Empty href Values in <a> Tags ****`,
)
const badLinks = []
htmlFiles.forEach((file) => {
	console.log(`Reading ${file}...`)
	const html = fs.readFileSync(file, "utf-8")
	const document = new JSDOM(html).window.document
	const links = document.querySelectorAll("a")
	links.forEach((link) => {
		if (
			link.attributes.getNamedItem("href") !== null &&
			!link.attributes.getNamedItem("href").textContent
		) {
			badLinks.push(file)
		}
	})
})
console.log(
	`**** Search Complete.  Found ${badLinks.length} bad file${
		badLinks.length !== 1 ? "s" : ""
	} ****`,
)
if (badLinks.length > 0) {
	console.error(`Empty HREFs found in ${badLinks.join(", ")}`)
	exit(1)
} else {
	exit(0)
}
