(function () {//iify

    var worK = function () {
        console.log("from var work");
    };

    var dowork = function (f) {
        console.log("Starting");

        f();

        console.log("Ending");
    }

    //dowork(worK);

    var fun = function () {
        var count = 0;

        var task1 = function () {
            count++;
            console.log("Task1 " + count);
        }

        var task2 = function () {
            count++;
            console.log("Task2 " + count);
        }

        return {
            job1: task1,
            job2: task2
        }
    }

    var MegaFun = fun();

    MegaFun.job1();
    MegaFun.job2();
    MegaFun.job1();
    MegaFun.job2();
    MegaFun.job1();
    MegaFun.job2();
} ());






