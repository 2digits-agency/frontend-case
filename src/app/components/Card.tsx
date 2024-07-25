/* eslint-disable react/jsx-newline */
import Image from 'next/image';

export interface CardProps {
  data: {
    title: string;
    content: { text: string }[]; // Adjusted to handle the new content structure
    categories: { slug: string }[]; // Adjusted to handle the new categories structure
    banner_image: {
      url: string; // Changed from src to url
    };
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { title, content, categories, banner_image } = data;

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <div className="relative">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src={banner_image?.url}
            alt={title}
            width={348}
            height={240}
            layout="responsive"
          />
        </a>
        <span className="absolute bottom-1 left-1 m-3 rounded bg-gray-100 p-2 text-xs font-light uppercase text-gray-900">
          {categories[0].slug}
        </span>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold text-gray-900">{title}</h5>
        </a>
        <div className="mb-3 overflow-hidden text-clip font-thin tracking-tight text-gray-700">
          <p>{content[0]?.text}</p>
        </div>

        <a
          href="#"
          className="inline-flex items-center rounded bg-transparent px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
          Read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
