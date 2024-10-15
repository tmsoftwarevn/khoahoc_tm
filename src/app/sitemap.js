export const revalidate = 3600; // invalidate every hour

export default async function sitemap() {
  let list_product;
  let list_blog;
  let list_thongtin;
  let list_category;

  // product
  const res = await fetch(`${process.env.URL_BACKEND}/api/v1/product`);
  const result = await res.json();
  if (result && result.data) {
    list_product = result.data.map((item) => ({
      url: `https://tmbook.vn/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    }));
  }

  // blog
  const res_blog = await fetch(
    `${process.env.URL_BACKEND}/api/v1/listbaiviet-admin/0`
  );
  const result_blog = await res_blog.json();
  if (result_blog && result_blog.data) {
    list_blog = result_blog.data.map((item) => ({
      url: `https://tmbook.vn/tin-tuc/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    }));
  }

  // thong tin
  const res_thongtin = await fetch(
    `${process.env.URL_BACKEND}/api/v1/listbaiviet-admin/1`
  );
  const result_thongtin = await res_thongtin.json();
  if (result_thongtin && result_thongtin.data) {
    list_thongtin = result_thongtin.data.map((item) => ({
      url: `https://tmbook.vn/thong-tin/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    }));
  }

  // category
  const res_category = await fetch(
    `${process.env.URL_BACKEND}/api/v1/category`
  );
  const result_category = await res_category.json();

  if (result_category && result_category.data) {
    list_category = result_category.data.map((item) => ({
      url: `https://tmbook.vn/the-loai/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    }));
  }

  return [
    {
      url: "https://tmbook.vn",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://tmbook.vn/gioi-thieu",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://tmbook.vn/combo-sach-qua-tang",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://tmbook.vn/qua-tang",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://tmbook.vn/tin-tuc",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://tmbook.vn/lien-he",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...list_product,
    ...list_blog,
    ...list_thongtin,
    ...list_category,
  ];
}
