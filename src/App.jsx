import Circles from "./components/circles"
import Navbar from "./components/navbar"
import "./style.css"
import img2 from "./assets/me.jpg"
import img3 from "./assets/meCartoon.png"
import img4 from "./assets/mrIlham.jpg"
import img5 from "./assets/pwdk.jpeg"
import { useInView } from "react-intersection-observer"
import Sosmed from "./components/sosmed"


function App() {
  const {ref: scrlRef1, inView:elementVisible1} = useInView(),
        {ref: scrlRef2, inView:elementVisible2} = useInView(),
        {ref: scrlRef3, inView:elementVisible3} = useInView()

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <Navbar/>
      <div id="home" className="snap-start bg-regal w-screen h-screen">
        <div className="flex justify-between">
          <div className="grid grid-rows-2 text-white py-64 mx-32 max-w-xl">
            <h1 className="text-6xl leading-snug" ref={scrlRef1}><span className={`${elementVisible1 ? "animate-slidein4": "opacity-0"}`}>Hi! Wassup!</span></h1>
            <p ref={scrlRef1}><span className={`${elementVisible1 ? "animate-slidein5": "opacity-0"}`}>My name is Dede Dermawan Ravindranathan, it's a pleasant to get acquainted with you! This is my first time creating a website so I hope this would meet such expectations. This website was created by purely using react.js and tailwind css framework. There are still a lot to learn and with the limitation of my knowledge and experience I hope this is satisfying enough.</span></p>
          </div>
          <div className="container w-full py-32 mx-32 xl:3/5 animate-slidein3 ">
          <img className="rounded-3xl border-4 border-coffee" src={img2} alt=""/>
          </div>
        </div>
      </div>
      <div id="about" className="snap-start bg-otherblue w-screen h-screen">
        <div className="flex justify-between">
          <img className="xl:h-4/5 my-20 -mx-20  border-4 border-coffee rounded-r-full animate-pulseloop6 opacity-50 " src={img3} alt=""/>
            <div className="grid grid-rows-2 text-white py-64 mx-32 max-w-xl">
            <h1 className="text-6xl leading-snug" ref={scrlRef2}><span className={`${elementVisible2 ? "animate-slidein4": "opacity-0"}`}>Growing Up,</span></h1>
            <p ref={scrlRef2}><span className={`${elementVisible2 ? "animate-slidein6": "opacity-0"}`}>I used to take a lot of interests in science and dream big about my life but as we grew older we realized that life isn't as easy as it looked like. Through many mistakes and many regrets I wanted to change my life for the better. I had no real experience in coding, I used to learn it briefly and now have taken interest in doing it again, so for once more, I can try dreaming big again.</span></p>
          </div>
        </div>
      </div>
      <div id="vision" className="snap-start bg-bluegray w-screen h-screen">
        <div className="flex justify-between">
          <img className="xl:h-2/5 my-24 rounded-r-full border-coffee border-4 animate-pulseloop6 opacity-50" src={img4} alt="" />
          <div className="grid grid-rows-2 text-white py-64 max-w-xl">
            <h1 className="text-6xl leaning-snug" ref={scrlRef3}><span className={`${elementVisible3 ? "animate-slidein4": "opacity-0"}`}>My Dream</span></h1>
            <p className="-my-20" ref={scrlRef3}><span className={`${elementVisible3 ? "animate-slidein6": "opacity-0"}`}>is being able to be a more than your average programmer, with the help of my mentor, Mr. Ilham, along with the institution that I signed up for, Purwadhika, as well as my comrades, I'm paving my way to become the person that I have dreamt to be, to be able to understand most of the programming languages, not only limited to web dev. This is the first step that I have to take in order to achieve my goals and grant my beloved mother the things that I wished I could had granted her a long time ago.</span></p>
          </div>
          <img className="xl:w-1/4 xl:h-1/4 my-64 rounded-l-full border-coffee border-4 animate-pulseloop8 opacity-20 " src={img5} alt="" />
        </div>
      </div>
      <div id="contacts" className="snap-start bg-coffee w-screen h-screen">
        <div className="grid grid-rows-3 py-10 ">
          <div className="w-full bg-transparent mx-auto my-48 text-center py-3">
            <h1 className="text-6xl leading-snug">Thank you!</h1><br /><br />
          <Sosmed/>
          <Circles/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default App
