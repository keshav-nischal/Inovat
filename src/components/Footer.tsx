"use client"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative py-16 overflow-hidden bg-black text-white">
      {/* Glassy blur effects */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-black-600/30 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[60%] h-[60%] rounded-full bg-black-500/20 blur-[80px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 mt-12">

          <div className="space-y-3">
            <p className="text-base">Terms and conditions</p>
            <p className="text-base mt-6">Privacy policy</p>
            <p className="text-base mt-6">Contact us</p>
          </div>

          <div className="space-y-3">
            <p className="text-base">Twitter</p>
            <p className="text-base mt-6">LinkedIn</p>
            {/* <p className="text-base mt-6">Contact us</p> */}
          </div>

          <div></div>
          <div></div>
        </div>

        <div className="mt-16">
          <p className="text-sm">© {new Date().getFullYear()} Inovat, Inc. All Rights Reserved.</p>
        </div>

        {/* Large INOVAT text in bottom right */}
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <h1 className="text-[15vw] font-bold leading-none text-white/20">INOVAT</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
