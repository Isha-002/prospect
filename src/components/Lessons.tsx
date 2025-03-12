import { NavLink, NavLinkRenderProps, Outlet } from 'react-router';
import '../App.css';
// @ts-ignore
import { Lesson_7th, Lesson_8th, Lesson_9th } from '/public/icons/lesson.ts';
const Lessons = () => {
  return (
    <section className="section-margin p-2 h-full overflow-hidden">
      <div className="flex gap-6">
        {/* not clean but more perfomant than using map  */}
        <Grade i={Lesson_7th} route="7th"/>
        <Grade i={Lesson_8th} route="8th"/>
        <Grade i={Lesson_9th} route="9th"/>
      </div>
      <div className='flex justify-center items-center h-full'>
        <Outlet />
      </div>
    </section>
  );
};

export default Lessons;

function Grade({ i, route }: { i: string, route: string }) {
  const style = ({ isActive }: NavLinkRenderProps) =>
    isActive ? active_style : undefined;

  const active_style = {
    backgroundColor: 'oklch(0.585 0.233 277.117)',
  };

  return (
    <NavLink
      to={route}
      style={style}
      className="flex bg-indigo-400 px-4 rounded text-white"
    >
      <img
        src={i}
        width={15}
        height={15}
        className="invert"
      />
      <p>th</p>
    </NavLink>
  );
}
