const HID = require("node-hid");
const REPL = require("repl");

const repl = REPL.start("node-hid > ");

const hid = new HID.HID(1103,46685);


hid.gotData = function (err,data){
	console.log("got t300rs data", data);
	this.read(this.gotData.bind(this));
}

hid.read(hid.gotData.bind(hid));

repl.context.hid = hid;
