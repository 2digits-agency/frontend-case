import Card, { type CardProps } from './Card';

interface CardListProps {
  data: {
    title: string;
    content: { text: string }[]; // Adjusted to handle the new content structure
    categories: { slug: string }[]; // Adjusted to handle the new categories structure
    banner_image: {
      url: string; // Changed from src to url
    };
  }[];
}

const CardList: React.FC<CardListProps> = ({ items }: CardProps) => {
  return (
    <section className="m-4">
      <h2 className="mt-12 py-5 text-3xl md:text-5xl">De nieuwste blogs</h2>

      <div className="container mx-auto flex flex-col gap-4 py-5 md:flex-row">
        {items.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
