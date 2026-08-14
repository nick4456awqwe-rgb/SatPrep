import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CourseLayout from './components/CourseLayout';
import Home from './pages/Home';
import SubjectHub from './pages/SubjectHub';
import TopicPage from './pages/TopicPage';
import UnitTest from './pages/UnitTest';
import Practice from './pages/Practice';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />

          <Route path="/math" element={<CourseLayout subject="math" />}>
            <Route index element={<SubjectHub subject="math" />} />
            <Route path=":domainId" element={<SubjectHub subject="math" />} />
            <Route path=":domainId/test" element={<UnitTest subject="math" />} />
            <Route path=":domainId/:topicId" element={<TopicPage subject="math" />} />
          </Route>

          <Route path="/reading" element={<CourseLayout subject="reading" />}>
            <Route index element={<SubjectHub subject="reading" />} />
            <Route path=":domainId" element={<SubjectHub subject="reading" />} />
            <Route path=":domainId/test" element={<UnitTest subject="reading" />} />
            <Route path=":domainId/:topicId" element={<TopicPage subject="reading" />} />
          </Route>
        </Routes>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400 dark:border-slate-800">
        Сделано для подготовки к Digital SAT · Удачи на экзамене! 🎓
      </footer>
    </div>
  );
}
