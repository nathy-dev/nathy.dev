import '@fontsource/vt323';
import { Nav } from './components/Nav.tsx';
import { Content } from './components/Content.tsx';

function App() {
  return (
    <div className="min-h-screen w-full text-text">
      <Nav />
      <Content />
    </div>
  );
}

export default App;
