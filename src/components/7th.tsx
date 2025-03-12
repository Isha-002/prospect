import { lesson_alphabet, lesson_grammar, lesson_numbers, lesson_reading, lesson_speaking, lesson_vocab_leaf } from '../../public/images/lesson';
import LearningPath from './lesson/LearningPath';

const Seventh = () => {

  const subjects = [
    {
      subject: "Alphabet",
      image: lesson_alphabet
    },
    {
      subject: "Numbers",
      image: lesson_numbers
    },
    {
      subject: "Vocabulary",
      image: lesson_vocab_leaf
    },
    {
      subject: "Speaking",
      image: lesson_speaking
    },
    {
      subject: "Reading",
      image: lesson_reading
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

export default Seventh;
