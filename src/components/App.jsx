import '../Global/Global.css'

function App() {
  return (
    <div className='apps' id="App">
      <section class="text-gray-400 app-image-bg body-font app-bg-img">
        <div class="container mx-auto flex px-5 py-22 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:pr-20 lg:pt-20">
               <img class="object-cover object-center" alt="hero" src="https://blueplay.me/wp-content/uploads/2021/02/cel-1433x1536.png"/>
            </div>
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">Assista <span className='text-green-700'>Onde Quiser</span> </h1>
            <span></span>
            <p class="mb-8 leading-relaxed text-gray-200">A Burble TV oferece um aplicativo totalmente exclusivo para você. Basta baixa-lo e assistir tudo o que quiser e quando quiser. Nosso App oferece todos os tipos de Séries, basta escolher qual quer assistir.</p>
            <div class="flex lg:flex-row md:flex-col text-gray-300">
              <a href="https://play.google.com/store/apps/details?id=com.nathnetwork.xciptv"><button class="bg-gray-300 bg-opacity-20 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-800 hover:text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 text-gray-100 h-6" viewBox="0 0 512 512">
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs text-gray-100 mb-1">BAIXE NA</span>
                  <span class="title-font font-medium text-gray-100">Google Play</span>
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App