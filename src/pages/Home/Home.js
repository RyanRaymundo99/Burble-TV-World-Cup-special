import { Hero, Pricing, App, Tv, Tv2, Channels, Content, Featured} from '../../components/Export'

function Home() {
  return (
    <div className='Home-container'>
        <Hero />
        <Pricing />
        <Tv />
        <Tv2 />
        <Channels/>
        <App />
        <Content />
        <Featured />
    </div>
  )
}

export default Home