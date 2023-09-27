import LoadingCircle from "@/components/LoadingCircle";
import React from "react";

export default function Post() {
  return (
    <div>
      포스트 메인페이지 baseUrl:{process.env.BASE_URL}
      <LoadingCircle />
    </div>
  );
}
