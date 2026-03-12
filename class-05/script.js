/*
function pattern1() {
    for (let i = 1; i <= 4; i++) {
        let ans = " ";
        for (let j = 0; j<= 4; j++) {
            ans += i;
        }
        console.log(ans);
    }
}
pattern1();


//2
function pattern2() {
    for (let i = 1; i <= 4; i++) {
        let ans = " ";
        for (let j = 0; j <= 4; j++) {
            ans += j + 1;
        }
        console.log(ans);
    }
}
pattern2();


//3
function pattern3() {
    for (let i = 1; i < 4; i++) {
        let ans = " ";
        for (let j = 1; j <= 4; j++) {
            ans += j + 1;
        }
        console.log(ans);
    }
}
pattern3();

//4
function pattern4() {
    for (let i = 1; i <= 4; i++) {
        let ans = " ";
        for (let j = 1; j < 4; j++) {
            ans += i + 1;
        }
        console.log(ans);
    }
}
pattern4();


//5
function pattern5() {
    for (let i = 1; i <= 4; i++) {
        let ans = " ";
        for (let j = 1; j < 4; j++) {
            ans += " * ";
        }
        console.log(ans);
    }
}
pattern5();


//6
function pattern6() {
    for (let i = 1; i <= 5; i++) {
        let ans = " ";
        for (let j = 1; j <= i; j++) {
            ans += " * ";
        }
        console.log(ans);
    }
}
pattern6();


//Reverse Pattern
//1
function pattern7() {
    for (let i = 1; i <= 5; i++) {
        let ans = " ";
        for (let j = 1; j <= 5 - i + 1; j++) {
            ans += " * ";
        }
        console.log(ans);
    }
}
pattern7();


//2
function pattern8() {
    for (let i = 1; i <= 5; i++) {
        let ans = " ";
        for (let j = 1; j <= 5 - i + 1; j++) {
            ans += i;
        }
        console.log(ans);
    }
}
pattern8();


//3
function pattern9() {
    for (let i = 1; i <= 5; i++) {
        let ans = " ";
        for (let j = 1; j <= 5 - i + 1; j++) {
            ans += j;
        }
        console.log(ans);
    }
}
pattern9();

//4
function pattern10() {
    for (let i = 1; i <= 5; i++) {
        let space = " "
        let star = " "

        for (let j = 5 - i; j >= 1; j--) {
            space = " ";
        }
        for (let k = 1; k <= i; k++) {
            star += " * ";
        }
        console.log(space + star);
    }

}
pattern10();

//5
/*
function pattern11() {
    for (let i = 1; i <= 5; i++) {
        let space = " "
        let star = " "

        for (let j = 4 - i; j >= 0; j--) {
            space += " ";
        }
        for (let k = 1; k <= i; k++) {
            star += "*  ";
        }
        console.log(space + star);
    }
}
pattern11();


//Paramid
function pattern12() {
    for (let i = 1; i <= 5; i++) {
        let space = " "
        let star = " "

        for (let spa = 1 ;  spa<i; spa++) {
            space += " ";
        }
        for (let k = 1; k <= 5-i+1; k++) {
            star += "*  ";
        }
        console.log(space + star);
    }
}
pattern12();

//Paramid
function pattern13() {
    for (let i = 1; i <= 5; i++) {
        let space = " "
        let star = " "

        for (let spa = 1 ;  spa<i; spa++) {
            space += " ";
        }
        for (let k = 1; k <= 5-i+1; k++) {
            star += k + " ";
        }
        console.log(space + star);
    }
}
pattern13();



function pattern14() {
    for (let i = 1; i <= 5; i++) {
        let space = " "
        let star = " "

        for (let spa = 4 ;  spa<10-i-1; spa--) {
            space += " ";
        }
        for (let k = 1; k <= 5-i; k++) {
            star += k + " ";
        }
        console.log(space + star);
    }
}
pattern14();


function pattern15() {
    for (let i = 1; i <= 5; i++) {
        let space = " "
        let star = " "

        for (let spa = 4-i ;  spa>1; spa--) {
            space += " ";
        }
        for (let k = 1; k <= i; k++) {
            star += " * ";
        }
        console.log(space + star);
    }
}
pattern16();


function pattern17() {
    for (let i = 1; i <= 5; i++) {
        let space = " "
        let star = " "

        for (let spa = 4-i ;  spa>4-i; spa--) {
            space += " ";
        }
        for (let k = 1; k <= i; k++) {
            star += " * ";
        }
        console.log(space + star);
    }
}
pattern17();


function pattern18() {
    for (let i = 5; i >= 1; i++) {
        let space = ""
        let star = ""

        for (let spa = 1 ;  spa<=5; spa++) {
            space += " ";
        }
        for (let k = 1; k <= i; k++) {
            star += " * ";
        }
        console.log(space + star);
    }
}
pattern18();
*/


