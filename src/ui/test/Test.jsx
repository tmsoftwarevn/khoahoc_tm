import { usePathname } from 'next/navigation';
import { FaNewspaper, FaPhoneAlt } from 'react-icons/fa'; // Import icons

const Navigation = () => {
  const pathname = usePathname();
  return (
    <ul className="flex space-x-6">
      <li
        onClick={() => router.push("/tin-tuc")}
        className={
          pathname.startsWith("/tin-tuc")
            ? "cursor-pointer px-6 py-3 rounded-full shadow-lg bg-blue-600 text-white relative overflow-hidden flex items-center gap-2 transition-all ease-in-out duration-300 transform hover:scale-105"
            : "cursor-pointer px-6 py-3 rounded-full shadow-lg text-gray-700 relative overflow-hidden flex items-center gap-2 transition-all ease-in-out duration-300 transform hover:scale-105 hover:text-blue-600"
        }
      >
        <FaNewspaper className="text-lg" />
        <span className="font-semibold">Tin tức</span>
        <span className="absolute inset-0 bg-blue-500 transform -translate-x-full transition-all duration-500 hover:translate-x-0 z-[-1]"></span>
      </li>

      <li
        onClick={() => router.push("/lien-he")}
        className={
          pathname.startsWith("/lien-he")
            ? "cursor-pointer px-6 py-3 rounded-full shadow-lg bg-blue-600 text-white relative overflow-hidden flex items-center gap-2 transition-all ease-in-out duration-300 transform hover:scale-105"
            : "cursor-pointer px-6 py-3 rounded-full shadow-lg text-gray-700 relative overflow-hidden flex items-center gap-2 transition-all ease-in-out duration-300 transform hover:scale-105 hover:text-blue-600"
        }
      >
        <FaPhoneAlt className="text-lg" />
        <span className="font-semibold">Liên hệ</span>
        <span className="absolute inset-0 bg-blue-500 transform -translate-x-full transition-all duration-500 hover:translate-x-0 z-[-1]"></span>
      </li>
    </ul>
  );
};

export default Navigation;
