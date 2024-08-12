import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
	// Define no-store to disable caching for the API response
	const filePath = path.join(process.cwd(), "db.json");

	// Get URL parameters
	const { searchParams } = new URL(request.url);
	const name = searchParams.get("name");

	if (!name) {
		return NextResponse.json(
			{ error: "name is required" },
			{ status: 400 }
		);
	}

	try {
		// Read existing data from the JSON file
		let data = JSON.parse(fs.readFileSync(filePath, "utf8"));

		// Update data with the new message
		data.users.push(name);

		// Write updated data back to the JSON file
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

		// Return updated data as JSON response
		return NextResponse.json(data, {
			status: 200,
			headers: {
				"Cache-Control": "no-store",
			},
		});
	} catch (error) {
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
