import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, About, Services, TrackRecord, Team, Insights, Contact } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/track-record" element={<TrackRecord />} />
        <Route path="/team" element={<Team />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
