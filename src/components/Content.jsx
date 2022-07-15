import series from '../assets/Series.jpg'
import movies from '../assets/Movies.jpg'

function Content() {
  return (
    <div>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0 pb-12" >
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Destaques</h1>
            <div class="h-1 w-20 bg-green-500 rounded"></div>
        </div>
            <div class="flex flex-wrap -mx-4 -mb-10 text-center ">
            <div class="sm:w-1/2 mb-10 px-6 bg-gray-100 pb-4 shadow-lg">
                <div class="rounded-b-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={series}/>
                </div>
                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Series Atualizadas</h2>
                <p class="leading-relaxed text-base text-left">Centenas de séries da Amazon Prime, Netfliz, HBO, Disney e outros incluídos no pacote. Ainda mais novos episódios são atualizados semanalmente.</p>
                <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Saiba mais</button>
            </div>
            <div class="sm:w-1/2 mb-10 px-6 bg-gray-100 shadow-lg">
                <div class="rounded-b-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={movies}/>
                </div>
                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Filmes Lançamento</h2>
                <p class="leading-relaxed text-base text-left">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Saiba mais</button>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Content