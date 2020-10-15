

route = []
function push(se) {

    route.push(se)
    se.request()
}
function pop() {
    if (route.length <= 1){
        return
    }
    route.pop()
    var se = route[route.length - 1]
    se.request()
}

function pushWith(se) {
    route.splice(0,route.length)
    route.push(se)
    se.request()
}