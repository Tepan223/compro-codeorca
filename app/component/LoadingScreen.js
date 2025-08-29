import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">code<span style={{color: "#1890ff"}}>ORCA</span></h1>
          <p className="text-muted-foreground">Loading...</p>
        </div>
        
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-4 text-sm text-muted-foreground">{progress}%</p>
      </div>
    </div>
  );
}