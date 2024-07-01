import imgIG from "../assets/IG.png"
import imgLin from "../assets/Lin.png"
import imgWA from "../assets/WA.png"
import imgYT from "../assets/YT.png"


function Sosmed() {
    return(
    <div>
        <div className="grid grid-cols-4 grid-rows-1 size-2/5 gap-20 justify-center mx-auto">
            <a href="https://www.instagram.com/ravnathan/" target="_blank"><img src={imgIG} alt=""/></a>
            <a href=""><img src={imgLin} alt="" /></a>
            <a href="https://wa.me/6281910108741" target="_blank"><img src={imgWA} alt="" /></a>
            <a href="https://www.youtube.com/@Scaletta27" target="_blank"><img src={imgYT} alt="" /></a>
        </div>
    </div>    

    )
}

export default Sosmed