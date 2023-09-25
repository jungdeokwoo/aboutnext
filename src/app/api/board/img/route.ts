import { NextRequest, NextResponse } from "next/server";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const awsAccessKey = process.env.MY_AWS_ACCESS_KEY as string;
const awsSecretKey = process.env.MY_AWS_SECRET_KEY || "";
const awsS3Bucket = process.env.MY_AWS_S3_BUCKET || "";
const awsS3BucketRegion = process.env.MY_AWS_S3_BUCKET_REGION || "";

export async function POST(req: NextRequest) {
  const data = await req.json();
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

  return NextResponse.json(signedUrl);
}

export async function DELETE(req: NextRequest) {
  const url = await req.text();
  const params = {
    Bucket: awsS3Bucket,
    Key: decodeURIComponent(url),
  };

  const s3 = new S3Client({
    credentials: {
      accessKeyId: awsAccessKey,
      secretAccessKey: awsSecretKey,
    },
    region: awsS3BucketRegion,
  });

  const command = new DeleteObjectCommand(params);

  const data = await s3.send(command);
  if (data.$metadata.httpStatusCode === 204) {
    fetch(`${process.env.BASE_URL}/api/board/img/url`, {
      method: "DELETE",
      body: url,
    });
  }

  return NextResponse.json("delete");
}
