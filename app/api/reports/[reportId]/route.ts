import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ reportId: string }> }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Await the params Promise
    const { reportId } = await params;
    const { status } = await request.json();
    
    const report = await prisma.report.update({
      where: { id: reportId },
      data: { status },
    });

    return NextResponse.json(report);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}