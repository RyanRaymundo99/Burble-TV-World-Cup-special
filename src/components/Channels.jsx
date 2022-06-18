import '../Global/Global.css'

import Movies from '../assets/Channels/Movies.jpg'
import Series from '../assets/Channels/Series.jpg'
import Channel from '../assets/Channels/Channel.jpg'
import Sports from '../assets/Channels/Sports.png'

function Channels() {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Um pouco da Programação</h1>
            <div class="h-1 w-20 bg-green-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Nos da Burble TV te oferecemos a Grade Completa da programação com filmes, series, TV shows, reality shows, Premier e muito mais. Para completar conte com a gente com um time de atendentes pronto para te atender a qualquer momento do dia.</p>
        </div>
        <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="Movies-Bg p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6 Movies-Bg" src={Movies} alt="content"/>
            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">FILMES</h3>
            <h2 class="text-lg text-gray-200 font-medium title-font mb-4">Divesidade</h2>
            <p class="leading-relaxed text-base text-gray-300 text-left">Assista a filmes duplados que acabaram de sair do Cinema</p>
            </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="Series-Bg p-6 rounded-lg">
            <img class="h-40 rounded object-cover w-full object-center mb-6" src={Series} alt="content"/>
            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SERIES</h3>
            <h2 class="text-lg font-medium title-font text-gray-200 mb-4">Rapidez</h2>
            <p class="leading-relaxed text-base text-gray-300 text-left">Assista a novas temporadas de séries antes de qualquer um</p>
            </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="Channel-Bg p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src={Channel} alt="content"/>
            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">CANAIS</h3>
            <h2 class="text-lg text-gray-200 font-medium title-font mb-4">Diversidade</h2>
            <p class="leading-relaxed text-base text-gray-300">Tenha muito mais canais em 4K, HD e FHD</p>
            </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="Sports-Bg p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src={Sports} alt="content"/>
            <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">ESPORTE</h3>
            <h2 class="text-lg text-gray-200 font-medium title-font mb-4">Premiere</h2>
            <p class="leading-relaxed text-gray-300 text-base">Assista a jogos do seu time favorito na Premiere, Dazn e muito mais</p>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Channels