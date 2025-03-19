import { Outlet, useLocation } from 'react-router';
import { lesson_dialog, lesson_grammar, lesson_vocab_bee, lesson_writing } from '../assets/images/lesson';
import LearningPath from './lesson/LearningPath';

const Ninth = () => {

  const location = useLocation();
  
  if (location.pathname.endsWith("units")) {
    return <Outlet />;
  }

  const subjects = [
    {
      subject: "Dialogs",
      image: lesson_dialog,
      path: "units"
    },
    {
      subject: "Vocabulary",
      image: lesson_vocab_bee,
      path: "units",
    },
    // {
    //   subject: "Writing",
    //   image: lesson_writing
    // },
    {
      subject: "Grammar",
      image: lesson_grammar,
      path: "units",
    },
  ]


  return (
    <section className="grid grid-cols-3 max-[1000px]:grid-cols-3 max-[1000px]:gap-8 gap-16 ">
      {subjects.map((value, i) => (
        <LearningPath learn={value.subject} image={value.image} path={value.path} key={i}/>
      ))}
    </section>
  );
};

export default Ninth