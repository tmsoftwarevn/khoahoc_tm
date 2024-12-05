import Link from "next/link";
import { usePathname } from "next/navigation";

const Responsive = () => {
  const pathname = usePathname();

  return (
    <ul className="space-y-1 list-none text-lg">
      <li >
        <Link
          href="/gioi-thieu"
          className={
            pathname.startsWith("/gioi-thieu")
              ? "block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white"
              : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
          }
        >
          Giới thiệu
        </Link>
      </li>

      {/* <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <span className="text-sm font-medium"> Khóa học </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4 list-none">
            <li>
              <Link
                href="/khoa-hoc/rewr"
                className={
                    pathname.startsWith("/khoa-hoc") ?
                        "block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white"
                        :
                        "block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
                }              >
                Banned Users
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Calendar
              </Link>
            </li>
          </ul>
        </details>
      </li> */}

      <li>
        <Link
          href="/khoa-hoc"
          className={
            pathname.startsWith("/khoa-hoc")
              ? "block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white"
              : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
          }
        >
          Khóa học
        </Link>
      </li>

      <li>
        <Link
          href="/tin-tuc"
          className={
            pathname.startsWith("/tin-tuc")
              ? "block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white"
              : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
          }
        >
          Tin tức
        </Link>
      </li>

      <li>
        <Link
          href="/lien-he"
          className={
            pathname.startsWith("/lien-he")
              ? "block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white"
              : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
          }
        >
          Liên hệ
        </Link>
      </li>
    </ul>
  );
};

export default Responsive;
