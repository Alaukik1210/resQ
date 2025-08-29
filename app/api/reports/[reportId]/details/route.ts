import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { reportId: string } }
) {
  try {
    const { reportId } = params;

    const report = await prisma.report.findUnique({
      where: {
        reportId: reportId,
      },
    });

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json(report, { status: 200 });
  } catch (error) {
    console.error("Error fetching report details:", error);
    return NextResponse.json(
      { error: "Failed to fetch report details" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { reportId: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();

    const report = await prisma.report.update({
      where: { reportId: params.reportId },
      data: { status },
    });

    return NextResponse.json(report, { status: 200 });
  } catch (error) {
    console.error("Error updating report:", error);
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}
