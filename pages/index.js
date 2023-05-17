import Link from 'next/link'

const Home = () => (
  <div className="home">
    <h1>render.me</h1>
    <h2>Deploy your React app in seconds.</h2>
    <button>
      <Link href="/start">Get Started</Link>
    </button>
  </div>
);

export default Home;
