import { lesson_dialog, lesson_vocab_frog, lesson_writing } from '../../public/images/lesson';
import LearningPath from './lesson/LearningPath';

const Eighth = () => {
  const subjects = [
    {
      subject: "Dialogs",
      image: lesson_dialog
    },
    {
      subject: "Vocabulary",
      image: lesson_vocab_frog
    },
    {
      subject: "Writing",
      image: lesson_writing
    },
  ]


  return (
    <section className="grid grid-cols-3 max-[1000px]:grid-cols-3 max-[1000px]:gap-8 gap-16 ">
      {subjects.map((value, i) => (
        <LearningPath learn={value.subject} image={value.image} key={i}/>
      ))}
    </section>
  );
};

export default Eighth