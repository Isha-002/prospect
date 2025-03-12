import { lesson_dialog, lesson_grammar, lesson_vocab_bee, lesson_writing } from '../../public/images/lesson';
import LearningPath from './lesson/LearningPath';

const Ninth = () => {
  const subjects = [
    {
      subject: "Dialogs",
      image: lesson_dialog
    },
    {
      subject: "Vocabulary",
      image: lesson_vocab_bee
    },
    {
      subject: "Writing",
      image: lesson_writing
    },
    {
      subject: "Grammar",
      image: lesson_grammar
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

export default Ninth