import { NextResponse } from "next/server";

const message =
  "Blog publishing is repo-backed. Add markdown files under content/blog and redeploy.";

export async function GET() {
  return NextResponse.json({ error: message }, { status: 410 });
}

export async function POST() {
  return NextResponse.json({ error: message }, { status: 410 });
}

export async function PATCH() {
  return NextResponse.json({ error: message }, { status: 410 });
}

export async function DELETE() {
  return NextResponse.json({ error: message }, { status: 410 });
}
