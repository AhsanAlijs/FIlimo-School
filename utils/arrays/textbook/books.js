import card1 from "@/assets/card1.png"
import preschoolcard2 from "@/assets/preschoolcard2.png"
import preschoolcard3 from "@/assets/preschoolcard3.png"
import preschoolcard4 from "@/assets/preschoolcard4.png"
const books = [
    {   
        id:0,
        img:card1, 
        alt:"auntie",
        primText:"1st grade Persian",
        // secText:"",  
        type:"Courses" 
    },
    {   
        id:1,
        img:preschoolcard2, 
        alt:"auntie",
        primText:"1st grade math",
        type:"Courses" 
        // secText:"(Raffy's Adventures)",   
    },
    {   
        id:2,
        img:preschoolcard3, 
        alt:"auntie",
        primText:"The 1st basic sciences",
        type:"Courses" 
        // secText:"(Raffy's Adventures)",   
    },
    {   
        id:3,
        img:preschoolcard4, 
        alt:"auntie",
        primText:"1st grade Quran education",
        type:"Courses" 
        // secText:"(Raffy's Adventures)",   
    },
    
]
const headerCont = [
    {
        header: "First grade lessons",
        para: "To display the lessons, select the book you want:"
    }
]

export {books,headerCont}