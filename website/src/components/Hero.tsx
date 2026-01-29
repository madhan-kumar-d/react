import { useEffect, useState } from "react";

const Hero = () => {
    const [mousePossition, setMousePosstion] = useState({x:0,y:0})
    useEffect(()=>{
        console.log(`x: ${mousePossition.x}, y: ${mousePossition.y}`)
    },[ mousePossition]);
    return <section className="relative min-h-screen flex justify-center pt-16 sm:pt-12 px-4 sm:px-6  lg:px-8 overflow-hidden" onMouseMove={(e)=>{ setMousePosstion({x:e.pageX, y:e.pageY})}}>Hero</section>
}

export default Hero;