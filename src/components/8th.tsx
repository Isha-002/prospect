import { Outlet, useLocation, useParams } from 'react-router';
import { lesson_dialog, lesson_grammar, lesson_vocab_frog, lesson_writing } from '../assets/images/lesson';
import LearningPath from './lesson/LearningPath';

const Eighth = () => {
  
  const location = useLocation();
  const { subject } = useParams();
  const path = "8th/" + subject
  if (location.pathname.includes(path)) {
    return <Outlet />;
  }

  const subjects = [
    {
      subject: "Dialogs",
      image: lesson_dialog,
      path: "Dialogs"
    },
    {
      subject: "Vocabulary",
      image: lesson_vocab_frog,
      path: "Vocabulary",
    },
    {
      subject: "Grammar",
      image: lesson_grammar,
      path: "Grammar",
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

export default Eighth