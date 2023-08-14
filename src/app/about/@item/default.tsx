"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Default() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about");
  }, [router]);

  return <div>loading</div>;
}
