import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const awsAccessKey = process.env.MY_AWS_ACCESS_KEY as string;
const awsSecretKey = process.env.MY_AWS_SECRET_KEY || "";
const awsS3Bucket = process.env.MY_AWS_S3_BUCKET || "";
const awsS3BucketRegion = process.env.MY_AWS_S3_BUCKET_REGION || "";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data, "<<<<<<<");

  const s3 = new S3Client({
    credentials: {
      accessKeyId: awsAccessKey,
      secretAccessKey: awsSecretKey,
    },
    region: awsS3BucketRegion,
  });

  const params = {
    Bucket: awsS3Bucket,
    Key: data.name as string,
  };

  const command = new PutObjectCommand(params);

  const signedUrl = await getSignedUrl(s3, command, {
    expiresIn: 3600,
  });

  console.log(signedUrl, "<<url");
  // const s3Res = await fetch(signedUrl, {
  //   method: "PUT",
  //   body: data.get("file"),
  //   headers: {
  //     "Content-Type": data.get("type") as string,
  //   },
  // });

  return NextResponse.json(signedUrl);
}
