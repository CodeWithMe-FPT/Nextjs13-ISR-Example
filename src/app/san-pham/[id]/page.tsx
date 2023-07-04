import { ICategory } from "@/common/interfaces";

interface ProductDetailProps {
  params: {
    id: string;
  };
}
export interface CategoryRes {
  categories?: ICategory[];
  error?: string;
}

const fetcher = (url: string) =>
  fetch(url, { next: { revalidate: 10 } })
    .then(async (res) => {
      const data: ICategory[] = await res.json();
      return {
        categories: data,
      };
    })
    .catch((error) => {
      return { error: error };
    });

export default async function ProductDetail({ params }: ProductDetailProps) {
  const data: CategoryRes = await fetcher(
    "http://localhost:5000/api/product/list-category"
  );

  if (data.error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      {params.id}
      <div>
        {data &&
          data.categories?.map((category: ICategory, index) => {
            return <div key={index}>{category.name}</div>;
          })}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/api/product/list-category");

  const users = await res.json();

  return users.map((user: any) => {
    return {
      id: user._id,
    };
  });
}
