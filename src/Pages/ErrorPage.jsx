import error from '../assets/error.jpg'

const ErrorPage = () => {

    return (
        <div className=' mx-auto bg-white montserrat-font'>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <h1 className='text-center text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900'>Opps!</h1>
                    <img className='w-96' src={error} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;