import img1 from "../../../assets/ar/Rectangle1.png";
import img2 from "../../../assets/ar/Rectangle2.png"
import img3 from "../../../assets/ar/Rectangle3.png"
import entertainimg from "../../../assets/ar/Rectangle4.png"
import scientificimg from "../../../assets/ar/Rectangle5.png"
import child1img from "../../../assets/ar/Rectangle6.png"
import child2img from "../../../assets/ar/Rectangle7.png"
import teenagerimg from "../../../assets/ar/Rectangle8.png"
import teacherimg from "../../../assets/ar/Rectangle7.png"

const btnArray = [
  { grade: 'sixth', text: 'Step by step sixth grade' },
  { grade: 'seventh', text: 'Step by step seventh grade' },
  { grade: 'eighth', text: 'Step by step eighth grade' },
  { grade: 'ninth', text: 'Step by step ninth grade' },
];  

const article = [
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "seventh" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 148",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "ninth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 145",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "sixth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 146",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8th page 147",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 144",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 143",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 142",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 141",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
  {
    image: img1,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8, page 139",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
  {
    image: img2,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 138",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },
];

const question = [
  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "sixth" // Added grade level
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 148",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "seventh" // Added grade level
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 145",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "eighth" // Added grade level
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 146",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "ninth" // Added grade level
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8th page 147",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 144",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 143",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 142",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 141",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8, page 139",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: img3,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 138",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },
];
const entertainment = [
  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "sixth" // Added grade level
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 148",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "sixth" // Added grade level
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 145",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "sixth" // Added grade level
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 146",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
    grade: "sixth" // Added grade level
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8th page 147",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 144",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 143",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 142",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 141",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8, page 139",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: entertainimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 138",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },
];
const scientific = [
  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 148",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 145",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 146",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8th page 147",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 144",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 143",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 142",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 141",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8, page 139",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: scientificimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 138",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },
];
const child1 = [
  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 148",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 145",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 146",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8th page 147",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 144",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image :child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 143",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 142",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 141",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8, page 139",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child1img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 138",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },
];
const child2 = [
  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 148",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 145",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 146",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8th page 147",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 144",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 143",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 142",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 141",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8, page 139",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: child2img,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 138",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },
];
const teenager = [
  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 148",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 145",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 146",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8th page 147",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 144",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 143",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 142",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 141",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8, page 139",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teenagerimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 138",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },
];
const teacher = [
  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 148",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII, page 145",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 146",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8th page 147",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 144",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 143",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 142",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "8th math, page 141",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 149",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Math 8, page 139",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },  {
    image: teacherimg,
    name: "Darsa Momenikhah June 12, 1403",
    subject: "Mathematics VIII page 138",
    para: "Answers to the exercises on page 149 of the 8th math question 1: According to the opposite figure, measure the following angles and arcs...",
  },
];

export { btnArray, article , question , entertainment , scientific , child1 , child2 , teenager, teacher };