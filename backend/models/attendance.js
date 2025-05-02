import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    dob: String,
    password: {type: String, required: true},
    role: {type: String, enum: ['student', 'staff'], required: true},
    studentId: String,
    staffId: String,
    courses:[String],
    course:String 
});
export const User = mongoose.model("User", userSchema);

const studentSchema = new mongoose.Schema({
    studentId: { type: String, unique: true },
    name: String,
    department: String,
    year: String,
    section: String
});
export const Student = mongoose.model("Student", studentSchema,"student"); // Changed from "new mongoose.Schema" to "mongoose.model"

const staffSchema = new mongoose.Schema({
    staffId: { type: String, unique: true },
    name: String,
    department: String,
    subject: String
});
export const Staff = mongoose.model("Staff", staffSchema); // Changed from "new mongoose.Schema" to "mongoose.model"
const d=new Date();
const date=d.getDate();
const timetableSchema = new mongoose.Schema({
  
  date: { type: Date, required: true },
   
  day: { 
    type: String, 
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 
    required: true 
  },
 

    periods: [
      { 
        time:{type:String,enum:[ "9:00am-9:50am",
          "9:55am-10:45am",
          "10:45am-10:55am",
          "10:55am-11:45am",
          "11:55am-12:45pm",
          "12:45pm-1:35pm",
          "1:35pm-2:25pm",
          "2:30pm-3:20pm"],
        required:true},
        staffName: { type: String, required: true }, 
        subject: { type: String, required: true }, 
        staffId: { type: String, required: true }  
      }
    ],
    
    
});
export const TimeTable = mongoose.model("TimeTable", timetableSchema); // Changed from "new mongoose.Schema" to "mongoose.model"

const attendanceSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    studentName: String,

    records:[{
      staffName:String,
      subject:String, 
      status: { type: [String], enum: ['present', 'absent'] }
    }]
   
     
      
});
export const Attendance = mongoose.model("Attendance", attendanceSchema); // Changed name and from "new mongoose.Schema" to "mongoose.model"


const HolidaySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#ff7675'
  },
  description: String
});

export const Holiday = mongoose.model('Holiday', HolidaySchema);

// models/AcademicEvent.js


const AcademicEventSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#fdcb6e'
  },
  description: String,
  eventType: {
    type: String,
    enum: ['exam','labexams', 'registration', 'deadline', 'workshop', 'other'],
    default: 'other'
  }
});

export const AcademicEvent= mongoose.model('AcademicEvent', AcademicEventSchema);


// const academicEvents=[];

// const startHoliday = new Date('2025-06-08');
// const endHoliday = new Date('2025-08-11');

// Push remaining holiday days
// for (let d = startHoliday; d <= endHoliday; d.setDate(d.getDate() + 1)) {
//   academicEvents.push({
//     date: String(new Date(d)),
//     name: 'Semester Holidays',
//     description: 'Summer vacation',
//     eventType: 'other'
//   });
// }
// console.log(academicEvents);
// console.log(academicEvents.length);

