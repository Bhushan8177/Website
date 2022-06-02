const { validateEmail } = require("../../../utils/utils");
const sendGrid = require("@sendgrid/mail");
sendGrid.setApiKey(process.env.SENDGRID_KEY);

const handler = async (req, res) => {
	if (req.method !== "POST") {
		return res.status(400).json({ message: "Invalid request" });
	}

	try {
		const { name, email, message } = req.body;

		if (!validateEmail(email)) {
			return res.status(401).json({ message: "Invalid email address" });
		}

		let customMessage =
			`Hello, my name is ${name}. And my email is ${email}. ` + message;

		const msg = {
			to: "sarthakrajesh777@gmail.com",
			from: "nishantbhosale244@gmail.com",
			subject: "Contact With CPMC Club",
			text: customMessage,
		};

		await sendGrid.send(msg);

		res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = handler;
