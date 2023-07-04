"use client";

import { ICategory } from "@/common/interfaces";
import { useAllCategory } from "@/hooks/useAllCategory";

export default function Category() {
  const { data, error } = useAllCategory({
    fallbackData: true,
    refreshInterval: 500,
  });
  if (!data) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      {data &&
        data.categories?.map((category: ICategory, index) => {
          return <div key={index}>{category.name}</div>;
        })}
    </div>
  );
}
