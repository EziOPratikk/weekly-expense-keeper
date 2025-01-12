import pageNotFoundImg from '../assets/icons/error-404.png';

export default function NotFound() {
  return (
    <div className='w-full h-[70vh] flex flex-col items-center justify-center'>
      <img
        src={pageNotFoundImg}
        alt='404-error-icon'
        className='xl:w-80 w-60'
      />
      <p className='my-4 text-lg'>OOPS! PAGE NOT FOUND :(</p>
    </div>
  );
}