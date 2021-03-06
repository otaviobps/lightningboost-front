import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export const useTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    ReactGA.set({ page: currentPath });
    ReactGA.pageview(currentPath);
  }, [location]);
};
