import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';

export default function Error({ title = 'An error occurred!', message = 'Something went wrong!' }) {
  const error = useRouteError();

  if (error) {
    if (error.status === 500 && error.data && error.data.message) {
      message = error.data.message;
    } else if (error.status === 404) {
      title = 'Not found!';
      message = 'Could not find resource or page.';
    }
  }

  return (
    <>
      <PageContent title={''}>
        <div className="error" >
          <h2 className=' top-[360px] text-center'>{title}</h2>
          <p className='absolute top-[400px] left-[800px]'>{message}</p>
        </div>
      </PageContent>
    </>
  );
}