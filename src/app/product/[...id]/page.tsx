import React from "react";

export default function ProductDetail({
  params: { id },
}: {
  params: { id: string[] };
}) {
  return <div>현재 url은 {`"/product/${id.join("/")}"`}</div>;
}
