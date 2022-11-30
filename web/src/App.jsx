import { Download, Features, SectionWrapper } from './components';
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your Own Store of Nifty NFTS. Start Selling & Growing"
        description="Buy, Store, Collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef MarketPlace."

        ShowBtn
        MockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  )
}

export default App
