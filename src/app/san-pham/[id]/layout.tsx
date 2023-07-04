import Category from "@/components/Category";
import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Category />
    </div>
  );
}
