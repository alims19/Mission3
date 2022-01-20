using System;
using System.ComponentModel.DataAnnotations;

namespace mission2.Models

{
    public class GradeModel
    {
        //Getters, Setters, and Validation

        [Range(0, 100, ErrorMessage = "Assignments: Please enter a number between 0 and 100")]
        public string assignment { get; set; }

        [Range(0, 100, ErrorMessage = "Group Projects: Please enter a number between 0 and 100")]
        public string groupproject { get; set; }

        [Range(0, 100, ErrorMessage = "Quizzes: Please enter a number between 0 and 100")]
        public string quiz { get; set; }

        [Range(0, 100, ErrorMessage = "Exams: Please enter a number between 0 and 100")]
        public string exam { get; set; }

        [Range(0, 100, ErrorMessage = "INTEX: Please enter a number between 0 and 100")]
        public string intex { get; set; }
    }
}
