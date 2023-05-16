import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    <h1>render.me</h1>
    <h2>Deploy your React app in seconds.</h2>
    <button>
      <a href="/start">Get Started</a>
    </button>
  </div>
);

export default Home;
