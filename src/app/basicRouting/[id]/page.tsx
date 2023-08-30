import React from "react";

export default function page({ params: { id } }: { params: { id: string } }) {
  return <div>post : {id} 상세페이지</div>;
}
