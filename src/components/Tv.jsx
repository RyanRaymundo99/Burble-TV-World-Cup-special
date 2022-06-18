function Tv() {
  return (
    <div className="relative  overflow-hidden hero-img-bg text-center">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-4xl">
                <span className="block xl:inline Tv-text ">Um pouco sobre </span>{' '}
                <br/>
                <span className="block text-green-600 xl:inline Tv-text">a Programação</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg Tv-text lg:mx-0">
              Acompanhe os jogos da seleção e ate do time adversário e seus oponentes. Tenha a Intel e saiba tudo sobre as seleções da Copa do munda do Qatar de 2022
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt58c90bdb6b4d542f/60db0e150401cb0ebfa8365f/14adafdeef7708cc12ffda5edad9c1eb94074bb6.jpg?width=4291&height=2413"
          alt=""
        />
      </div>
    </div>
  )
}

export default Tv