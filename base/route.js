

route = []
function push(se) {

    route.push(se)
    se.request()
}
function pop() {

    if (route.length <= 0){
        return
    }
    route[route.length - 1].disAppear()
    route.pop()
    var se = route[route.length - 1]
    se.appear()

}

function pushWith(se) {
    route.splice(0,route.length)
    route.push(se)
    se.request()
}