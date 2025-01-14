import { useState, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 650,
  });

  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1000,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1000,
  });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : true,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false,
  };
}

export default useResponsive;
