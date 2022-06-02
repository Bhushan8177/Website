const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
		unique: true,
	},
	academicYear: {
		type: String,
		required: true,
	},
	branch: {
		type: String,
		required: true,
	},
	division: {
		type: String,
		required: true,
	},
	hackerRankId: {
		type: String,
		unique: true,
		default: "",
	},
	leetCodeId: {
		type: String,
		unique: true,
		default: "",
	},
	codeChefId: {
		type: String,
		unique: true,
		default: "",
	},
	codeForcesId: {
		type: String,
		unique: true,
		default: "",
	},
	atCoderId: {
		type: String,
		unique: true,
		default: "",
	},
	hackerEarthId: {
		type: String,
		unique: true,
		default: "",
	},
});

module.exports = mongoose.model("Student", StudentSchema);
