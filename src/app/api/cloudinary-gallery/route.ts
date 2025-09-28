// app/api/cloudinary-gallery/route.ts
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  secure_url: string;
  format: string;
}

interface CloudinarySearchResponse {
  resources: CloudinaryResource[];
}

export async function GET() {
  try {
    const folder = "gallerypics";

    // type response as unknown, then assert
    const response = (await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by("public_id", "desc")
      .max_results(100)
      .execute()) as unknown;

    const { resources } = response as CloudinarySearchResponse;

    const urls = resources.map((file) => file.secure_url);

    return NextResponse.json({ urls });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
