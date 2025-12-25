// Date


// const date = new Date("2023-06-01T12:30:45")

// const dateformat = "2023-06-03T08:15:30"
// const date = new Date(dateformat) //

// console.log("date",date);


// let result1 = date.getDate() // 1-31
// let result2 = date.getDay() // 0-6 (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
// let result3 = date.getFullYear() // 4 digit year
// let result4 = date.getHours() // 0-23
// let result5 = date.getMinutes() // 0-59
// let result6 = date.getMonth() // 0-11 (0 - January, 1 - February, ..., 11 - December)
// let result7 = date.getSeconds() // 0-59
// let result8 = date.getTime() // milliseconds since January 1, 1970


// let oclock = `${result4}:${result5}:${result7}`

// console.log("oclock",oclock);



const DateHelper = {

  weekDays:["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
  weekDaysShort:["Baz", "Ber", "Çax", "Çər", "Cax", "Cüm", "Şən"],
  monthsAze:["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],

  formatDate:function(dateObj){

    let day = dateObj.getDate()
    let month = dateObj.getMonth() + 1
    let year = dateObj.getFullYear()

    if(day < 10){
      day = "0" + day
    }

    if(month < 10){
      month = "0" + month
    }

    return `${day}/${month}/${year}`

  },

  formatDateLong:function(dateObj){

    let day = dateObj.getDate()
    let monthIndex = dateObj.getMonth()
    let year = dateObj.getFullYear()
    let weekDayIndex = dateObj.getDay()

    let monthName = this.monthsAze[monthIndex]
    let weekDayName = this.weekDays[weekDayIndex]

    return `${day} ${monthName} ${year}, ${weekDayName}`

  },

  formatTime:function(dateObj){

    let hours = dateObj.getHours()
    let minutes = dateObj.getMinutes()
    let seconds = dateObj.getSeconds()

    if(hours < 10){
      hours = "0" + hours
    }

    if(minutes < 10){
      minutes = "0" + minutes
    }

    if(seconds < 10){
      seconds = "0" + seconds
    }

    return `${hours}:${minutes}:${seconds}`

  },

  diffInDays:function(date1, date2){
    const oneDay = 24 * 60 * 60 * 1000; // bir gündəki millisekundlar

    const diffInTime = Math.abs(date2.getTime() - date1.getTime());

    return Math.round(diffInTime / oneDay);
  },

  diffInHours:function(date1, date2){
    const oneHour = 60 * 60 * 1000; // bir saatdakı millisekundlar

    const diffInTime = Math.abs(date2.getTime() - date1.getTime());

    const result = Math.round(diffInTime / oneHour);

    // if(result > 24){
    //   return this.diffInDays(date1, date2) + " day(s)"
    // }

    if(result > 24){
       return "Less after an day"
    }

    if(result <= 1){
      return "Less than an hour"
    }

    return `${result} hour(s)`

  }

}



// const createdAt = "2025-12-25T14:46:00"
// const lastMonth = new Date(createdAt)
// const currentDate = new Date()
// // const formattedDate = DateHelper.formatDateLong(currentDate)
// // const formattedDate = DateHelper.formatDate(currentDate)
// // const formatTime = DateHelper.formatTime(currentDate)

// const diff = DateHelper.diffInHours(lastMonth, currentDate)
// console.log(diff);

// // console.log(formattedDate);
// // console.log("formatTime",formatTime);


// const currentDate = new Date()

// currentDate.setDate(currentDate.getDate() + 10)
// currentDate.setFullYear(currentDate.getFullYear() + 10)

// const a =  currentDate.getUTCHours()

// console.log("a",a);


