import { Outlet, useLocation } from 'react-router';
import { lesson_alphabet, lesson_dialog, lesson_grammar, lesson_numbers, lesson_reading, lesson_speaking, lesson_vocab_leaf } from '../assets/images/lesson';
import LearningPath from './lesson/LearningPath';

const Seventh = () => {

  const location = useLocation();
  
  if (location.pathname.endsWith("units")) {
    return <Outlet />;
  }

  const subjects = [
    {
      subject: "Alphabet",
      image: lesson_alphabet,
      path: "alphabet",
    },
    {
      subject: "Numbers",
      image: lesson_numbers,
      path: "numbers",
    },
    {
      subject: "Vocabulary",
      image: lesson_vocab_leaf,
      path: "units",
    },
    // {
    //   subject: "Speaking",
    //   image: lesson_speaking
    // },
    // {
    //   subject: "Reading",
    //   image: lesson_reading
    // },
    {
      subject: "Dialogs",
      image: lesson_dialog,
      path: "units"
    },
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
      <Outlet />
    </section>
  );
};

export default Seventh;
