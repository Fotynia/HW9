// Створити конструктор Студента, у якого мають бути властивості:
// ім'я, прізвище, рік народження, оцінки, відвідуваність, курс. 
// Кількість оцінок і відвіданих занять залежить від курсу, 
// на якому займається студент. Так само у Студента є методи:
//  додати оцінку, додати відвідування, отримати середню успішність,
//   отримати середнє відвідування, отримати кількість пройдених занять,
//    змінити курс (мають оновитися дані про курс), а також отримати всю 
//    інформацію про студента.
// Додати Студенту можливість навчатися на кількох курсах з можливістю 
// додавання і видалення курсу.

// const Student = function (config = {}) {
//    this.name = config.name;
//    this.surname = config.surname;
//    this.point = config.point;
//    this.yearOfBirth = config.yearOfBirth;
//    this.evaluations = config.evaluations;
//    this.attendance = new Array(25);
//    this.absenceIndex = 0;
//    this.course = config.course;

// };
//      Student.prototype.addPoint = function (newPoint) {
//         this.point = new Point;
//      };
//      Student.prototype.addAttendance = function (newAttendance) {
//         this.attendance = new Attendance;
//         absent() {
//             if (this.attendance.length > this.absenceIndex) {
//                 this.attendance[this.absenceIndex] = false;
//                 this.absenceIndex++;
//             }
//         };
//         present() {
//             if (this.attendance.length > this.absenceIndex) {
//                 this.attendance[this.absenceIndex] = true;
//                 this.absenceIndex++;
//             }
//         };
//      };
//      Student.prototype.getAverageSuccessRate = function () {
//      };
//      Student.prototype.getAverageSuccessAttendance = function () {
//             let precenceCount = this.attendance.slice(0, this.absenceIndex).filter(x => x).length;
//             return precenceCount / this.absenceIndex;
//         };
//      Student.prototype.numberOfClassesCompleted = function () {};
//      Student.prototype.changeCourse = function (newCourse) {
//         this.course = new Course;
//         return new Course;
//      };
//      Student.prototype.getAllInformationAboutStudent = function (allInfoStudent) {
//         const allInfoStudent = Object.create(Student);
//      };

//       function addCourse () {
//       let addCourse = new Array();
//       this.addCourse.length = 0;
//      Student.prototype.addCourse = function () {
//    this.newCourse.push(addCourse);
//       this.addCourse.length = addCourse.length;
//       return addCourse;
//     };                                  
//    };

//    function removeCourse () {
//       let removeCourse = new Array();
//       this.removeCourse.length = 0;
//      Student.prototype.removeCourse = function () {
//    this.newCourse.removeChild(removeCourse);
//       this.removeCourse.length = removeCourse.length;
//       return removeCourse;
//     };                                  
//    };

// const oneStudent = new Student ({
//     name: 'Iv',
//    surname: 'Loren',
//    point: 100,
//    yearOfBirth: 2001,
//    attendance: 78,
//    course: 'biology', 
// });

// oneStudent.addPoint ();
// oneStudent.addVizit ();
// oneStudent.getAverageSuccessRate ();
// oneStudent.getAverageSuccessAttendance ();
// oneStudent.numberOfClassesCompleted ();
// oneStudent.numberOfClassesCompleted ();
// oneStudent.changeCourse ();
// oneStudent.getAllInformationAboutStudent ();
// console.log(oneStudent);



// Створити конструктор Група, яка має список студентів і методи для додавання,
// видалення студентів, а також одержання рейтингу студентів 
//за відвідуваністю і успішністю.

// const Group = function (list) {
// function addStudent(name){
// students.push(name);
// }
// function removeStudent(name){
// for (let i = 0; i < students.length; i ++){
// if (students[i].toLowerCase() == toLowerCase(name)){
// students.splice(i, 1);
// break;
// }
//  }
//   };
// let students = ['Ден', 'Кот', 'Мак', 'Джин'];
// students['Ден'] = 90;
// students['Кот'] = 85;
// students['Мак'] = 94;
// students['Джин'] = 82;
//   console log('Всього є ' + (students.length) + ' студентів: ' + students.join(', '));
// for(var i=0; i<students.length; i++){
//    console.log("Оцінка" + students[i] + "буде: " + students[students[i]]);
// }
// };
function Group() {
    this.students = [];
    this.addStudent = function (student) {
 this.students.push(student);
    };

   this.removeStudent = function (student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
     this.students.splice(index, 1);
    }
    };

    //рейтинг студентів за відвідуваністю
    this.getAttendanceRanking = function () {
    const sortedStudents = this.students.sort((a, b) => {
 return b.getAverageAttendance() - a.getAverageAttendance();
});
        return sortedStudents.map(student => ({
        name: student.firstName + ' ' + student.lastName,
        averageAttendance: student.getAverageAttendance()
        }));
    };

    //рейтинг студентів за успішністю
    this.getGradeRanking = function () {
        //середня успішність
        const sortedStudents = this.students.sort((a, b) => {
            return b.getAverageGrade() - a.getAverageGrade();
        });

        return sortedStudents.map(student => ({
            name: student.firstName + ' ' + student.lastName,
            averageGrade: student.getAverageGrade()
        }));
    };
}