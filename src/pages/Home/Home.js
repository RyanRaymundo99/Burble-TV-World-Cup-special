import { Hero, Pricing, App, Tv, Tv2, Channels} from '../../components/Export'

function Home() {
  return (
    <div className='Home-container'>
        <Hero />
        <Pricing />
        <Tv />
        <Tv2 />
        <Channels/>
        <App />
    </div>
  )
}

export default Home