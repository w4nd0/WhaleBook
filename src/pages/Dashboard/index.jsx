import CarouselSample from "../../components/CarouselSample";
import { useBooks } from "../../providers/books";


const Dashboard = () => {
  const { allBooks, adventureBooks, fantasyBooks } = useBooks();

  const test = [
    {
      name: "imagem1",
      url: "https://picsum.photos/100/150",
    },
    {
      name: "imagem2",
      url: "https://picsum.photos/100/150",
    },
    {
      name: "imagem2",
      url: "https://picsum.photos/100/150",
    },
    {
      name: "imagem2",
      url: "https://picsum.photos/100/150",
    },
    {
      name: "imagem2",
      url: "https://picsum.photos/100/150",
    },
    {
      name: "imagem2",
      url: "https://picsum.photos/100/150",
    }
  ];

  return (
    <>
      <div>Dashboard</div>
      <CarouselSample books={allBooks}/>
    </>
  );
};

export default Dashboard;
