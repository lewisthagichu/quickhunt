import CustomAuthError from '@/components/Auth/CustomAuthError/CustomAuthError';

function AuthPageError({ searchParams }) {
  return <CustomAuthError searchParams={searchParams} />;
}

export default AuthPageError;
