
 import notfoundImage from '../assets/faqNotFound.png'

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center p-8">
      <div>
        <img src={notfoundImage}></img>
      </div>
      <p className="mt-4 text-lg text-gray-600">Oops! Page not found.</p>
    </div>
  );
};

export default NotFound;
