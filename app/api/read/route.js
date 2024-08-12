import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

import fs from "fs";
import path from "path";

export async function GET() {
    noStore();
	const filePath = path.join(process.cwd(), "db.json");

	try {
		const data = fs.readFileSync(filePath, "utf8");
		return NextResponse.json(JSON.parse(data));
	} catch (error) {
		return NextResponse.json(
			{ error: "Error reading file" },
			{ status: 500 }
		);
	}
}
