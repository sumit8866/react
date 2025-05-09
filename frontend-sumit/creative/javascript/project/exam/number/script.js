
    const a = parseInt(prompt("Enter Number :"))

    const permission = confirm("you want to check Neon number or not? \n if you want to check other number then press cancel")
    console.log(permission)


    if (permission == true) {
        const c = a
        let b = a * a
        let total = 0


        while (b !== 0) {
            total += b % 10
            b = Math.floor(b / 10)
        }

        if (total === c) {
            document.writeln(c + " is a Neon number")
        } else {
            document.writeln(c + " is not a Neon number")
        }
    }
    else{
        const choice=  parseInt(prompt("Enter 1 for Palindrom Number\n Enter 2 for Armstong Number\n Enter 3 for Spy Number"))
        if(choice === 1)
        {
            let j =a  
            let p = a
            let k = 0
            
            while(p != 0)
            {
                let i = p % 10
                k = k * 10 + i
                p= Math.floor(p / 10)
            } 
            if(j == k){
                document.writeln(j + " is a palindrom number")
            }
            else{
                document.writeln(j + " is not a palindrom number")
            }
        }
        else if (choice === 2) {
            let p = a
            let k = a
            let sum = 0

            while (k != 0) {
                let l = k % 10
                sum += l*l*l
                k = Math.floor(k / 10)
            }

            if (sum == p) {
                document.writeln(p + " is an Armstrong number")
            } else {
                document.writeln(p + " is not an Armstrong number")
            }
        }
        else
        if(choice == 3)
        {
                let n = a 
                let s = 0 
                let m = 1 

                while(n !== 0)
                {
                let y = n % 10
                    s += y
                    m *= y
                    n = Math.floor(n / 10)
                }
                    if(s === m)
                    {
                        document.writeln(a + " is spy nomber")
                    }
                    else
                    {
                        document.writeln(a + " is not spy nomber")
                    }
                
        }
        else{
            parseInt(prompt("Enter valid choice"))
        }
    }
