import Banner from "../Components/Banner";
import BannerEquepment from "../Components/BannerEquepment";


const HomePage = () => {
    return (
        <div >
            <Banner/>

            <section className=" container lg:w-3/4 mx-auto mt-5 ">
                <BannerEquepment/>
            </section>
        </div>
    );
};

export default HomePage;