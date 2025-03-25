import { Outlet, useLocation } from 'react-router';
import { exploreAnimals, exploreFruits } from '../assets/explore';
import LearningPath from './lesson/LearningPath';

const Explore = () => {
  const location = useLocation();

  if (!location.pathname.endsWith('explore')) {
    return (
      <div className="section-margin">
        <Outlet />
      </div>
    );
  }

  const topics = [
    {
      topic: 'Animals',
      image: exploreAnimals,
      path: 'animals',
    },
    {
      topic: 'Fruits',
      image: exploreFruits,
      path: 'fruits',
    },
  ];

  const styles = {
    background: 'linear-gradient(to right, #fb923c, #fde047)',
  };

  return (
    <section className="flex justify-center items-center h-full">
      <div className={`section-margin grid grid-cols-${Math.min(...[topics.length, 3])} max-[1000px]:gap-8 gap-16`}>
        {topics.map((value, i) => (
          <LearningPath
            learn={value.topic}
            image={value.image}
            path={value.path}
            key={i}
            styles={styles}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
