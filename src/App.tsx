// import './App.css'
// // import Ripple from './components/ui/ripple'
// // // import RetroGrid from './components/ui/retro-grid'
// // // import FlickeringGrid from './components/ui/flickering-grid'
// // import DotPattern from './components/ui/dot-pattern'
// // import GradualSpacing from './components/ui/gradual-spacing'
// // import GridPattern from './components/ui/grid-pattern'
// // import clsx from "clsx";
// import Meteors from './components/ui/meteors.tsx'

// function App() {
  
//   return (
//     <>
//         <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
//       <Meteors number={30} />
//       <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
//         Virtuframes
//       </span>
//     </div>
//     </>
//   )
// }

// export default App
"use client";
import Particles from "./components/ui/particles";
import GradualSpacing from "./components/ui/gradual-spacing";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function App() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="mt-6 pl-6 italic text-3xl">
        Welcome to
      </span>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-20xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      <GradualSpacing
      className="font-display text-center text-20xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Virtuframes"
    />
      </span>
      <Particles
        className="absolute inset-0"
        quantity={600}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

export default App;
