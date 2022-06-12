import { Hero, Pricing, App, Tv, Tv2} from '../../components/Export'

function Home() {
  return (
    <div className='Home-container'>
        <Hero />
        <Pricing />
        <Tv />
        <Tv2 />
        <App />
        
    </div>
  )
}

export default Home