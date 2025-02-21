import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import BannerEquepment from "../Components/BannerEquepment";


const HomePage = () => {
    return (
        <div >
            <Helmet>
                <title>EquiSports | Home</title>
            </Helmet>
            <Banner/>

            <section className=" container lg:w-3/4 mx-auto mt-5 ">
                <BannerEquepment/>
            </section>
        </div>
    );
};

export default HomePage;