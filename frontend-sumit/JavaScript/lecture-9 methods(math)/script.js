//javascript math methods

//math.PI
//give PI value 3.141592653589793


{
    let math1 = Math.PI

    console.log(math1);
}

//math.abs
//if value is in nagative than math.abs convert in to positive


{
    let math = Math.abs(-10)

    console.log(math);
}

//math.ceil
//if value is floting than ans is next integer  value example 5.1 ans is 6
    
{
    let math =Math.ceil(5.1)

    console.log(math);
    
}

//math.floor
//if value is floting than ans is same integer  value example 5.9 ans is 5
    
{
    let math =Math.floor(5.9)

    console.log(math);
    
}

//math.round
////if value is floting and above 0.5 than ans is next integer and below 0.5 than ans is same integer example 5.1 ans is 5 and 5.5 or 5.6 ans is 6

{
    let math = Math.round(5.1)
    let math1 = Math.round(5.5)
    let math2 = Math.round(5.6)

    console.log(math);
    console.log(math1);
    console.log(math2);
    
}

// Math.sign
//ans give in -1,1and 0
//integer is nagative than ans is -1
//integer is positive than ans is 1
//integer is Zero than ans is 0

{
    let math = Math.sign(-5)
    let math1 = Math.sign(5)
    let math2 = Math.sign(0)
    
    console.log(math);
    console.log(math1);
    console.log(math2);
}

// Math.sin and math.cos

// Angles (in degrees)	0°	30°	    45°	   60°	    90°
// Angles (in radian)	0	π/6	    π/4	   π/3	    π/2
// Sin θ	            0	1/2	    1/√2   √3/2	    1
// Cos θ	            1	√3/2	1/√2   1/2	    0
// Tan θ	            0	1/√3	1	   √3	    ∞
// Cot θ	            ∞	√3	    1	   1/√3	    0
// Sec θ	            1	2/√3	√2	   2	    ∞
// Cosec θ	            ∞	2	    √2	   2/√3	    1

// formula:
// degrees*3.141592653589793/180


{
    let math = Math.sin(30*3.141592653589793/180)
    console.log(math);
    
    let math1 = Math.cos(60*3.141592653589793/180)
    console.log(math1);

}

// Math.max
//give a maximum number

{
    let math11 = Math.max(5100 , 2501 , 730 , 4560 , 4985 , 768)

    console.log(math11);
}

// Math.min
//give a minimum number

{
    let math12 = Math.min(1900 , 20819 , 5930 , 4540 , 4495 , 8)

    console.log(math12);
}

// Math.trunc
//if value is floting than ans is same integer  value example 5.66 ans is 5

{
    let math = Math.trunc(5.66)

    console.log(math);
}

// Math.log
// Math.log2
// Math.log10

{
    let math = Math.log(5)
    let math1 = Math.log2(5)
    let math2 = Math.log10(5)

    console.log(math);
    console.log(math1);
    console.log(math2);
}