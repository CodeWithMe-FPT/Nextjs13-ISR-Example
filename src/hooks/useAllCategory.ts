import { ICategory } from "@/common/interfaces";
import useSwr, { SWRConfiguration } from "swr";

export interface useAllCategoryProps extends SWRConfiguration {}
export interface CategoryRes {
  categories?: ICategory[];
  error?: string;
}

const fetcher = (url: string) =>
  fetch(url)
    .then(async (res) => {
      const data: ICategory[] = await res.json();
      return {
        categories: data,
      };
    })
    .catch((error) => {
      return { error: error };
    });
export const useAllCategory = (config?: useAllCategoryProps) => {
  const swr = useSwr<CategoryRes>(
    "http://localhost:5000/api/product/list-category",
    fetcher,
    config
  );

  const erorr = !!swr.error;

  return {
    ...swr,
    erorr,
  };
};
