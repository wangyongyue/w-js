


function test()
{

//继承需要重写
    this.url = function () {

        return "http://127.0.0.1:9090/p";

    }
    this.param = function () {

        return "";
    }
    this.requestType = function () {
        return "None";
    }
    this.clickIndex = function (index) {
        console.log(index);

        var t = new test1()
        t.divId = this.divId
        push(t)

    }
    this.success = function (response) {
        this.arr = [new Book({name: "book"}),
            new Book({name: "book"}),
            new Book({name: "book"}),
            new Book({name: "book"}),
            new Book({name: "book"}),
            new Book({name: "book"}),
            new Book({name: "book"})
        ];

        this.reload();
    }
    this.failed = function (error) {

    }
}
test.prototype = new service()



function test1()
{
    this.clickIndex = function (index) {
        console.log(index);
        pop()
    }
    this.success = function (response) {
        this.arr = [new Book({name: "book"}),
            new Book({name: "book"}),
            new Book({name: "book"})
        ];

        this.reload();
    }
    this.failed = function (error) {

    }
}
test1.prototype = new service()