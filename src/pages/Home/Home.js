import { Hero, Pricing, App, Tv, Tv2, Channels, Featured, Advantages} from '../../components/Export'

function Home() {
  return (
    <div className='Home-container'>
        <Hero />
        <Pricing />
        <Tv />
        <Tv2 />
        <Channels/>
        <App />
        <Advantages />
        <Featured />
    </div>
  )
}

export default Home