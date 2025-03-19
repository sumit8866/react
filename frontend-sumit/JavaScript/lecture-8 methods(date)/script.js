// javascript method date


{
    let today = new Date()

    console.log(today);
    
}

// date get methods **********************************************************************************************

/*
0-January
1-February
2-March
3-April
4-May
5-June
6-July
7-August
8-September
9-October
10-November
11-November

*/
{
    // let today = new Date()

    // console.log(today.getDate());
    // console.log(today.getDay());
    // console.log(today.getMonth());
    // console.log(today.getHours());
    // console.log(today.getMinutes());
    // console.log(today.getSeconds());
    // console.log(today.getMilliseconds());
    // console.log(today.getTime());
    
}

{
    // let today = new Date(`31 aug 2004 14:05:30`)

    // console.log(today.getDate());
    // console.log(today.getFullYear());
    // console.log(today.getDay());
    // console.log(today.getMonth());
    // console.log(today.getHours());
    // console.log(today.getMinutes());
    // console.log(today.getSeconds());
    // console.log(today.getMilliseconds());
    // console.log(today.getTime());
    
}

{
    // let demo = Date.now()
    
    // console.log(demo);
}

{
    // setInterval(() => { 
    //             let today = new Date()
                
    //             console.log(`${today.getHours()}/${today.getMinutes()}/${today.getSeconds()}`);
    //         } , 1000)
}

// date set methods **********************************************************************************************


{
    let today = new Date()

    console.log(today.getTime);

    let year = today.setFullYear(2080)
    console.log(today)

    let month = today.setMonth(7)
    console.log(today)
    
    let date = today.setDate(31)
    console.log(today)

    let hour = today.setHours(2)
    console.log(today)

    let minute = today.setMinutes(31)
    console.log(today)

    let second = today.setSeconds(31)
    console.log(today)
    

}