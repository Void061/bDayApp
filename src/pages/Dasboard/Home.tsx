import { useAppSelector } from "../../hooks";
import { FormToken, Letter } from "../../components";

const Home: React.FC = () => {
  const { currentPerson } = useAppSelector(
    (store) => store.people
  );

  return (
    <div className="grid place-items-center w-[100%] h-[100%] bg-[url('bg-app.png')] bg-no-repeat bg-cover bg-center px-4">
      {!currentPerson ? <FormToken /> : <Letter />}
    </div>
  );
};
export default Home;
