import { useState, useEffect } from "react";

 const MediaCont = (mediaQuery: string, initialValue: boolean): boolean => {
  const [isMatching, setIsMatching] = useState<boolean>(initialValue);
  
  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);
    setIsMatching(watcher.matches);
    
    const listener = (matches: MediaQueryListEvent) => {
      setIsMatching(matches.matches);
    };
    
    if (watcher.addEventListener) {
      watcher.addEventListener("change", listener);
    } else {
      watcher.addListener(listener);
    }
    
    return () => {
      if (watcher.removeEventListener) {
        watcher.removeEventListener("change", listener);
      } else {
        watcher.removeListener(listener);
      }
    };
  }, [mediaQuery]);

  return isMatching;
};

export default MediaCont;