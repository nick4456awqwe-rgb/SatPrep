import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import type { Subject } from '../types';

export default function CourseLayout({ subject }: { subject: Subject }) {
  return (
    <div className="mx-auto flex max-w-[1400px]">
      <Sidebar subject={subject} />
      <div className="min-w-0 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
