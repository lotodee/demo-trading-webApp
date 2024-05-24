import { useEffect } from 'react';

const useReloadOnMount = () => {
  useEffect(() => {
    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
  }, []);
};

export default useReloadOnMount;