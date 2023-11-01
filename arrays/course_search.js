let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.0",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.0",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.0",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.0",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.0",
  },
];

function getStartDateInCourseId(courses, courseChoice) {
  for (const course of courses) {
    if (course.CourseId == courseChoice) {
      return course.StartDate;
    }
  }
}

function getTitleInCourseId(courses, courseChoice) {
  for (const course of courses) {
    if (course.CourseId == courseChoice) {
      return course.Title;
    }
  }
}

function getTitleInCheapCost(courses, courseChoice) {
  let cheapCourse = [];
  for (const course of courses) {
    if (course.Fee <= 50) {
      cheapCourse.push(course.Title);
    }
  }
  return cheapCourse;
}

function getClassTitleInClassroom(courses, courseChoice) {
  let alikeClasses = [];
  for (const course of courses) {
    if (course.Location == courseChoice) {
      alikeClasses.push(course.Title);
    }
  }
  return alikeClasses;
}
// console.log(getStartDateInCourseId(courses, "PROG300"));
// console.log(getTitleInCourseId(courses, "PROJ500"));
// console.log(getTitleInCheapCost(courses, 50.0));
// console.log(getClassTitleInClassroom(courses, "Classroom 1"));
