import CreateTuwueet from "./CreateTuwueet";
import HomeWrapper, { HomeHeader } from "../styled/HomeStyles";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader>Home</HomeHeader>
      <CreateTuwueet />
      {/* {Tuwueets || <img src={loading} alt="Loading" width="200px" />} */}
    </HomeWrapper>
  );
}

export default Home;
