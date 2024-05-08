import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '@/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const OnboardingRoute: React.FC<Props> = ({ children }) => {
  const { user, myWorkspaces } = useAuthStore((state) => state);
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (
    (user && user?.status?.id === 2) ||
    !myWorkspaces ||
    myWorkspaces.length === 0
  ) {
    return children;
  } else {
    return <Navigate to="/invite" />;
  }
};

export default OnboardingRoute;
